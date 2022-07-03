<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'

const searchBook = ref('')
const onSearch = val => Toast(val)
const onCancel = () => Toast('取消')
</script>

<template>
  <div class="container">
    <van-nav-bar>
      <template #title>
        <div style="width: 100%;">
          <form action="/">
            <van-search
              v-model="searchBook"
              show-action
              placeholder="搜书"
              @search="onSearch"
              @cancel="onCancel"
              input-align="center"
              shape="round"
            />
          </form>
        </div>
      </template>
    </van-nav-bar>
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="i in 3" :key="i">
        <van-image show-loading src="" width="100" height="80" />
        <span class="book-name">书名</span>
      </van-grid-item>
    </van-grid>
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
</style>
