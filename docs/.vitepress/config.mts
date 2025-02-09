import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "CV of Manabu Ueda",
    description: "Manabu Uedaの職務経歴書",
    base: '/resume/',
    head: [
        // favicons
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: 'favicon/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: 'favicon/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        // ogp
        ['meta', { property: 'og:image', content: 'https://manabuueda.github.io/resume/images/og.png' }],
        ['meta', { property: 'og:title', content: 'CV of Manabu Ueda' }],
        ['meta', { property: 'og:description', content: '植田 学の職務経歴書' }],
        ['meta', { property: 'og:url	', content: 'https://manabuueda.github.io/resume' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: [],
        outline: {
            level: [2, 3]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/manabuueda/resume' }
        ],
        editLink: {
            pattern: 'https://github.com/manabuueda/resume/edit/master/docs/:path'
        }
    },
    lastUpdated: true,
})
