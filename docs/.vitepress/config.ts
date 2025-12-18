import { defineConfig } from "vitepress"
import { mdPlugin } from "./plugins/mdPlugin"
import pkg from "../../package.json"
// 生产环境判断
const content = [
  "vue 版本的 v-ui-plus",
  "vue v-ui-plus",
  "v-ui-plus vue",
  "VuiPlus",
  "v-ui-plus",
  "element-plus",
  "Page level components",
  "component library",
  "ui framework",
  "ui",
  "基础组件",
  "二次封装",
  "bdp",
  "vue"
].toString()
export default defineConfig({
  title: "VuiPlus基础组件文档",
  description: content,
  lang: "cn-ZH",
  base: "/v-ui-plus/",
  head: [
    ["meta", { name: "author", content: "bdp" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        name: "description",
        content
      }
    ],
    ["meta", { name: "keywords", content }],
    ["link", { rel: "icon", href: "./favicon.ico" }]
  ],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.jpg",
    siteTitle: "VuiPlus基础组件文档",
    outline: 3,
    search: {
      provider: "local"
    },
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    outlineTitle: "本页导航",
    lastUpdatedText: "上次更新时间",
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/bdp/v-ui-plus" }],
    nav: [
      {
        text: "安装指南",
        link: "/guide/"
      },
      { text: "基础组件", link: "/components/TInput/base.md" },
      {
        text: "GitHub地址",
        link: "https://github.com/bdp/v-ui-plus"
      },
      {
        text: "Gitee码云地址",
        link: "https://gitee.com/bdp/v-ui-plus"
      },
      {
        text: `v${pkg.version}`,
        items: [
          {
            text: "版本升级",
            link: "/guide/upgrade"
          },
          {
            text: "历史版本",
            link: "https://github.com/bdp/v-ui-plus/releases"
          }
        ]
      },
      {
        text: "演练场",
        link: "https://bdp.github.io/bdp-playground/"
      }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "简介",
          items: [
            {
              text: "简介",
              link: "/guide/index"
            }
          ]
        },
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/installation"
            },
            {
              text: "快速开始",
              link: "/guide/quickstart"
            }
          ]
        },
        {
          text: "进阶",
          items: [
            {
              text: "国际化",
              link: "/guide/i18n"
            },
            {
              text: "版本升级",
              link: "/guide/upgrade"
            },
            {
              text: "Resolver按需引入",
              link: "/guide/resolver"
            }
          ]
        }
      ],
      "/components": [
        {
          text: "常用组件",
          items: [{ text: "Button组件", link: "/components/VButton/base.md" }]
        },
        {
          text: "复杂组件",
          items: []
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true,
    config: (md: any) => mdPlugin(md)
  }
})
