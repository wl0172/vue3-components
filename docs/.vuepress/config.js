/*
 * @Author: ljw Jiawei.Liu@ccegroup.cn
 * @Date: 2022-11-24 14:37:52
 * @LastEditors: ljw Jiawei.Liu@ccegroup.cn
 * @LastEditTime: 2022-12-06 14:42:07
 * @FilePath: /vue3-admin-chanel/docs/.vuepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import navbar from './config/navbar'
import sidebar from './config/sidebar'




export default defineUserConfig({
  locales: {},
  lang: 'zh-CN',
  title: 'CCE',
  description: '这是我的第一个 VuePress 站点', // 描述
  // head等价<link rel="icon" href="/images/log.png" />
  head: [['link', { rel: 'icon', href: '/images/log.png' }]],
  base: '/', // 地址
  // https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-frontmatter
  markdown: {
    code: {
      lineNumbers: true // 代码块显示行号
    }
  },
  // 主题配置
  theme: defaultTheme({
    logo: '/images/log.png',
    repo: 'https://git.comeyes.com/cce/internal/framework/components',// 项目仓库的 URL。
    repoLabel: 'GitLab',// 项目仓库的标签
    navbar: navbar,// 导航栏配置
    sidebar: sidebar,// 侧边栏配置
    sidebarDepth: 2,// 设置根据页面标题自动生成的侧边栏的最大深度
    editLink: false,// 是否启用 编辑此页 链接
    editLinkText: "编辑此页",
    editLinkPattern: "",// 编辑此页 链接的 Pattern
    lastUpdated: true,// 是否启用 最近更新时间戳
    lastUpdatedText: "更新时间",
    contributors: false,// 是否启用 贡献者列表
    contributorsText: "贡献者",
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换模式',// 切换颜色模式按钮的标题文字
    toggleSidebar: '切换侧边栏',// 切换侧边栏按钮的标题文字
    // 404 页面的提示信息
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    
  ],
})