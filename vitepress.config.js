module.exports = {
  title: 'LuaHook 文档',
  description: 'LuaHook 官方文档',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'LuaHook 文档',
      description: 'LuaHook 官方文档'
    },
    '/en/': {
      lang: 'en-US',
      title: 'LuaHook Documentation',
      description: 'Official documentation for LuaHook'
    }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/' },
      { text: '参考', link: '/reference/' }
    ],
    sidebar: {
      '/': [
        { text: '入门', link: '/' },
        { text: '安装', link: '/install/' },
        { text: '用法', link: '/usage/' }
      ],
      '/en/': [
        { text: 'Getting Started', link: '/en/' },
        { text: 'Installation', link: '/en/install/' },
        { text: 'Usage', link: '/en/usage/' }
      ]
    },
    // 添加语言切换下拉菜单
    selectLanguage: {
      placeholder: '选择语言',
      options: {
        zh: '简体中文',
        en: 'English'
      }
    }
  }
}
