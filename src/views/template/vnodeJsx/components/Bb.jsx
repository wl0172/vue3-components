import { ref, watch, defineComponent } from 'vue'


export default defineComponent({

  props: ['test'],

  setup(props, context) {
    const Bb = () => {
      return (
        <div>我是bb{ props.test }</div>
      )
    }
    const render = () => {
      return (
        <div>
          <Bb />
        </div>
      )
    }
    
    return render
  },
})