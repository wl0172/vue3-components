​<script>
export default {
  name: "ComDrawer",
};
</script>
<script setup>
import { ref, toRefs, watch, useSlots } from 'vue'

const slots = useSlots()

const props = defineProps({
  drawerShow: {
    type: Boolean,
    default: false,
    required: true,
  },
  direction: {
    type: String,
    default: 'ltr', // ltr(→) rtl(←) ttb(↓) btt(↑)
    required: true,
  },
  title: {
    type: String,
    default: '',
    required: false,
  },
  size: {
    type: String,
    default: '30%',
    required: false,
  },
  template: {
    type: Array,
    default: [],
    required: false,
  },
  lockScroll: {
    type: Boolean,
    default: true,
    required: false,
  },
  bottomTxt: {
    type: Array,
    default: ['取消', '确认'],
    required: false,
  },
  // 测试vnode
  vnode: {
    // type: Array,
    default: [],
    required: false,
  }
})

let { drawerShow } = toRefs(props)
watch(drawerShow, (n) => {
  drawerShow = n
})

</script>

<template>
  <div>
    <el-drawer 
      v-model="drawerShow" 
      :size=props.size 
      :title="slots.header ? null : title" 
      :direction="direction"
      :before-close="() => $emit('cancelClick')" 
      :show-close="slots.header ? false : true"
      :lock-scroll="props.lockScroll">
      <template #header>
        <slot name="header"></slot>
      </template>
      <slot name="content"></slot>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="$emit('cancelClick')">{{ props.bottomTxt[0] }}</el-button>
          <el-button type="primary" @click="$emit('confirmClick')">{{ props.bottomTxt[1] }}</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>
