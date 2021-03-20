const { resolve } = require('path')
const r = (path) => resolve(__dirname, path)

const NAVS = {
    'getting-started': ['', 'step1', 'step2', 'step3', 'step4', 'step5'],
    'manual': ['', 'general', 'route'],
    'plugins': ['', 'usage', 'v2ray-integration', 'development'],
    'hacking': ['', 'manuallybuild', 'cmake-argument'],
    'faq': [''],
}

function addLanguage(info_json, lang_path) {
    lang_locale_object = {
        title: "Qv2ray",
        lang: info_json.lang,
        description: info_json.description
    }

    theme_lang_locale_object = {
        selectText: info_json.selectText,
        label: info_json.label,
        editLinkText: info_json.editLinkText,
        lastUpdated: info_json.lastUpdated,
        nav: []
    }

    Object.keys(NAVS).forEach(key => {
        website_config.themeConfig.sidebar[lang_path + key + "/"] = NAVS[key]
        theme_lang_locale_object.nav.push({ link: lang_path + key + "/", text: info_json.nav[key] })
    })

    website_config.locales[lang_path] = lang_locale_object
    website_config.themeConfig.locales[lang_path] = theme_lang_locale_object
    console.log("Added language:", lang_path, lang_locale_object, theme_lang_locale_object)
}

website_config = {
    theme: 'succinct',
    globalUIComponents: ['ThemeManager'],
    head: [[
        'link',
        { rel: 'icon', href: '/logo.svg' }
    ]],
    configureWebpack: { resolve: { alias: { '@img': r('img') } } },
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
            image: (_) => 'https://avatars.githubusercontent.com/u/60087221?s=400&v=4',
            twitterCard: (_) => 'summary',
        },
    },
    locales: {},
    themeConfig: {
        logo: '/logo.svg',
        displayAllHeaders: true,
        smoothScroll: true,
        sidebar: {},
        locales: {},
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

// Base Language
addLanguage(JSON.parse(fs.readFileSync("docs/language.json")), "/")

fs.readdirSync("docs/lang").forEach(lang => {
    lang_infofile_path = "docs/lang/" + lang + "/language.json";
    lang_basedir = "/lang/" + lang + "/";

    if (fs.existsSync(lang_infofile_path)) {
        info_json = JSON.parse(fs.readFileSync(lang_infofile_path))
        addLanguage(info_json, lang_basedir)
    }
});

module.exports = website_config