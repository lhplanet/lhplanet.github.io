import { defineUserConfig } from "vuepress";
// import { searchPlugin } from "@vuepress/plugin-search";
// import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
// import { getDirname, path } from '@vuepress/utils'
import theme from "./theme.js";

// const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "零号星球图书馆",
  description: "lhplanet library",

  theme,

  // 插件设置
  // plugins: [
    // 注册全局组件的插件
    // registerComponentsPlugin({
    //   componentsDir: path.resolve(__dirname, './components'),
    // }),
    // 搜索插件
    // searchPlugin({
    //   //多语言支持
    //   locales: {
    //     '/': {
    //       placeholder: '搜索本站',
    //     },
    //   },
    //   // 热键支持
    //   hotKeys: ["command", "k"],
    //   // 最大推荐个数
    //   maxSuggestions: 7,
    //   // 排除首页
    //   isSearchable: (page) => page.path !== '/',
    // }),
  // ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
