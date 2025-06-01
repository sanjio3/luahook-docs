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
          {text: '快速开始', link: '/quickstart' },
        ],
      },
      {
        text: '入门',
        items: [
          { text: '简介', link: '/introduction' },
          { text: '安装与激活', link: '/activate' },
          { text: '第一个脚本', link: '/firstscript' },
          //{ text: '打包', link: '/package' },
        ],

      },
      {
        text: 'API参考',
        items: [
          //{ text: 'HookLb', link: '/api' },
        ],
      },

      {
        text: '关于',
        items: [
          //{ text: '联系我们', link: '/other-api' },
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
