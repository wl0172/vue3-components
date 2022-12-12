export const themeData = JSON.parse("{\"logo\":\"/images/log.png\",\"repo\":\"https://git.comeyes.com/cce/internal/framework/components\",\"repoLabel\":\"GitLab\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"}],\"sidebar\":[{\"text\":\"介绍\",\"link\":\"/componentsDocs/page\",\"children\":[]},{\"text\":\"动态表单\",\"link\":\"/componentsDocs/ComForm\"},{\"text\":\"抽屉\",\"link\":\"/componentsDocs/ComDrawer\"},{\"text\":\"小tips-popupover\",\"link\":\"/componentsDocs/ComPopover\"},{\"text\":\"vue3-jsx\",\"link\":\"/componentsDocs/ComJsx\"}],\"sidebarDepth\":2,\"editLink\":false,\"editLinkText\":\"编辑此页\",\"editLinkPattern\":\"\",\"lastUpdated\":true,\"lastUpdatedText\":\"更新时间\",\"contributors\":false,\"contributorsText\":\"贡献者\",\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleColorMode\":\"切换模式\",\"toggleSidebar\":\"切换侧边栏\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
