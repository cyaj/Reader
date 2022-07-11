<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'
import SearchComponent from '../SearchComponent/Index.vue'

// 搜索
const queryBook = ref('')
const onSearch = val => Toast(val)
const onCancel = () => searchComponentVisible.value = false

// 书架
const bookList = ref([])
const searchComponentVisible = ref(false)
const showSearchComponent = () => searchComponentVisible.value = true
</script>

<template>
  <div class="container">
    <van-nav-bar>
      <template #title>
        <div style="width: 100%;">
          <form action="/">
            <van-search
              v-model="queryBook"
              show-action
              placeholder="搜书"
              @search="onSearch"
              @cancel="onCancel"
              @click-input="showSearchComponent"
              input-align="center"
              shape="round"
            />
          </form>
        </div>
      </template>
    </van-nav-bar>

    <van-grid v-if="!searchComponentVisible" :border="false" :column-num="3">
      <van-grid-item v-for="item in bookList" :key="item.Id">
        <van-image show-loading :src="item.Img" width="100" height="80" />
        <span class="book-name">{{ item.Name }}</span>
      </van-grid-item>
    </van-grid>

    <SearchComponent 
      v-if="searchComponentVisible"
      @addToBookshelf="book => bookList.push(book)"
    />
  </div>
</template>

<style lang="less" scoped>
.container {
  height: calc(100vh - 50px);
  font-size: 16px;
  .book-name {
    margin-top: 6px;
  }
}
.van-nav-bar {
  :deep(.van-nav-bar__title) {
    max-width: 100%;
    width: 100%;
  }
}
.van-grid-item {
  :deep(.van-grid-item__content--center) {
    justify-content: start;
  }
}
</style>
