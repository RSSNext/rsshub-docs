import { defineConfig, type DefaultTheme } from 'vitepress'
import { categories } from './data'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: "Everything is RSSible 🧡",

  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '指南', link: '/zh/guide/' },
      { text: '参与我们', link: '/zh/joinus/' },
      { text: '部署', link: '/zh/deploy/' },
      { text: '支持我们', link: '/zh/support/' },
    ],

    editLink: {
      pattern: 'https://github.com/DIYgod/RSSHub-Docs/edit/main/src/zh/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2018-present DIYgod'
    },

    sidebar: {
      '/zh/joinus/': [
        {
          text: 'Join Us',
          items: [
            { text: 'Quick Start', link: '/zh/joinus/' },
          ],
        },
        {
          text: 'New RSSHub Rules',
          items: [
            { text: 'Prerequisites', link: '/zh/joinus/new-rss/prerequisites' },
            { text: 'Just before you start', link: '/zh/joinus/new-rss/before-start' },
            { text: 'Create Route', link: '/zh/joinus/new-rss/start-code' },
            { text: 'Submit your route', link: '/zh/joinus/new-rss/submit-route' },
          ],
        },
        {
          items: [
            { text: 'New RSSHub Radar Rules', link: '/zh/joinus/new-radar' },
          ],
        },
        {
          text: 'Advanced',
          items: [
            { text: 'RSS Feed Fundamentals', link: '/zh/joinus/advanced/advanced-feed' },
            { text: 'Script Standard', link: '/zh/joinus/advanced/script-standard' },
            { text: 'Using Cache', link: '/zh/joinus/advanced/use-cache' },
            { text: 'Date Handling', link: '/zh/joinus/advanced/pub-date' },
            { text: 'Debugging', link: '/zh/joinus/advanced/debug' },
          ]
        }
      ],
      '/zh/deploy/': [
        {
          text: 'Deploy',
          items: [
            { text: 'Deployment', link: '/zh/deploy/' },
            { text: 'Configuration', link: '/zh/deploy/config' },
          ],
        }
      ],
      '/zh/guide/': sidebarGuide(),
      '/zh/routes/': sidebarGuide(),
    },
  },
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: '/zh/guide/' },
        { text: 'Public Instances', link: '/zh/guide/instances' },
        { text: 'FAQs', link: '/zh/guide/faqs' },
        { text: 'Parameters', link: '/zh/guide/parameters' },
        { text: 'API', link: '/zh/guide/api' },
      ],
    },
    {
      text: 'Routes',
      items: categories.map((category) => ({
        text: `${category.icon} ${category.zh}`,
        link: category.link,
      })),
    },
  ]
}