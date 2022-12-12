<script setup>
import { ref } from 'vue'

import Aa from "@/components/ComJsx/components/Aa";
import Bb from "@/components/ComJsx/components/Bb";

const tabs = {
  Aa,
  Bb
}
const currentTab = ref('Aa')
// 测试传参
const test = ref(1)
setTimeout(() => {
  test.value = 2
}, 3000);

</script>

<template>
  <div>

    <div>
      <el-button @click="currentTab = 'Aa'">tab-Aa</el-button>
      <el-button @click="currentTab = 'Bb'">tab-Bb</el-button>
    </div>

    <component :test="test" :is="tabs[currentTab]"></component>

  </div>
</template>

<style scoped lang="less"></style>