module.exports = {
  plugins: ['@vuepress/last-updated'],
  theme: "antdocs",
  // theme: "reco",
  title: "Arstate Framework",
  description: "CACodeFramework系列，适用于 Python 语言所有web架构 的 ORM 框架",
  base: "/",
  backToTop: true,
  head: [
    ["link", { rel: "icon", href: "https://summer-publiced.oss-cn-hangzhou.aliyuncs.com/logos/logo_transparent.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://gitee.com/cacode_cctvadmin/aestate",
    logo: 'https://summer-publiced.oss-cn-hangzhou.aliyuncs.com/logos/logo_transparent.png',
  },
};