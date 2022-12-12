import { onMounted, ref, render, watch, watchEffect } from 'vue'
import { useCounterStore } from '@/stores/index'

const counterHandling = () => {

  // const useStore = useCounterStore()
  // useStore.increment()
  // const a = ref()

  // const bb = () => {
  //   setTimeout(() => {
  //     useStore.count.val = 333
  //   },6000)
  // }

  //可以通过 store 的 $subscribe() 方法查看状态及其变化,通过patch修改状态时就会触发一次
  // useStore.$subscribe((mutation, state) => { 
  //   // 每当它发生变化时，将整个状态持久化到本地存储
  //   // localStorage.setItem('test', JSON.stringify(state))
  //   a.value = state.count
  //   console.log(state.count, '我是1+2======')
  // })
  // bb()

  // return a
}

export default counterHandling