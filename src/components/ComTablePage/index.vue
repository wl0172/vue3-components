<script>
// export default {
//   inheritAttrs: false
// }
</script>

<script setup>
import { toRefs, useSlots } from "vue";
import ComMouse from '@/components/ComMouse/index.vue'

const slots = useSlots()

defineProps({
  /**
   * 表格
   */
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
  },
  tabState: {
    type: Object,
    default: {},
    required: false, // 必传
  },
  /**
   * 分页
   */
  // 一共多少条数据
  total: {
    type: Number,
    default: 0,
    required: true, // 必传
  },
  // 当前第几页
  currentPage: {
    type: [String, Number],
    default: 1,
    required: true, // 必传
  },
  // 每页显示条数
  pageSizeNums: {
    type: [String, Number],
    default: 10,
    required: true, // 必传
  },
  // 每页可以显示条数
  pageSizeNum: {
    type: Array,
    default: [10, 20, 30], // 默认每页多少条数据
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
});


// 测试按钮点击 - 
const handleTest = (val) => {
  console.log(val)
}
const handleTest1 = (val) => {
  console.log(1)
}

</script>

<template>
  <div>
    <slot name="plaid"></slot>
    <!-- 表格 -->
    <el-table 
      v-if="!slots.plaid" 
      :data="tableData" 
      style="width: 100%" 
      v-loading="tabState.loading"
      :stripe="tabState.stripe" 
      :border="tabState.border" 
      :height="tabState.height">
      <el-table-column 
        v-for="i in columnArr" 
        :key="i" 
        :prop="i.name"
        :label="i.label" 
        :width="i.width" 
        :align="i.align" 
        :fixed="i.fixed">
        <template #default="scope">
          <div @click.stop="()=>handleTest(scope,row)">
            {{scope.row[i.name]}}
            <!-- {{i}} -->
            <!-- <div v-for="j in i" @click.stop="()=>handleTest1(scope,row)">
              
              <div v-if="j == 'button'">
                <ComMouse />
              </div>
              
            </div> -->
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
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
          @current-change="$emit('handleCurrentChange', $event)" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.ComPageBreak {
  display: flex;
  justify-content: end;
  margin: 20px 0 0 0;
}
</style>
