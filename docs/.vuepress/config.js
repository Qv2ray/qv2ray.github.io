const { resolve } = require('path')
const r = (path) => resolve(__dirname, path)
module.exports = {
  theme: 'succinct',
  globalUIComponents: ['ThemeManager'],
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg',
      },
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': r('img'),
      },
    },
  },
  plugins: {
    '@vuepress/back-to-top': {},
    '@kidonng/vuepress-plugin-contributors': {},
    'seo': {
      modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      siteTitle: (_) => '纵使千山多万壑，犹有青鸾踏云间',
      title: (_) => 'Qv2ray Official Site',
      description: (_) => '跨平台 V2Ray GUI',
      type: (_) => 'website',
      url: (_) => 'https://qv2ray.net/',
      image: (_) =>
        'https://avatars.githubusercontent.com/u/60087221?s=400&v=4',
      twitterCard: (_) => 'summary',
    },
  },
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Qv2ray',
      description: 'Make v2ray real cross-platform',
    },
    '/': {
      lang: 'zh-CN',
      title: 'Qv2ray',
      description:
        '🌟 V2Ray Linux / Windows / macOS 跨平台 GUI 🔨 使用 C++17 / Qt5 ，支持订阅，扫描二维码，支持自定义路由编辑 🌟',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    displayAllHeaders: true,
    smoothScroll: true,
    sidebar: {
      '/getting-started/': ['', 'step1', 'step2', 'step3', 'step4', 'step5'],
      '/manual/': ['', 'general', 'route'],
      '/hacking/': ['', 'manuallybuild', 'cmake-argument'],
      '/plugins/': ['', 'usage', 'v2ray-integration', 'development'],
      '/faq/': ['', 'v2ray-core'],
      '/en/getting-started/': ['', 'step1', 'step2', 'step3', 'step4', 'step5'],
      '/en/hacking/': ['', 'manuallybuild', 'cmake-argument', 'distribute'],
      '/en/manual/': ['', 'general', 'route'],
      '/en/plugins/': ['', 'usage', 'v2ray-integration', 'development'],
      '/en/faq/': ['', 'v2ray-core'],
    },
    locales: {
      '/en/': {
        selectText: '选择语言',
        ariaLabel: '选择语言',
        label: 'English',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Getting Started',
            link: '/en/getting-started/',
          },
          {
            text: 'Manual',
            link: '/en/manual/',
          },
          {
            text: 'FAQ',
            link: '/en/faq/',
          },
          {
            text: 'Hacking',
            link: '/en/hacking/',
          },
          {
            text: 'Plugins',
            link: '/en/plugins/',
          },
        ],
      },
      '/': {
        selectText: 'Languages',
        ariaLabel: 'Select language',
        label: '简体中文',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        contributorsLabel: '贡献者',
        nav: [
          {
            text: '起步',
            link: '/getting-started/',
          },
          {
            text: '使用手册',
            link: '/manual/',
          },
          {
            text: '常见问题',
            link: '/faq/',
          },
          {
            text: '折腾',
            link: '/hacking/',
          },
          {
            text: '插件',
            link: '/plugins/',
          },
        ],
      },
    },
    repo: 'Qv2ray/Qv2ray',
    repoLabel: 'GitHub',
    docsRepo: 'Qv2ray/qv2ray.github.io',
    docsBranch: 'source',
    docsDir: 'docs',
    editLinks: true,
    algolia: {
      apiKey: 'f0da09ddb339a1b1fabe6ac3fbd78f42',
      indexName: 'qv2ray',
    },
  },
}
