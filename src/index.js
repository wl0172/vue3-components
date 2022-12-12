/*
 * @Author: ljw Jiawei.Liu@ccegroup.cn
 * @Date: 2022-11-22 14:23:23
 * @LastEditors: ljw Jiawei.Liu@ccegroup.cn
 * @LastEditTime: 2022-12-06 14:29:08
 * @FilePath: /vue3-admin-chanel/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 动态表单
import ComForm from "@/components/ComForm/index.vue"
// 抽屉
import ComDrawer from '@/components/ComDrawer/index.vue'
// tip
import ComPopover from '@/components/ComPopover/index.vue'
// vue3-jsx
import ComAaJsx from '@/components/ComJsx/components/Aa'
import ComBbJsx from '@/components/ComJsx/components/Bb'

const components = [
	ComForm,
	ComDrawer,
	ComPopover,
	ComAaJsx,
	ComBbJsx
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = (Vue) => {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

export default install