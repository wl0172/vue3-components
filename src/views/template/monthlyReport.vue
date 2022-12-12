<script setup>
import { ref } from "vue";
import ComTablePage from '@/components/ComTablePage/index.vue'
import { getList } from '@/api/index'
import moment from "moment";
import { ElMessage } from 'element-plus'
import { useApiState } from '@/api/requestState'


const date = ref('')
const option = ref(['weekly', 'weekly'])
// 搜索条件
const searchVal = ref({
  val: {
    query: "query($search: JSON, $page: Int, $size: Int) {\n            getReportListByAppId(search: $search, page: $page, size: $size) {\n              count rows {\n                id appId appName executeType statisticsType statisticsItem statisticsNum createdAt\n              }\n            }\n          }",
    variables: {
      search: {
        executeType: "",
        start: "",
        end: ""
      },
      page: 1,
      size: 10
    }
  }
})
// 表格 - data
const tableData = ref([]);
// 表格 - 头header
const columnArr = ref([
  { name: "date", label: '时间', width: '', align: 'center', fixed: false },
  { name: "name", label: '姓名', width: '', align: 'center' },
  { name: "address", label: '地址', width: '', align: 'center' },
  { name: '操作', label: '操作', width: '', align: 'center', fixed: false }
]);
const tabState = ref({
  loading: true,
  stripe: false,
  border: false,
  height: 'auto',
})
const handleCurrentChange = (val) => {
  searchVal.value.val.variables.page = val
  handleGetList()
};
const handleSizeChange = (val) => {
  searchVal.value.val.variables.size = val
  handleGetList()
};

const handelDownload = () => {
  ElMessage.error('暂无接口')
}
const handleGetList = async () => {
  if (date?.value) {
    searchVal.value.val.variables.search.start = moment(date.value['0']).format('YYYY-MM-DD, 00:00:00')
    searchVal.value.val.variables.search.end = moment(date.value['1']).format('YYYY-MM-DD, 23:59:59')
  }
  // const data = await getList(searchVal.value.val)
  // console.log(data, '===')
  // tableData.value = data.data?.getReportListByAppId?.rows || []
  // ElMessage.success({
  //   duration: 1000,
  //   type: 'success',
  //   message: '查询成功!',
  // })

  // or

  const { datas, errors } = await useApiState(getList, searchVal.value.val)
  errors?.value ? ElMessage.error({
    duration: 1000,
    type: 'error',
    message: '查询失败!',
  }) : ElMessage.success({
    duration: 1000,
    type: 'success',
    message: '查询成功!',
  })
  // tableData.value = datas.value?.data?.getReportListByAppId ? datas.value?.data?.getReportListByAppId?.rows : []

  setTimeout(() => {
    tabState.value.loading = false
    tableData.value = [
      {
        date: '12312313131231',
        name: '2',
        address: '3',
      }, {
        date: '1',
        name: '2',
        address: '3',
      }, {
        date: '1',
        name: '2',
        address: '3',
      }, {
        date: '1',
        name: '2',
        address: '3',
      }, {
        date: '1',
        name: '2',
        address: '3',
      }]
  });

}
handleGetList()

</script>

<template>
  <div>
    <!-- 搜索 -->
    <el-form :inline="true" :model="searchVal" class="demo-form-inline">
      <el-form-item label="搜索日期">
        <el-col>
          <el-date-picker v-model="date" type="date" range-separator="To" start-placeholder="Start date"
            end-placeholder="End date" size="default" format="YYYY-MM-DD" width="20" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleGetList">查询</el-button>
        <el-button type="primary" @click="handelDownload">导出</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <ComTablePage :total="tableData.length" :tableData="tableData" :columnArr="columnArr"
      :currentPage="searchVal.val.variables.page" :pageSizeNums="searchVal.val.variables.size" :tabState="tabState"
      @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange">
      <!-- <template #plaid>
        <div>111</div>
      </template> -->
    </ComTablePage>
  </div>
</template>