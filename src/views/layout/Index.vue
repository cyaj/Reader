<script setup>
import { useRouter } from 'vue-router'
useRouter().push('/bookshelf')
</script>

<template>
  <RouterView></RouterView>
  <van-tabbar route>
    <van-tabbar-item icon="bar-chart-o" to="/bookshelf">书架</van-tabbar-item>
    <!-- <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item> -->
  </van-tabbar>
</template>

<style lang="less" scoped>

</style>