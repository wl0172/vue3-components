<script setup>
import { useCounterStore } from "@/stores/index";
// 测试-pinia
const useStore = useCounterStore()
useStore.increment()
const handleChangeCount = () => {
  useStore.count.val = 1
}
</script>

<template>
  <div>
    <div>状态 - pinia测试</div>
    <div>
      <div>{{ useStore.count }}</div>
      <button @click="handleChangeCount">测试-改变stores</button>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>