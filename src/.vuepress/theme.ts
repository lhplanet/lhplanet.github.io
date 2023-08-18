import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
// import sidebar from "./sidebar.js";

export default hopeTheme({

  // 当前网站部署到的域名
  hostname: "https://lhplanet.github.io",

  // 文章显示的默认作者及其主页
  author: {
    name: "LHP",
    url: "http://152.136.173.53:8090/", // TODO: Change this to your homepage
  },

  favicon: "/favicon.ico",

  // 使用官方提供的图标库-也可以构建自己的图标库
  // iconAssets: "fontawesome-with-brands",
  iconAssets: "iconfont", // 阿里巴巴矢量图标库

  // 网站 Logo
  logo: "/logo.svg",

  // 导航栏上的个人仓库地址
  repo: "https://github.com/lhplanet",
  // 自定义仓库链接文字-默认从repo中自动推断为"GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  // repoLabel: "Gitee",
  // 是否在导航栏内显示仓库链接-默认为true
  // repoDisplay: true,

  // 导航栏布局
  // navbarLayout: {
  //   left: ["Brand"],
  //   center: ["Links"],
  //   right: ["Language", "Repo", "Outlook", "Search"],
  // },

  // 自动根据文章一级标题生成侧边栏
  // sidebar: "heading",
  sidebar: "structure",

  // 页面显示信息
  pageInfo: ["Author", "Date", "Word", "PageView"],

  // 路径导航
  // breadcrumb: true,
  // 路径导航的图标显示
  // breadcrumbIcon: true,

  // 用户可以自定义的多主题色
  // themeColor: {
  //   yellow: "#FEC201",
  //   pink: "#EF699F",
  //   purple: "#684CCE",
  //   orange: "#FF8C3D",
  // },

  // 暗黑模式切换-在深色模式和浅色模式中切换
  darkmode: "toggle",

  // 全屏按钮
  fullscreen: true,

  // 返回顶部按钮-下滑300px后显示
  // backToTop: true,

  // 纯净模式-禁用
  // pure: false,

  // 文章的最后更新时间
  lastUpdated: true,

  // 显示页面的贡献者
  contributors: true,

  // 文章所在仓库
  docsRepo: "https://github.com/lhplanet/lhplanet.github.io",
  // 文章所在分支
  docsBranch: "main",
  // 文章所在目录
  docsDir: "src",

  // navbar
  navbar,
  // sidebar
  // sidebar,

  // 页脚
  footer: "零号星球图书馆",
  // 显示页脚
  displayFooter: true,

  // 加密文章
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 文章源
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 博客
  // blog: {
  //   // 头像
  //   avatar: "/blog_head_logo.gif",
  //   // 名称
  //   name: "Mr.Tong",
  //   // 是否是圆形头像
  //   roundAvatar: false,
  //   // 个人描述
  //   description: "你是无意穿堂风 偏偏孤倨引山洪",
  //   // 社交媒体
  //   medias: {
  //     Gitee: "https://gitee.com/oucystong",
  //   },
  //   // 博客的侧边栏设置
  //   sidebarDisplay: "mobile",
  //   // 每页展示的文章数量
  //   articlePerPage: 7,
  //   timeline: "小佟の时光轴🍃",
  // },

  // 插件
  plugins: {
    // TODO: Change this
    // 在MD文件中启用的组件
    // components: [
      // 为站点提供了在MD文档中自定义颜色的徽章
      // "Badge",
      // 为站点提供了在MD文档中加载B站视频的功能，但是不建议使用
      // "BiliBili",
      // 为站点提供了在MD文档中加载PDF阅读器的功能，但是不建议使用
      // 原因一：PDF书籍较大，上传到码云后会大量占用码云空间
      // 原因二：当PDF阅读器较多的时候，将MD文档渲染成HTML页面比较耗费性能，使页面加载速度变慢
      // "PDF",
    // ],

    // 他人复制时，自带一段版权声明
    // copyright: true,

    // 代码复制功能-vuepress-plugin-copy-code2
    copyCode: {
      // 在移动端也可以实现复制代码
      showInMobile: true,
      // 代码复制成功提示消息的时间-ms
      duration: 300,
      // 纯净模式
      // pure: false,
    },

    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    // TODO: Change this
    // MarkDown文件增强
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      // container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // 打开博客功能
    // blog: {
    // 在文章列表页面自动提取文章的摘要进行显示
    //   autoExcerpt: true,
    // },
    // 开启git实现编辑此页面-最后更新时间-贡献者功能
    git: true,
    // 关闭sitemap插件
    // sitemap: false,

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
