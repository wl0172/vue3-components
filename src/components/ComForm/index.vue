​<script>
export default {
  name: "ComForm",
};
</script>
<script setup>
import { ref, reactive, toRefs } from "vue"
import ComFormJsx from './components/index'

const props = defineProps({
  formStyle: {
    type: Object,
    default: {
      width: '',
      inline: false, // 通过设置 inline 属性为 true 可以让表单域变为行内的表单域。
    },
    required: true, // 必传
  },
  // 表单json
  json: {
    type: Object,
    default: {},
    required: true, // 必传
  },
  // 文本校验对象
  rules: {
    type: Object,
    default: {},
    required: false, // 必传
  },
  // form宽度
  labelWidth: {
    type: String,
    default: '120px',
    required: false, // 必传
  },
  statusIcon: {
    type: String,
    default: 'status-icon',
    required: false, // 必传
  },
  size: {
    type: String,
    default: 'default',
    required: false, // 必传
  },
  labelPosition: {
    type: String,
    default: 'right',
    required: false, // 必传
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false, // 必传
  },
  // button样式
  buttonStyle: {
    type: String,
    default: 'left',
    required: false, // 必传
  }
})
const ruleFormRef = ref()
const form = reactive({})
const { json } = toRefs(props)
const { rules } = toRefs(props)

</script>

<template>
  <div class="formCom" :style="formStyle">

    <el-form 
      :inline="formStyle.inline"
      :model="form" 
      :rules="rules" 
      ref="ruleFormRef" 
      :label-width="labelWidth"
      :status-icon="statusIcon"
      :size="size"
      :label-position="labelPosition"
      :disabled="disabled">
      <!-- 表单列 -->
      <el-form-item 
        :label="i.title" 
        :prop="i.value" 
        :form="form" 
        v-for="i in json" :key="i">
        <ComFormJsx :jsonItem="i" :form="form"/>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item >
        <div class="buttonStyle" :style="{justifyContent: buttonStyle}">
          <el-button @click="$emit('handleCancel', {form,ruleFormRef})">取消</el-button>
        <el-button type="primary" @click="$emit('handleOnSubmit', {form,ruleFormRef})">确定</el-button>
        </div>
      </el-form-item>
    </el-form>

  </div>
</template>

<style scoped lang="less">
.formCom{
  // 按钮样式
  .buttonStyle{
    width: 100%;
    display: flex;
  }
}
</style>
 
​