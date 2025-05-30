import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'LuaHook',
  description: 'LuaHook Website',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  
  themeConfig: {
   
    logo: '/logo.png',
    nav: [
      { text: 'Download', link: 'https://github.com/KuLiPai/LuaHook/releases/latest' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Start', link: '/example' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kulipai/luahook' },
      { icon: 'telegram', link: 'https://t.me/luaXposed' },
    ],

    footer: {
      message: 'Made with ❤️',
      copyright: 'Copyright © 2025-present <a href="https://github.com/KuLiPai">KuLiPai</a>'
    }
  },
});
