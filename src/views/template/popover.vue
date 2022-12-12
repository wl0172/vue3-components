<script setup>
import { ref } from 'vue'
import ComPopover from '@/components/ComPopover/index.vue'

import Test from '@/components/ComJsx/Aa'

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
  comPopover.value.comPopover.hide()
}


</script>

<template>
  <div>

    <ComPopover :type="popoverType" ref="comPopover">
      <!-- 按钮 - 触发dom -->
      <template #reference>
        <el-button>Click to activate</el-button>
      </template>
      <!-- 内容 -->
      <template #content>
        <Test :arrList="[1,2,3]" :handleCancel="handleCancel" :handleConfirm="handleCancel" />
      </template>
    </ComPopover>

  </div>
</template>

<style scoped></style>