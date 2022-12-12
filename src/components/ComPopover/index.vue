​<script>
export default {
  name: "ComPopover",
};
</script>
<script setup>
import { ref } from 'vue';


defineProps({
  placement: {
    type: String,
    default: 'top-start',
    required: false
  },
  title: {
    type: String,
    default: 'title',
    required: false
  },
  width: {
    type: String || Number,
    default: '200',
    required: false
  },
  trigger: {
    type: String,
    default: 'click',
    required: false
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false
  },
  effect: {
    type: String,
    default: 'light',
    required: false
  },
  visible: {
    type: Boolean,
    default: false,
    required: false
  },
  offset: {
    type: Number,
    default: 10,
    required: false
  },
  type: {
    type: Object,
    default: {},
    required: false
  }
})

const comPopover = ref(null)

defineExpose({
  comPopover
})


</script>

<template>
  <div>

    <el-popover
      :placement="Object.keys(type).includes('placement') ? type.placement : placement"
      :title="Object.keys(type).includes('title') ? type.title : title"
      :width="Object.keys(type).includes('width') ? type.width : width"
      :trigger="Object.keys(type).includes('trigger') ? type.trigger : trigger"
      :disabled="Object.keys(type).includes('disabled') ? type.disabled : disabled"
      :effect="Object.keys(type).includes('effect') ? type.effect : effect"
      :v-visible="Object.keys(type).includes('visible') ? type.visible : visible"
      :offset="Object.keys(type).includes('offset') ? type.offset : offset"
      ref="comPopover"
    >
      <template #reference>
        <!-- 触发元素 -->
        <slot name="reference"></slot>
      </template>
      <!-- 展示元素 -->
      <slot name="content"></slot>
    </el-popover>

  </div>
</template>

<style scoped></style>