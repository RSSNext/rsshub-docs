<template>
  <div class="route-outline" v-if="routes.length > 0">
    <div class="outline-title">{{ isZh ? '路由列表' : 'On this page' }}</div>
    <nav class="outline-nav">
      <a
        v-for="route in routes"
        :key="route.id"
        :href="`#${route.id}`"
        class="outline-link"
        :class="{ active: activeId === route.id }"
        @click="handleClick(route.id, $event)"
      >
        {{ route.name }}
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useData } from 'vitepress'

interface RouteItem {
  id: string
  name: string
}

const props = defineProps<{
  routes: RouteItem[]
}>()

const { lang } = useData()
const isZh = computed(() => lang.value === 'zh')

const activeId = ref('')

function handleClick(id: string, e: Event) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.pushState(null, '', `#${id}`)
    activeId.value = id
  }
}

function updateActiveId() {
  const headings = props.routes.map(r => document.getElementById(r.id)).filter(Boolean) as HTMLElement[]
  const scrollY = window.scrollY

  for (let i = headings.length - 1; i >= 0; i--) {
    const heading = headings[i]
    if (heading.offsetTop <= scrollY + 100) {
      activeId.value = heading.id
      return
    }
  }

  if (headings.length > 0) {
    activeId.value = headings[0].id
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveId, { passive: true })
  updateActiveId()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveId)
})
</script>

<style scoped>
.route-outline {
  position: fixed;
  top: calc(var(--vp-nav-height) + 32px);
  right: 190px;
  width: 220px;
  max-height: calc(100vh - var(--vp-nav-height) - 64px);
  overflow-y: auto;
  padding: 16px;
  font-size: 13px;
}

@media (max-width: 1280px) {
  .route-outline {
    display: none;
  }
}

.outline-title {
  font-weight: 600;
  font-size: 13px;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.outline-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.outline-link {
  display: block;
  padding: 4px 0;
  color: var(--vp-c-text-2);
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.2s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.outline-link:hover {
  color: var(--vp-c-text-1);
}

.outline-link.active {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}
</style>
