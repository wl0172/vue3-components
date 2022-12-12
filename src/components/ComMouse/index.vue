<script setup>
import { ref } from 'vue'
import { useMouse } from '@/utils/mouse'

const { x, y } = useMouse()

const Shaft = ref({
  x: x,
  y: y
})

const shubiaoRef = ref(null)

setTimeout(() => {
  // Shaft.value.x = 1000
}, 3000);


// 抛出外部接收的参数
defineExpose({
  x, y,
  Shaft,
  shubiaoRef
})

</script>

<template>
  <div ref="shubiaoRef">
    <div>鼠标x，y</div>
    <div>{{Shaft.x}} - {{Shaft.y}}</div>
  </div>
</template>
