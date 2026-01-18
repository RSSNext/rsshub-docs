<template>
  <div class="namespace-list">
    <div class="filters">
      <div class="filter-row">
        <div class="search-box">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="isZh ? '搜索路由...' : 'Search routes...'"
            class="search-input"
          />
        </div>
        <div class="filter-group">
          <select v-model="selectedCategory" class="filter-select">
            <option value="">{{ isZh ? '全部分类' : 'All Categories' }}</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
              {{ cat.icon }} {{ isZh ? cat.zh : cat.en }}
            </option>
          </select>
          <select v-model="sortBy" class="filter-select">
            <option value="heat">{{ isZh ? '按热度排序' : 'Sort by Heat' }}</option>
            <option value="alpha">{{ isZh ? '按字母排序' : 'Sort by Name' }}</option>
          </select>
        </div>
      </div>
      <div class="feature-filters">
        <label class="feature-checkbox">
          <input type="checkbox" v-model="featureFilters.passed" />
          <span>{{ isZh ? '测试通过' : 'Passed Test' }}</span>
        </label>
        <label class="feature-checkbox">
          <input type="checkbox" v-model="featureFilters.notAntiCrawler" />
          <span>{{ isZh ? '无反爬' : 'No Anti-crawling' }}</span>
        </label>
        <label class="feature-checkbox">
          <input type="checkbox" v-model="featureFilters.supportBT" />
          <span>{{ isZh ? '支持 BT' : 'Support BT' }}</span>
        </label>
        <label class="feature-checkbox">
          <input type="checkbox" v-model="featureFilters.supportPodcast" />
          <span>{{ isZh ? '支持播客' : 'Support Podcast' }}</span>
        </label>
        <label class="feature-checkbox">
          <input type="checkbox" v-model="featureFilters.supportScihub" />
          <span>{{ isZh ? '支持 Sci-Hub' : 'Support Sci-Hub' }}</span>
        </label>
        <label class="feature-checkbox">
          <input type="checkbox" v-model="featureFilters.notPuppeteer" />
          <span>{{ isZh ? '无需 Puppeteer' : 'No Puppeteer' }}</span>
        </label>
        <label class="feature-checkbox">
          <input type="checkbox" v-model="featureFilters.notRequireConfig" />
          <span>{{ isZh ? '无需配置' : 'No Config' }}</span>
        </label>
      </div>
    </div>

    <div class="namespace-grid">
      <a
        v-for="ns in filteredNamespaces"
        :key="ns.id"
        :href="getNamespaceLink(ns.id)"
        class="namespace-card"
      >
        <div class="namespace-icon">
          <img
            :src="`https://icons.folo.is/${ns.url || ns.id + '.com'}`"
            :alt="ns.name"
            @error="handleImageError"
          />
        </div>
        <div class="namespace-info">
          <div class="namespace-name">{{ getLocalizedName(ns) }}</div>
          <div class="namespace-meta">
            <span class="route-count">{{ Object.keys(ns.routes).length }} {{ isZh ? 'routes' : 'routes' }}</span>
            <span v-if="ns.heat" class="heat-badge">{{ formatHeat(ns.heat) }}</span>
          </div>
        </div>
      </a>
    </div>

    <div v-if="filteredNamespaces.length === 0" class="no-results">
      {{ isZh ? '没有找到匹配的路由' : 'No matching routes found' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'

interface RouteData {
  path: string | string[]
  name: string
  categories?: string[]
  heat: number
  features?: {
    antiCrawler?: boolean
    supportBT?: boolean
    supportPodcast?: boolean
    supportScihub?: boolean
    requirePuppeteer?: boolean
    requireConfig?: boolean | string[]
  }
  test?: {
    code: number
    message?: string
  }
  zh?: {
    name?: string
  }
}

interface NamespaceData {
  id: string
  name: string
  url?: string
  categories: string[]
  heat: number
  routes: Record<string, RouteData>
  zh?: {
    name?: string
  }
}

interface Category {
  id: string
  icon: string
  en: string
  zh: string
}

const { lang } = useData()
const isZh = computed(() => lang.value === 'zh')

const namespaces = ref<NamespaceData[]>([])
const categories = ref<Category[]>([])
const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref<'heat' | 'alpha'>('heat')
const featureFilters = ref({
  passed: false,
  notAntiCrawler: false,
  supportBT: false,
  supportPodcast: false,
  supportScihub: false,
  notPuppeteer: false,
  notRequireConfig: false
})

onMounted(async () => {
  try {
    const [routesRes, categoriesRes] = await Promise.all([
      fetch('/routes.json'),
      fetch('/categories.json')
    ])
    const routesData = await routesRes.json()
    const categoriesData = await categoriesRes.json()

    namespaces.value = Object.entries(routesData).map(([id, data]: [string, any]) => ({
      id,
      ...data
    }))

    categories.value = categoriesData
  } catch (e) {
    console.error('Failed to load routes data:', e)
  }
})

// Helper function to check if a route matches a specific feature
function routeHasFeature(route: RouteData, feature: string): boolean {
  switch (feature) {
    case 'passed':
      return route.test?.code === 0
    case 'notAntiCrawler':
      return route.features?.antiCrawler !== true
    case 'supportBT':
      return route.features?.supportBT === true
    case 'supportPodcast':
      return route.features?.supportPodcast === true
    case 'supportScihub':
      return route.features?.supportScihub === true
    case 'notPuppeteer':
      return route.features?.requirePuppeteer !== true
    case 'notRequireConfig':
      return route.features?.requireConfig !== true && !Array.isArray(route.features?.requireConfig)
    default:
      return true
  }
}

// Check if namespace has routes matching all active feature filters
function namespaceMatchesFeatureFilters(ns: NamespaceData): boolean {
  const activeFilters = Object.entries(featureFilters.value)
    .filter(([_, active]) => active)
    .map(([feature]) => feature)

  if (activeFilters.length === 0) return true

  // Namespace must have at least one route matching ALL active filters
  return Object.values(ns.routes).some(route =>
    activeFilters.every(feature => routeHasFeature(route, feature))
  )
}

const filteredNamespaces = computed(() => {
  let result = namespaces.value

  // Category filter
  if (selectedCategory.value) {
    result = result.filter(ns => ns.categories.includes(selectedCategory.value))
  }

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(ns => {
      const nameMatch = ns.name.toLowerCase().includes(query) ||
        ns.id.toLowerCase().includes(query) ||
        (ns.zh?.name?.toLowerCase().includes(query))

      const routeMatch = Object.values(ns.routes).some(route =>
        route.name.toLowerCase().includes(query) ||
        (route.zh?.name?.toLowerCase().includes(query))
      )

      return nameMatch || routeMatch
    })
  }

  // Feature filters
  result = result.filter(ns => namespaceMatchesFeatureFilters(ns))

  // Sort
  if (sortBy.value === 'heat') {
    result = [...result].sort((a, b) => b.heat - a.heat)
  } else if (sortBy.value === 'alpha') {
    result = [...result].sort((a, b) => {
      const nameA = getLocalizedName(a).toLowerCase()
      const nameB = getLocalizedName(b).toLowerCase()
      return nameA.localeCompare(nameB)
    })
  }

  return result
})

function getNamespaceLink(id: string) {
  const prefix = isZh.value ? '/zh' : ''
  return `${prefix}/routes/${id}`
}

function getLocalizedName(ns: NamespaceData) {
  if (isZh.value && ns.zh?.name) {
    return ns.zh.name
  }
  return ns.name
}

function formatHeat(heat: number) {
  if (heat >= 1000000) {
    return (heat / 1000000).toFixed(1) + 'M'
  }
  if (heat >= 1000) {
    return (heat / 1000).toFixed(1) + 'K'
  }
  return heat.toString()
}

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = '/logo.png'
}
</script>

<style scoped>
.namespace-list {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.filter-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.search-box {
  flex: 1;
  min-width: 200px;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  font-size: 14px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.filter-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  font-size: 14px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  min-width: 120px;
  height: 100%;
}

.feature-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.feature-checkbox {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 13px;
  color: var(--vp-c-text-2);
  user-select: none;
}

.feature-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: var(--vp-c-brand-1);
}

.feature-checkbox:hover {
  color: var(--vp-c-text-1);
}

.namespace-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  max-width: 100%;
}

.namespace-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
  background: var(--vp-c-bg);
  min-width: 0;
  box-sizing: border-box;
}

.namespace-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.namespace-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.namespace-icon img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.namespace-info {
  flex: 1;
  min-width: 0;
}

.namespace-name {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vp-c-text-1);
}

.namespace-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.route-count {
  color: var(--vp-c-text-3);
}

.heat-badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  background: rgba(255, 92, 0, 0.1);
  color: #ff5c00;
  border-radius: 4px;
  font-weight: 500;
  font-size: 11px;
}

.heat-badge::before {
  content: '\01F525';
  margin-right: 2px;
  font-size: 10px;
}

.no-results {
  text-align: center;
  padding: 48px;
  color: var(--vp-c-text-2);
}
</style>
