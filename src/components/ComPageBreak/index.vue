<script setup>
import { ref } from 'vue'
const props = defineProps({
  // 一共多少条数据
  total: {
    type: Number,
    default: 0,
    required: true // 必传
  },
  // 当前第几页
  currentPage: {
    type: [String, Number],
    default: 1,
    required: true // 必传
  },
  // 每页显示条数
  pageSizeNums: {
    type: [String, Number],
    default: 10,
    required: true // 必传
  },
  // 每页可以显示条数
  pageSizeNum: {
    type: Array,
    default: [10,20,30] // 默认每页多少条数据
  },
  // 是否使用小型分页样式
  small: {
    type: Boolean,
    default: false,
    // required: true // 必传
  },
  // 是否为分页按钮添加背景色
  background: {
    type: Boolean,
    default: false,
    // required: true // 必传
  },
  // 
  disabled: {
    type: Boolean,
    default: false,
    // required: true // 必传
  },
})
</script>

<template>
  <div class="ComPageBreak">
    <div class="demo-pagination-block">
      <el-pagination
        :total="total"
        :currentPage="currentPage"
        :page-size="pageSizeNums"
        :page-sizes="pageSizeNum"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="$emit('handleSizeChange', $event)"
        @current-change="$emit('handleCurrentChange', $event)"
      />
    </div> 
  </div>
</template>

<style scoped lang="less">
.ComPageBreak{
  display: flex;
  justify-content: end;
  margin: 20px 0 0 0;
}
</style>
