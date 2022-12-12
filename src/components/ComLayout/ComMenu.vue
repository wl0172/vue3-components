<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { Menu as IconMenu } from '@element-plus/icons-vue'
defineProps(['routerArrNew'])

const router = useRouter()

const activeName = router.currentRoute.value.name

</script>

<template>

    <el-aside width="200px">
      <el-scrollbar>

        <el-menu 
          :default-active="activeName"
          :default-openeds="[activeName]">
          <el-sub-menu :index="activeName">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>Com 组件 - 1</span>
            </template>
            <el-menu-item-group>
              <template #title>测试组件</template>
              <el-menu-item 
                v-for="(item, index) in routerArrNew" 
                :key="item || index" 
                :index="item.name">
                <div class="router_li" @click="router.push({ path: item.path })">{{ item.meta.title }}</div>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>定制功能</span>
            </template>
            <el-menu-item-group>
              <template #title>测试组件</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>标准功能</span>
            </template>
          </el-sub-menu>

          <!-- 测试 - 侧边栏 -->
          <el-sub-menu index="9">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>测试 - 侧边栏</span>
            </template>
          </el-sub-menu>
          <el-sub-menu index="9">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>测试 - 侧边栏</span>
            </template>
          </el-sub-menu>
          <el-sub-menu index="9">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>测试 - 侧边栏</span>
            </template>
          </el-sub-menu>
          <el-sub-menu index="9">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>测试 - 侧边栏</span>
            </template>
          </el-sub-menu>
          <el-sub-menu index="9">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>测试 - 侧边栏</span>
            </template>
          </el-sub-menu>
          <el-sub-menu index="9">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>测试 - 侧边栏</span>
            </template>
          </el-sub-menu>
          <el-sub-menu index="9">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>测试 - 侧边栏</span>
            </template>
          </el-sub-menu>

        </el-menu>

      </el-scrollbar>
    </el-aside>

</template>

<style scoped lang="less">
  .el-container {
    width: 100%;
    height: 100%;
    .el-aside {
      // background: red;
      position: relative;
    .ComContent_leftButton{
      position: absolute;
      right: 0;
      z-index: 999;
    }
      .el-menu {
        height: 100vh;
        a {
          width: 100%;
          text-decoration: none;
          color: #909399;
          cursor: pointer;
        }
        .router_li{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>