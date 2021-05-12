module.exports = {
  plugins: ['@vuepress/last-updated'],
  // theme: "antdocs",
  theme: "reco",
  title: "CACodeFramework",
  description: "CACodeFramework系列，适用于 Python 语言所有web架构 的 ORM( Object-Relational-Mapping ) 框架",
  base: "/",
  backToTop: true,
  head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/cctvadmin/CACodeFramework-python-ORM",
    logo: '/assets/logo.png',
  },
};