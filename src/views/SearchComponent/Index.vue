<script setup>
import { ref } from 'vue'
import { getSearchResult } from './api/search'

const searchBookList = ref([])
const searchLoading = ref(false)
const searchFinished = ref(false)
let pageNum = ref(0)

const searchBook = async (bookName, page) => {
  const result = await getSearchResult(bookName, page)
  if (result.status === 1) {
    searchBookList.value.push(...result.data)
  }
  console.log(result, 'result')
}

const onLoad = () => {
    pageNum.value++
    searchBook('遮天', pageNum.value)

    // 加载状态结束
    searchLoading.value = false

    // 数据全部加载完成
    if (searchBookList.value.length >= 40) {
      searchFinished.value = true
    }
}
</script>

<template>
  <van-list
    v-model:loading="searchLoading"
    :finished="searchFinished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell
      v-for="item in searchBookList"
      :key="item.Id"
      :title="item.Name"
    />
  </van-list>
</template>

<style lang="less" scoped></style>
