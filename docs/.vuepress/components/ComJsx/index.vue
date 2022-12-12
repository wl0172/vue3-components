<script setup>
import { ref } from 'vue'


const tabs = {
  1: 1,
  2: 2
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

    

    <div v-if="1">
      <ComAaJsx />
    </div>
    <div v-else>
      <ComBbJsx />
    </div>



    <div>
      <el-button @click="currentTab = 'Aa'">tab-Aa</el-button>
      <el-button @click="currentTab = 'Bb'">tab-Bb</el-button>
    </div>

    <!-- <component :test="test" :is="tabs[currentTab]"></component> -->

    <component :test="test" :is="tabs[currentTab]"></component>

  </div>
</template>

<style scoped lang="less"></style>