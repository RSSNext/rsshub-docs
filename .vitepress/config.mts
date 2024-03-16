import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RSSHub",
  description: "Everything is RSSible 🧡",
  srcDir: 'src',

  themeConfig: {
    logo: '/logo.png',
    carbonAds: {
      code: 'CEAI653E',
      placement: 'docsrsshubapp'
    },
  
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Public Instances', link: '/guide/instances' },
          { text: 'FAQs', link: '/guide/faqs' },
          { text: 'Parameters', link: '/guide/parameters' },
          { text: 'API', link: '/guide/api' },
        ],
      },
      {
        text: 'Routes',
        items: [
          {
              "text": "💬 Social Media",
              "link": "/routes/social-media"
          },
          {
              "text": "📱 New media",
              "link": "/routes/new-media"
          },
          {
              "text": "📰 News",
              "link": "/routes/traditional-media"
          },
          {
              "text": "💬️ BBS",
              "link": "/routes/bbs"
          },
          {
              "text": "🖊️️ Blog",
              "link": "/routes/blog"
          },
          {
              "text": "💻 Programming",
              "link": "/routes/programming"
          },
          {
              "text": "🎨️ Design",
              "link": "/routes/design"
          },
          {
              "text": "🎥 Live",
              "link": "/routes/live"
          },
          {
              "text": "🔊 Multimedia",
              "link": "/routes/multimedia"
          },
          {
              "text": "🖼️ Picture",
              "link": "/routes/picture"
          },
          {
              "text": "🎨️ ACG",
              "link": "/routes/anime"
          },
          {
              "text": "🔄 Application Updates",
              "link": "/routes/program-update"
          },
          {
              "text": "🎓 University",
              "link": "/routes/university"
          },
          {
              "text": "❗️ Forecast and Alerts",
              "link": "/routes/forecast"
          },
          {
              "text": "🛫 Travel",
              "link": "/routes/travel"
          },
          {
              "text": "🛍️ Shopping",
              "link": "/routes/shopping"
          },
          {
              "text": "🎮 Gaming",
              "link": "/routes/game"
          },
          {
              "text": "📚 Reading",
              "link": "/routes/reading"
          },
          {
              "text": "📢 Government",
              "link": "/routes/government"
          },
          {
              "text": "📖 Study",
              "link": "/routes/study"
          },
          {
              "text": "🔬 Scientific Journal",
              "link": "/routes/journal"
          },
          {
              "text": "💰 Finance",
              "link": "/routes/finance"
          },
          {
              "text": "🔍 Uncategorized",
              "link": "/routes/other"
          }
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
