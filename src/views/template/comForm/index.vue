<script setup>
import { ref, reactive } from 'vue'
// import ComForm from "@/components/ComForm/index.vue";
import { json, rules } from './index'


import { ComForm } from '@wl0172/test-com'

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