module.exports = {
  theme: 'reco',
  base: '/yxlBlog/',
  host: '192.168.0.199',
  title: '凛冬将至',
  description: 'We will never meet such a person again.',
  head: [
    ['link', { rel: 'icon', href: '/snow.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }], //移动端点击输入框不放大适配
  ],
  themeConfig: {
    type: 'blog', // 博客风格
    mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
    author: 'miemie',
    logo: '/sheep.png',
    authorAvatar: '/avatar.jpg',
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    blogConfig: {
      category: {
        location: 3,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 4,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
    },
    valineConfig: { // 评论
      appId: '4PO13dlShLF0yCTrjsI021Bq-gzGzoHsz',// your appId
      appKey: '0FY7tsSWE56mRQlRjtmEthUk', // your appKey
    }
  },
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  serviceWorker: true, // 是否开启 PWA
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ["@vuepress-reco/vuepress-plugin-kan-ban-niang",{
        theme: ["shizuku"],
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ]
  ]
}