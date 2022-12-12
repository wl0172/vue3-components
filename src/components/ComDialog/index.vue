<script>
export default {
  name: 'ComDialog'
}
</script>
<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)

</script>

<template>
  <div>
    <!-- 弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="()=>dialogVisible = false"
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 按钮 -->
    <el-button text @click="dialogVisible = true">
      click to open the Dialog
    </el-button>
  </div>
</template>

<style scoped lang="less">
</style>