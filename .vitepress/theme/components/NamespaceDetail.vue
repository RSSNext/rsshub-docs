<template>
  <div class="namespace-detail" v-if="namespace">
    <div class="namespace-header">
      <div class="namespace-icon">
        <img
          :src="`https://icons.folo.is/${namespace.url || currentNamespaceId + '.com'}`"
          :alt="namespace.name"
          @error="handleImageError"
        />
      </div>
      <div class="namespace-title">
        <h1>{{ getLocalizedName(namespace) }}</h1>
        <div class="namespace-meta">
          <a v-if="namespace.url" :href="`https://${namespace.url}`" target="_blank" class="site-link">
            {{ namespace.url }}
          </a>
          <span v-if="namespace.heat" class="heat-badge">{{ formatHeat(namespace.heat) }}</span>
        </div>
      </div>
    </div>

    <div class="category-tags">
      <span v-for="cat in namespaceCategories" :key="cat.id" class="category-tag">
        {{ cat.icon }} {{ isZh ? cat.zh : cat.en }}
      </span>
    </div>

    <div v-if="getLocalizedDescription(namespace)" class="namespace-description" v-html="renderMarkdown(getLocalizedDescription(namespace))"></div>

    <h2>{{ isZh ? 'Routes' : 'Routes' }}</h2>

    <div class="routes-list">
      <div v-for="(route, path) in sortedRoutes" :key="path" class="route-block">
        <h3 :id="getRouteId(path as string)">
          <a class="header-anchor" :href="`#${getRouteId(path as string)}`">#</a>
          {{ getLocalizedRouteName(route) }} <Site v-if="route.url || namespace.url" :url="route.url || namespace.url" size="sm" />
        </h3>
        <Route :namespace="currentNamespaceId" :data="prepareRouteData(route)" :test="route.test" />
        <div v-if="getLocalizedDescription(route)" v-html="renderMarkdown(getLocalizedDescription(route))"></div>
      </div>
    </div>

    <RouteOutline :routes="outlineRoutes" />
  </div>
  <div v-else-if="loading" class="loading">
    {{ isZh ? '加载中...' : 'Loading...' }}
  </div>
  <div v-else class="not-found">
    {{ isZh ? '未找到该路由' : 'Namespace not found' }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import MarkdownIt from 'markdown-it'
import Route from './Route.vue'
import Site from './Site.vue'
import RouteOutline from './RouteOutline.vue'

interface RouteData {
  path: string | string[]
  name: string
  url?: string
  maintainers: string[]
  example: string
  parameters?: Record<string, any>
  description?: string
  categories?: string[]
  features?: Record<string, any>
  radar?: any[]
  view?: number
  location?: string
  heat: number
  topFeeds: any[]
  zh?: {
    name?: string
    description?: string
    parameters?: Record<string, any>
  }
  test?: {
    code: number
    message?: string
  }
}

interface NamespaceData {
  name: string
  url?: string
  description?: string
  categories: string[]
  heat: number
  routes: Record<string, RouteData>
  zh?: {
    name?: string
    description?: string
  }
}

interface Category {
  id: string
  icon: string
  en: string
  zh: string
}

const props = defineProps<{
  namespaceId?: string
}>()

const { lang } = useData()
const vpRoute = useRoute()

// Get namespace from props or URL path
const getNamespaceFromPath = () => {
  const path = vpRoute.path
  // Path format: /routes/[namespace] or /zh/routes/[namespace]
  const segments = path.split('/').filter(Boolean)
  // Last segment is the namespace
  return segments[segments.length - 1] || ''
}

const currentNamespaceId = computed(() => props.namespaceId || getNamespaceFromPath())

const isZh = computed(() => lang.value === 'zh')

const namespace = ref<NamespaceData | null>(null)
const categories = ref<Category[]>([])
const loading = ref(true)
const routesData = ref<Record<string, NamespaceData>>({})

const md = new MarkdownIt({
  html: true,
})

onMounted(async () => {
  await loadData()
})

watch(currentNamespaceId, async () => {
  updateNamespace()
})

async function loadData() {
  loading.value = true
  try {
    const [routesRes, categoriesRes] = await Promise.all([
      fetch('/routes.json'),
      fetch('/categories.json')
    ])
    routesData.value = await routesRes.json()
    categories.value = await categoriesRes.json()
    updateNamespace()
  } catch (e) {
    console.error('Failed to load data:', e)
    namespace.value = null
  } finally {
    loading.value = false
  }
}

function updateNamespace() {
  const nsId = currentNamespaceId.value
  namespace.value = routesData.value[nsId] || null
}

const namespaceCategories = computed(() => {
  if (!namespace.value) return []
  return categories.value.filter(cat => namespace.value?.categories.includes(cat.id))
})

const sortedRoutes = computed(() => {
  if (!namespace.value) return {}
  const routes = Object.entries(namespace.value.routes)
    .sort(([, a], [, b]) => b.heat - a.heat)
  return Object.fromEntries(routes)
})

function getRouteId(path: string) {
  // Generate a URL-safe ID from the route path
  return path.replace(/^\//, '').replace(/\//g, '-').replace(/[^a-zA-Z0-9-]/g, '')
}

function getLocalizedRouteName(data: RouteData) {
  if (isZh.value && data.zh?.name) {
    return data.zh.name
  }
  return data.name
}

const outlineRoutes = computed(() => {
  return Object.entries(sortedRoutes.value).map(([path, route]) => ({
    id: getRouteId(path),
    name: getLocalizedRouteName(route as RouteData)
  }))
})

function getLocalizedName(data: NamespaceData) {
  if (isZh.value && data.zh?.name) {
    return data.zh.name
  }
  return data.name
}

function getLocalizedDescription(data: NamespaceData | RouteData) {
  if (isZh.value && (data as RouteData).zh?.description) {
    return (data as RouteData).zh!.description
  }
  return data.description
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

function renderMarkdown(content: string) {
  return md.render(content)
}

function prepareRouteData(route: RouteData) {
  // Prepare route data for the Route component
  // Apply localization if needed
  const data = { ...route }
  if (isZh.value && route.zh) {
    if (route.zh.name) data.name = route.zh.name
    if (route.zh.parameters) {
      data.parameters = { ...data.parameters, ...route.zh.parameters }
    }
  }
  return data
}
</script>

<style scoped>
.namespace-detail {
  width: 100%;
}

.namespace-detail h1 {
  margin: 0;
  border: none;
  padding: 0;
  font-size: 28px;
  line-height: 1.2;
}

.namespace-detail h2 {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.namespace-detail h3 {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}

.namespace-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.namespace-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.namespace-icon img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.namespace-title {
  flex: 1;
}

.namespace-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  flex-wrap: wrap;
}

.site-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-size: 14px;
}

.site-link:hover {
  text-decoration: underline;
}

.heat-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  background: rgba(255, 92, 0, 0.1);
  color: #ff5c00;
  border-radius: 6px;
  font-weight: 500;
  font-size: 13px;
}

.heat-badge::before {
  content: '\01F525';
  margin-right: 4px;
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.category-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.namespace-description {
  margin-bottom: 16px;
  color: var(--vp-c-text-2);
}

.routes-list {
  display: flex;
  flex-direction: column;
}

.route-block {
  padding: 24px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.route-block:first-child {
  padding-top: 0;
}

.route-block:last-child {
  border-bottom: none;
}

.loading,
.not-found {
  text-align: center;
  padding: 48px;
  color: var(--vp-c-text-2);
}

.header-anchor {
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  font-weight: 500;
  opacity: 0;
  transition: color 0.25s, opacity 0.25s;
  text-decoration: none;
  color: var(--vp-c-brand-1);
}

h3:hover .header-anchor {
  opacity: 1;
}
</style>
