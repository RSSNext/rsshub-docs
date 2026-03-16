import { defineConfig, type DefaultTheme } from 'vitepress';

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '万物皆可 RSS 🧡',

  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '食用指南', link: '/zh/guide/' },
      { text: '开发路由', link: '/zh/joinus/' },
      { text: '部署', link: '/zh/deploy/' },
      { text: '生态系统', link: '/zh/ecosystem' },
      { text: '贡献者', link: '/zh/contributors' },
    ],

    editLink: {
      pattern: 'https://github.com/DIYgod/RSSHub-Docs/edit/main/src/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2018-${new Date().getFullYear()} DIYgod`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      level: [2, 3],
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    sidebar: {
      '/zh/joinus/': [
        {
          text: '开发路由',
          items: [
            { text: '快速开始', link: '/zh/joinus/' },
            { text: '开发环境', link: '/zh/joinus/new-rss/prerequisites' },
            { text: '开始之前', link: '/zh/joinus/new-rss/before-start' },
            { text: '制作路由', link: '/zh/joinus/new-rss/start-code' },
            { text: '提交路由', link: '/zh/joinus/new-rss/submit-route' },
          ],
        },
        {
          text: '高级用法',
          items: [
            { text: 'RSS 基础', link: '/zh/joinus/advanced/advanced-feed' },
            { text: '路由规范', link: '/zh/joinus/advanced/script-standard' },
            { text: '使用缓存', link: '/zh/joinus/advanced/use-cache' },
            { text: '日期处理', link: '/zh/joinus/advanced/pub-date' },
            { text: '调试', link: '/zh/joinus/advanced/debug' },
          ],
        },
      ],
      '/zh/deploy/': [
        {
          text: '部署',
          items: [
            { text: '部署', link: '/zh/deploy/' },
            { text: '配置', link: '/zh/deploy/config' },
          ],
        },
      ],
      '/zh/guide/': sidebarGuide(),
      '/zh/routes/': sidebarGuide(),
    },
  },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        { text: '开始食用', link: '/zh/guide/' },
        { text: '公共实例', link: '/zh/guide/instances' },
        { text: '常见问题', link: '/zh/guide/faqs' },
        { text: '故障排除', link: '/zh/guide/troubleshooting' },
        { text: '通用参数', link: '/zh/guide/parameters' },
        { text: 'API', link: '/zh/guide/api' },
      ],
    },
    {
      text: '路由',
      items: [{ text: '全部路由', link: '/zh/routes/' }],
    },
  ];
}
