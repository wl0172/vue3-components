import { defineComponent } from 'vue'


export default defineComponent({

  props: ['arrList', 'handleCancel', 'handleConfirm'],

  setup(props, context) {

    // const Aa = () => {
    //   return (
    //     <div onClick={props.test}>我是当前文件独立组件</div>
    //   )
    // }

    const render = () => {
      return (
        <div>
          <div style={{ margin: '0 0 10px 0' }}>
            {props?.arrList ? props?.arrList.map((item, index) => {
              return <div key={index} onClick={props.test}>我是aa{item}</div>
            }) : null}
          </div>
          <div>
            {props.handleCancel && <el-button onClick={props.handleCancel} size="small" >cancel</el-button>}
            {props.handleConfirm && <el-button onClick={props.handleConfirm} size="small" type="primary" >cancel</el-button>}
          </div>
        </div>
      )
    }

    return render
  },

})
