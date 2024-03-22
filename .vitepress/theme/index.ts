// https://vitepress.dev/guide/custom-theme
import { h, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import "meilisearch-docsearch/css";
import './style.css'
import Route from './components/Route.vue'
import Site from './components/Site.vue'
import Sponsors from './components/Sponsors.vue'
import InstanceList from './components/InstanceList.vue'

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      // For SSR Compatibility https://vitepress.dev/guide/ssr-compat#ssr-compatibility
      import('meilisearch-docsearch').then((docsearch) => {
        docsearch.default({
          container: "#docsearch",
          host: "https://meilisearch.rsshub.app",
          apiKey: "375c36cd9573a2c1d1e536214158c37120fdd0ba6cd8829f7a848e940cc22245",
          indexUid: "rsshub",
        });
      })
    })
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-content-before': () => h(
        'span',
        { id: 'content-before' },
        [
          h('span', {
            id: 'docsearch'
          }),
        ]
      ),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Route', Route)
    app.component('Site', Site)
    app.component('Sponsors', Sponsors)
    app.component('InstanceList', InstanceList)
  }
} satisfies Theme
