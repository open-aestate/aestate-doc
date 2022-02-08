module.exports = {
  plugins: ['@vuepress/last-updated', 'vuepress-plugin-helper-live2d',],
  theme: "vuepress-theme-yilia-plus",
  // theme: "antdocs",
  // theme: "reco",
  title: "Aestate Framework",
  description: "Aestate —— 多样化数据库查询",
  base: "/",
  backToTop: true,
  head: [
    ["link", { rel: "icon", href: "https://summer-publiced.oss-cn-hangzhou.aliyuncs.com/logos/logo_transparent.png" }]
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://gitee.com/aecode/aestate",
    logo: 'https://summer-publiced.oss-cn-hangzhou.aliyuncs.com/logos/logo_transparent.png',
  },
};