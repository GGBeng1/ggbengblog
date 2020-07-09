module.exports = {
  title: 'GGbeng',
  description: '开发分享博客，涵盖全面的前端知识',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/gg.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
      {
        text: 'AboutMe',
        icon: 'reco-message',
        items: [
          {
            text: 'NPM',
            link: 'https://www.npmjs.com/~cao15340019117',
            icon: 'reco-npm',
          },
          {
            text: 'GitHub',
            link: 'https://github.com/GGBeng1',
            icon: 'reco-github',
          },
        ],
      },
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category', // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag', // 默认 “标签”
      },
    },
    friendLink: [
      {
        title: 'NPM',
        desc: 'NPM仓库！',
        email: '1069032339@qq.com',
        link: 'https://www.npmjs.com/~cao15340019117',
      },
      {
        title: 'GitHub',
        desc: 'GGbeng GitHub',
        avatar: '/9527.jpg',
        link: 'https://github.com/GGBeng1',
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'GGbeng',
    // 作者头像
    authorAvatar: '/9527.jpg',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2018',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: 'P3K7KDbAQ8M6p2GNyP21120a-gzGzoHsz', // your appId
      appKey: 'FBrT4FWJsvJXGUs2xcpE2uxl', // your appKey
    },
  },
  markdown: {
    lineNumbers: true,
  },
}
