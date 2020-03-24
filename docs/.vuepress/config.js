const {
    resolve
} = require('path')
const r = path => resolve(__dirname, path)
module.exports = {
    title: 'Qv2ray',
    description: 'Make v2ray real cross-platform',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@img': r('img')
            }
        }
    },
    locales: {
        '/en/': {
            lang: 'en-US',
            title: 'Qv2ray',
            description: 'Make v2ray real cross-platform'
        },
        '/': {
            lang: 'zh-CN',
            title: 'Qv2ray',
            description: '🌟 V2Ray Linux / Windows / macOS 跨平台 GUI 🔨 使用 C++17/Qt5 ，支持订阅，扫描二维码，支持自定义路由编辑 🌟'
        }
    },
    themeConfig: {
        logo: '/logo.png',
        displayAllHeaders: true,
        sidebar: 'auto',
        nextLinks: true,
        prevLinks: true,
        sidebar: {
            '/getting-started/': [
                '',
                'step1',
                'step2',
                'step3',
                'step4',
                'step5'
            ],
            '/hacking/': [
                '',
                'manuallybuild'
            ],
            '/en/getting-started/': [
                '',
                'step1',
                'step2',
                'step3',
                'step4',
                'step5'
            ],
            '/en/hacking/': [
                '',
                'manuallybuild'
            ],
        },
        locales: {
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [{
                    text: 'Getting Started',
                    link: '/en/getting-started/'
                }, {
                    text: 'Features',
                    link: '/en/features/'
                }, {
                    text: 'Manual',
                    link: '/en/manual/'
                }, {
                    text: 'FAQ',
                    link: '/en/faq/'
                }, {
                    text: 'Hacking',
                    link: '/en/hacking/'
                }],
            },
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                nav: [{
                    text: '起步',
                    link: '/getting-started/'
                }, {
                    text: '特性',
                    link: '/features/'
                }, {
                    text: '用户手册',
                    link: '/manual/'
                }, {
                    text: 'FAQ',
                    link: '/faq/'
                }, {
                    text: '折腾',
                    link: '/hacking/'
                }],

            }
        },

        repo: 'Qv2ray/Qv2ray',
        repoLabel: 'GitHub',
        docsRepo: 'Qv2ray/qv2ray.github.io',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！'
    }
}