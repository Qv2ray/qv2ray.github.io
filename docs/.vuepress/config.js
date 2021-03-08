const { resolve } = require('path')
const r = (path) => resolve(__dirname, path)

DEFAULT_SIDE_BAR = {
    '/getting-started/': ['', 'step1', 'step2', 'step3', 'step4', 'step5'],
    '/manual/': ['', 'general', 'route'],
    '/hacking/': ['', 'manuallybuild', 'cmake-argument'],
    '/plugins/': ['', 'usage', 'v2ray-integration', 'development'],
    '/faq/': ['', 'v2ray-core'],
}

website_config = {
    theme: 'succinct',
    globalUIComponents: ['ThemeManager'],
    head: [[
        'link',
        { rel: 'icon', href: '/logo.svg' }
    ]],
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
        '/': {
            lang: 'en-US',
            title: 'Qv2ray',
            description: 'Qv2ray - Cross Platform Qt GUI Front-end for V2Ray',
        },
    },
    themeConfig: {
        logo: '/logo.svg',
        displayAllHeaders: true,
        smoothScroll: true,
        sidebar: { ...DEFAULT_SIDE_BAR },
        locales: {
            '/': {
                selectText: 'Languages',
                ariaLabel: 'Select language',
                label: 'English',
                editLinkText: 'Edit This Page',
                lastUpdated: 'Last Updated',
                contributorsLabel: 'Contributors',
                nav: [
                    { text: 'Getting Started', link: '/getting-started/' },
                    { text: 'User Manual', link: '/manual/' },
                    { text: 'FAQ', link: '/faq/' },
                    { text: 'Hacking', link: '/hacking/' },
                    { text: 'Plugins', link: '/plugins/' },
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


const fs = require("fs")

fs.readdirSync("docs/lang").forEach(lang => {
    lang_info = JSON.parse(fs.readFileSync("docs/lang/" + lang + "/language.json"))
    console.log("Find language:", lang, lang_info.label)
    lang_path = "/lang/" + lang + "/"
    website_config.locales[lang_path] = { lang: lang_info.lang, title: "Qv2ray", description: lang_info.description }
    lang_locale_object = {
        selectText: lang_info.selectText,
        ariaLabel: lang_info.ariaLabel,
        label: lang_info.label,
        editLinkText: lang_info.editLinkText,
        lastUpdated: lang_info.lastUpdated,
        nav: []
    }
    Object.keys(DEFAULT_SIDE_BAR).forEach(key => {
        _navkey = key.substring(1, key.length - 1)
        website_config.themeConfig.sidebar["/lang/" + lang + key] = DEFAULT_SIDE_BAR[key]
        lang_locale_object.nav.push({ link: lang_path + _navkey, text: lang_info.nav[_navkey] })
    });
    website_config.themeConfig.locales[lang_path] = lang_locale_object
});

module.exports = website_config