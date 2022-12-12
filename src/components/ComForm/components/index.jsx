import { defineComponent } from 'vue'

export default defineComponent({

  props: ['jsonItem', 'form'],
  
  setup(props, context) {
    // 提交的form对象
    const formObj = props.form
    // 输入框 - input
    const InputCom = ({ item }) => {
      return <el-input v-model={formObj[item.value]} placeholder={item.placeholder} />
    }
    // 下拉框 - select
    const SelectCom = ({ item }) => {
      return <el-select style="width: 100%" v-model={formObj[item.value]} placeholder={item.placeholder}>
        {item.option.length && item.option.map((_item,index) => {
          return <el-option label={_item.label} value={_item.value} />
        })}
      </el-select>
    }
    // 时间
    const DateTimeCom = ({ item }) => {
      return <el-date-picker
        v-model={formObj[item.value]}
        type={item.type}
        placeholder={item.placeholder}
        style="width: 100%"
        range-separator="To"
        start-placeholder={item.startPlaceholder}
        end-placeholder={item.endPlaceholder}
      />
    }
    // 滑块 - 开关
    const SwitchCom = ({ item }) => {
      return <el-switch v-model={formObj[item.value]} />
    }
    // 复选框
    const CheckboxGroupCom = ({ item }) => {
      return <el-checkbox-group v-model={formObj[item.value]}>
        {item.option.length && item.option.map((_item,index) => {
          return <el-checkbox label={_item.label} name="type" />
        })}
      </el-checkbox-group>
    }
    // 单选框
    const RadioGroupCom = ({ item }) => {
      return <el-radio-group v-model={formObj[item.value]}>
        {item.option.length && item.option.map((_item,index) => {
          return <el-radio label={_item.label} />
        })}
      </el-radio-group>
    }
    // textarea
    const TextareaCom = ({ item }) => {
      return <el-input type={item.type} v-model={formObj[item.value]} placeholder={item.placeholder} />
    }






    const render = () => {
      const jItem = props.jsonItem
      return (
        <>
          {jItem.name == 'input' && <InputCom item={jItem} /> }
          {jItem.name == 'select' && <SelectCom item={jItem} />}
          {jItem.name == 'date' && <DateTimeCom item={jItem} /> }
          {jItem.name == 'switch' && <SwitchCom item={jItem} />}
          {jItem.name == 'checkbox-group' && <CheckboxGroupCom item={jItem} />}
          {jItem.name == 'radio-group' && <RadioGroupCom item={jItem} />}
          {jItem.name == 'textarea' && <TextareaCom item={jItem} />}



          

        </>

      )
    }

    return render
  },
})
