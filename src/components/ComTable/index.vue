<script setup>
import { } from "vue";
const props = defineProps({
  // 数据data
  tableData: {
    type: Array,
    default: [],
    required: true, // 必传
  },
  // 表头header
  columnArr: {
    type: Array,
    default: [],
    required: true, // 必传
  }
})
</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column 
        v-for="i in columnArr" 
        :key="i" 
        :prop="i.name" 
        :label="i.name" 
        :width="i.width"
      />
    </el-table>
  </div>
</template>

<style scoped lang="less"></style>
