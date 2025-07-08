export default {
  title: 'LuaHook',
  description: 'Project Description',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '中文文档',
      description: '中文描述'
    },
    '/en/': {
      lang: 'en-US',
      title: 'English Docs',
      description: 'English Description'
    }
  },
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '文档', link: '/guide/' },
    // 在导航栏右侧插入语言切换组件
    { text: 'Languages', items: [
      { text: '简体中文', link: '/zh/' },
      { text: 'English', link: '/en/' }
    ]}
  ]
}
}
