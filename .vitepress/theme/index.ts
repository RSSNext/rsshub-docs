// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Route from './components/Route.vue'
import Site from './components/Site.vue'
import Sponsors from './components/Sponsors.vue'
import InstanceList from './components/InstanceList.vue'
import CopyButtonVue from './components/CopyButton.vue'
import Banner from './components/Banner.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Route', Route)
    app.component('Site', Site)
    app.component('Sponsors', Sponsors)
    app.component('InstanceList', InstanceList)
    app.component('CopyButton', CopyButtonVue)
    app.component('Banner', Banner)
  }
} satisfies Theme
