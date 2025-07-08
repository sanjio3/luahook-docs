export default {
  title: 'My Project',
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
    // 添加语言切换组件
    selectLanguage: {
      label: 'Languages',
      options: [
        { text: '简体中文', link: '/' },
        { text: 'English', link: '/en/' }
      ]
    }
  }
}
