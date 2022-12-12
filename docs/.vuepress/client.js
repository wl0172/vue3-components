/*
 * @Author: ljw Jiawei.Liu@ccegroup.cn
 * @Date: 2022-12-06 14:11:54
 * @LastEditors: ljw Jiawei.Liu@ccegroup.cn
 * @LastEditTime: 2022-12-06 14:13:02
 * @FilePath: /vue3-admin-chanel/docs/.vuepress/client.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 导入远程库 - 本地库解决不了未知问题
import Com from '@wl0172/test-com'


export default defineClientConfig ({
  enhance({ app }){
    // app 是由 createApp 创建的 Vue 应用实例
    app.use(ElementPlus, {
      locale: zhCn,
    })
    app.use(Com)
  },
})

