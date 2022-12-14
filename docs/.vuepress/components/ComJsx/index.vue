<script setup>
import { ref } from 'vue'

const currentTab = ref('Aa')

</script>

<template>
  <div>

    <div>
      <el-button @click="currentTab = 'Aa'">tab-Aa</el-button>
      <el-button @click="currentTab = 'Bb'">tab-Bb</el-button>
    </div>

    <div v-if="currentTab == 'Aa'">
      <ComAaJsx />
    </div>
    <div v-if="currentTab == 'Bb'">
      <ComBbJsx />
    </div>


    

  </div>
</template>

<style scoped lang="less"></style>