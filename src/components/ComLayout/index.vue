<script setup>
import { RouterView } from 'vue-router'
import router from '@/router/index'

import ComHeader from './ComHeader.vue'
import ComMenu from './ComMenu.vue'

const routerArr = router.getRoutes()
const routerArrNew = routerArr.filter((i) => i.path != '/')

</script>

<template>

  <div class="common-layout" v-if="routerArrNew.length">
    <el-container>
      <ComMenu :routerArrNew="routerArrNew" />
      <el-container>
        <el-header><ComHeader /></el-header>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped lang="less">
.common-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  header{
    padding: 0;
  }
  .el-main{
    height: calc( 100vh - 60px );
    overflow: auto;
  }
}
</style>