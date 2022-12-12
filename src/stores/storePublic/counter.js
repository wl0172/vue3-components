import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getList } from '@/api/index'

export const useCounterStore = defineStore('counter', () => {
  const count = ref({
    val: ''
  })
  const doubleCount = computed(() => count.value * 2)

  
  const increment = async () => {
    const data = await getList({
      query: "query($search: JSON, $page: Int, $size: Int) {\n            getReportListByAppId(search: $search, page: $page, size: $size) {\n              count rows {\n                id appId appName executeType statisticsType statisticsItem statisticsNum createdAt\n              }\n            }\n          }",
      variables: {
        search: {
          executeType: "",
          start: "",
          end: ""
        },
        page: 1,
        size: 10
      }
    })
    if (data.data) {
      count.value.val = {
        txt: '我在stores-storePublic------'
      }
    }
  }

  return { count, doubleCount, increment }
})
