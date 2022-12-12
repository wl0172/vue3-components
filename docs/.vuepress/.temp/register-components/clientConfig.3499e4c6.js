import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("ComDrawer-index", defineAsyncComponent(() => import("/Users/cce/Desktop/work/backOffice/chanel/vue3-admin-chanel/docs/.vuepress/components/ComDrawer/index.vue"))),
      app.component("ComForm-index", defineAsyncComponent(() => import("/Users/cce/Desktop/work/backOffice/chanel/vue3-admin-chanel/docs/.vuepress/components/ComForm/index.vue"))),
      app.component("ComJsx-index", defineAsyncComponent(() => import("/Users/cce/Desktop/work/backOffice/chanel/vue3-admin-chanel/docs/.vuepress/components/ComJsx/index.vue"))),
      app.component("ComPopover-index", defineAsyncComponent(() => import("/Users/cce/Desktop/work/backOffice/chanel/vue3-admin-chanel/docs/.vuepress/components/ComPopover/index.vue")))
  },
}
