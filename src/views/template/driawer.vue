<script setup>
import { ref, toRefs } from 'vue'
// 鼠标test
import ComMouse from '@/components/ComMouse/index.vue'
// 抽屉
import ComDrawer from '@/components/ComDrawer/index.vue'

import ComForm from '@/views/template/comForm/index.vue';

const shubiaoRef = ref(null)
const comFormRef = ref(null)

const drawerPopup = ref({
  drawerShow: false,
  direction: 'rtl',
  title: '我是抽屉',
  size: '50%',
  bottomTxt: ['取消1', '确定2'],
})

const handleCancel = () => {
  drawerPopup.value.drawerShow = false
}
const handleConfirm = () => {
  // 确定按钮可通过ref获取到组件实列
  // console.log(shubiaoRef.value.Shaft.x, shubiaoRef.value.Shaft.y, '挂在内部组件的值 + 确定按钮===')

  drawerPopup.value.drawerShow = false
}

</script>

<template>
  <!-- 抽屉 -->
  <div>
    <div>抽屉</div>
    <el-button @click="drawerPopup.drawerShow = true">open抽屉</el-button>
    <ComDrawer 
      :drawerShow="drawerPopup.drawerShow" 
      :direction="drawerPopup.direction" 
      :title="drawerPopup.title"
      :size="drawerPopup.size" 
      :bottomTxt="drawerPopup.bottomTxt" 
      @cancelClick="handleCancel"
      @confirmClick="handleConfirm">
      <template #header>
        <div>我是自定义header</div>
      </template>
      <template #content>
        <ComMouse ref="shubiaoRef" />

        <ComForm ref="comFormRef" />

      </template>
    </ComDrawer>
  </div>
</template>

<style scoped lang="less"></style>