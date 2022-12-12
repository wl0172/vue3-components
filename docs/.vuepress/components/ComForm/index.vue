<script setup>
import { ref, reactive } from 'vue'
// import { ComForm } from '@wl0172/test-com'

// import ComForm from "@/components/ComForm/index.vue";
// import { json, rules } from './index'
const json = reactive([
  {
    name: 'input', // 输入框控件
    type: 'input',
    value: 'input-1',
    title: '姓名',
    placeholder: '请输入'
  },
  {
    name: 'select', // 下拉框控件
    type: 'select',
    value: 'select-1',
    title: '下拉框',
    placeholder: '请输入',
    option: [
      {
        label: '1',
        value: '11'
      },      {
        label: '2',
        value: '22'
      }
    ]
  },
  {
    name: 'date', // 时间控件
    type: 'daterange',
    value: 'date-1',
    title: '日期',
    placeholder: '请选择时间',
    startPlaceholder: 'Start date', // 根据实际场景使用
    endPlaceholder: 'End date'
  },
  {
    name: 'switch', // 滑块 - 开关
    type: '',
    value: 'switch-1',
    title: '滑块开关',
  },
  {
    name: 'checkbox-group', // 复选框 - checkbox
    type: '',
    value: 'checkbox-group-1',
    title: '复选框',
    option: [
      {
        label: '1',
        value: '11'
      },{
        label: '2',
        value: '22'
      }
    ]
  },
  {
    name: 'radio-group', // 单选框 - checkbox
    type: '',
    value: 'radio-group-1',
    title: '单选框',
    option: [
      {
        label: '1',
        value: '11'
      },{
        label: '2',
        value: '22'
      }
    ]
  },
  {
    name: 'textarea', // textarea - 待优化
    type: 'textarea',
    value: 'textarea-1',
    title: '姓名textarea',
    placeholder: '请输入'
  },{
    name: 'input', // 输入框控件
    type: 'input',
    value: 'input-1',
    title: '姓名',
    placeholder: '请输入'
  },
  {
    name: 'select', // 下拉框控件
    type: 'select',
    value: 'select-1',
    title: '下拉框',
    placeholder: '请输入',
    option: [
      {
        label: '1',
        value: '11'
      },      {
        label: '2',
        value: '22'
      }
    ]
  },
  {
    name: 'date', // 时间控件
    type: 'daterange',
    value: 'date-1',
    title: '日期',
    placeholder: '请选择时间',
    startPlaceholder: 'Start date', // 根据实际场景使用
    endPlaceholder: 'End date'
  },
  {
    name: 'switch', // 滑块 - 开关
    type: '',
    value: 'switch-1',
    title: '滑块开关',
  },
  {
    name: 'checkbox-group', // 复选框 - checkbox
    type: '',
    value: 'checkbox-group-1',
    title: '复选框',
    option: [
      {
        label: '1',
        value: '11'
      },{
        label: '2',
        value: '22'
      }
    ]
  },
  {
    name: 'radio-group', // 单选框 - checkbox
    type: '',
    value: 'radio-group-1',
    title: '单选框',
    option: [
      {
        label: '1',
        value: '11'
      },{
        label: '2',
        value: '22'
      }
    ]
  },
  {
    name: 'textarea', // textarea - 待优化
    type: 'textarea',
    value: 'textarea-1',
    title: '姓名textarea',
    placeholder: '请输入'
  },{
    name: 'input', // 输入框控件
    type: 'input',
    value: 'input-1',
    title: '姓名',
    placeholder: '请输入'
  },
  {
    name: 'select', // 下拉框控件
    type: 'select',
    value: 'select-1',
    title: '下拉框',
    placeholder: '请输入',
    option: [
      {
        label: '1',
        value: '11'
      },      {
        label: '2',
        value: '22'
      }
    ]
  },
  {
    name: 'date', // 时间控件
    type: 'daterange',
    value: 'date-1',
    title: '日期',
    placeholder: '请选择时间',
    startPlaceholder: 'Start date', // 根据实际场景使用
    endPlaceholder: 'End date'
  },
  {
    name: 'switch', // 滑块 - 开关
    type: '',
    value: 'switch-1',
    title: '滑块开关',
  },
  {
    name: 'checkbox-group', // 复选框 - checkbox
    type: '',
    value: 'checkbox-group-1',
    title: '复选框',
    option: [
      {
        label: '1',
        value: '11'
      },{
        label: '2',
        value: '22'
      }
    ]
  },
  {
    name: 'radio-group', // 单选框 - checkbox
    type: '',
    value: 'radio-group-1',
    title: '单选框',
    option: [
      {
        label: '1',
        value: '11'
      },{
        label: '2',
        value: '22'
      }
    ]
  },
  {
    name: 'textarea', // textarea - 待优化
    type: 'textarea',
    value: 'textarea-1',
    title: '姓名textarea',
    placeholder: '请输入'
  }
])
const rules = reactive({
  'input-1': [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '最少3，最多5', trigger: 'blur' },
  ],
})


// 取消
const handleCancel = ({ form, ruleFormRef }) => {
  if (!ruleFormRef) return
  ruleFormRef.resetFields()
}
// 确定
const handleOnSubmit = async ({ form, ruleFormRef }) => {
  if (!ruleFormRef) return
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      console.log(form, 'submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

// formStyle
//   - inline: 是否行还是表单域 设为true 
//   - width: 根据inline变化宽度
// labelWidth        - 表单label距离左侧

// 是否行还是表单域 设为true 行 false 表单
const inline = false

const formStyle = {
  width: inline ? '100%' : '500px',
  inline: inline,
  // margin: '0 auto'
}

// 抛出外部接收的参数
defineExpose({
  handleOnSubmit
})

</script>

<template>
  <div>
    <ComForm
      :json="json"
      :rules="rules"
      :labelWidth="inline ? '80' : '100'"
      :formStyle="formStyle"
      @handleCancel="handleCancel"
      @handleOnSubmit="handleOnSubmit"
    />
  </div>
</template>

<style scoped lang="less"></style>