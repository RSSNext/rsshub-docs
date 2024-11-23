import { defineConfig, type DefaultTheme } from 'vitepress'
import { categories } from './data'

const telegramLogo = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="1000px" height="1000px" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
    <title>Artboard</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="99.2583404%" id="linearGradient-1">
            <stop stop-color="#2AABEE" offset="0%"></stop>
            <stop stop-color="#229ED9" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle id="Oval" fill="url(#linearGradient-1)" cx="500" cy="500" r="500"></circle>
        <path d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z" id="Path-3" fill="#FFFFFF"></path>
    </g>
</svg>
`

export const shared = defineConfig({
  title: "RSSHub",
  description: "Everything is RSSible 🧡",
  srcDir: 'src',
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  head: [
    ['meta', { property: 'og:image', content: 'https://docs.rsshub.app/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'twitter:domain', content: 'rsshub.app' }],
    ['meta', { property: 'twitter:image', content: 'https://docs.rsshub.app/logo.png' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['script', {
      src: 'https://umami.diygod.dev/script.js',
      'data-website-id': 'be1761be-7547-49d5-91b8-5c97c8f7cec7',
      defer: ''
    }]
  ],

  themeConfig: {
    logo: '/logo.png',
    carbonAds: {
      code: 'CEAI653E',
      placement: 'docsrsshubapp'
    },
    outline: {
      level: [2, 3],
    },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            extractField: (document, fieldName) => {
              if (fieldName !== 'text' || document.id.includes('/routes/')) {
                return document[fieldName]
              }
            },
          },
          searchOptions: {
            boost: { title: 1, text: 0.1, titles: 1 }
          }
        }
      }
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Develop', link: '/joinus/' },
      { text: 'Deploy', link: '/deploy/' },
      { text: 'Ecosystem', link: '/ecosystem' },
      { text: 'Contributors', link: '/contributors' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DIYgod/RSSHub' },
      { icon: { svg: telegramLogo }, link: 'https://t.me/rsshub' },
      { icon: { svg: telegramLogo }, link: 'https://t.me/awesomeRSSHub' },
      { icon: 'x', link: 'https://x.com/intent/follow?screen_name=_RSSHub' },
    ],
    editLink: {
      pattern: 'https://github.com/DIYgod/RSSHub-Docs/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `© ${new Date().getFullYear()}. An <a href="https://open.network/" target="_blank">Open</a> project.`
    },

    sidebar: {
      '/joinus/': [
        {
          text: 'Develop',
          items: [
            { text: 'Quick Start', link: '/joinus/' },
            { text: 'Development Environment', link: '/joinus/new-rss/prerequisites' },
            { text: 'Just before you start', link: '/joinus/new-rss/before-start' },
            { text: 'Create Route', link: '/joinus/new-rss/start-code' },
            { text: 'Submit your route', link: '/joinus/new-rss/submit-route' },
          ],
        },
        {
          text: 'Advanced',
          items: [
            { text: 'RSS Feed Fundamentals', link: '/joinus/advanced/advanced-feed' },
            { text: 'Script Standard', link: '/joinus/advanced/script-standard' },
            { text: 'Using Cache', link: '/joinus/advanced/use-cache' },
            { text: 'Date Handling', link: '/joinus/advanced/pub-date' },
            { text: 'Debugging', link: '/joinus/advanced/debug' },
          ]
        }
      ],
      '/deploy/': [
        {
          text: 'Deploy',
          items: [
            { text: 'Deployment', link: '/deploy/' },
            { text: 'Configuration', link: '/deploy/config' },
          ],
        }
      ],
      '/guide/': sidebarGuide(),
      '/routes/': sidebarGuide(),
    },
  },
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: '/guide/' },
        { text: 'Public Instances', link: '/guide/instances' },
        { text: 'FAQs', link: '/guide/faqs' },
        { text: 'Troubleshooting', link: '/guide/troubleshooting' },
        { text: 'Parameters', link: '/guide/parameters' },
        { text: 'API', link: '/guide/api' },
      ],
    },
    {
      text: 'Routes',
      items: categories.map((category) => ({
        text: `${category.icon} ${category.en}`,
        link: category.link,
      })),
    },
  ]
}
