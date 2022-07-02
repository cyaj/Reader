<script setup>

</script>
<template>
  <RouterView></RouterView>
  <van-tabbar route>
    <van-tabbar-item replace icon="home-o" to="/">书架</van-tabbar-item>
    <van-tabbar-item replace icon="user-o" to="/user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="less">

</style>