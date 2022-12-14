<script setup>
import { ref } from 'vue'

const popoverType = ref({
  placement: 'top-start',
  title: 'Title111',
  width: 200,
  trigger: 'click',
  disabled: false,
  visible: false
})
const comPopover = ref(null)

const handleCancel = () => {
  // comPopover.value.comPopover.hide()
}


</script>

<template>
  <div>
    小tips

    <ComPopover :type="popoverType" ref="comPopover">
      <!-- 按钮 - 触发dom -->
      <template #reference>
        <el-button>Click to activate</el-button>
        <div>222222</div>
      </template>
      <!-- 内容 -->
      <template #content>
        <div :arrList="[1,2,3]" :handleCancel="handleCancel" :handleConfirm="handleCancel"></div>>
      </template>
    </ComPopover>

  </div>
</template>

<style scoped lang="less">
</style>