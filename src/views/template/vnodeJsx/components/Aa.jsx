import { ref, watch, defineComponent } from 'vue'


export default defineComponent({

  props: ['test'],

  setup(props, context) {
    const Aa = () => {
      return (
        <div>我是aa{ props.test }</div>
      )
    }
    const render = () => {
      return (
        <div>
          <Aa />
        </div>
      )
    }

    return render
  },
})