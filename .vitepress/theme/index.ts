import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';

import './style.css';
import Banner from './components/Banner.vue';
import CopyButtonVue from './components/CopyButton.vue';
import FoloAsideAd from './components/FoloAsideAd.vue';
import InstanceList from './components/InstanceList.vue';
import NamespaceDetail from './components/NamespaceDetail.vue';
import NamespaceList from './components/NamespaceList.vue';
import Route from './components/Route.vue';
import Site from './components/Site.vue';
import Sponsors from './components/Sponsors.vue';
import { setupI18n } from './i18n';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-ads-before': () => h(FoloAsideAd),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(setupI18n());
    app.component('Route', Route);
    app.component('Site', Site);
    app.component('Sponsors', Sponsors);
    app.component('InstanceList', InstanceList);
    app.component('CopyButton', CopyButtonVue);
    app.component('Banner', Banner);
    app.component('NamespaceList', NamespaceList);
    app.component('NamespaceDetail', NamespaceDetail);
  },
} satisfies Theme;
