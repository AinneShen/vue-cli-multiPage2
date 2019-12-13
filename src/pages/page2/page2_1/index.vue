<!--
 * @Descripttion: 
 * @Author: shenchuanrun
 * @Date: 2019-12-11 15:06:52
 * @LastEditors: shenchuanrun
 * @LastEditTime: 2019-12-12 15:15:21
 -->
<template>
  <div id="app">
    <HelloWorld msg="Welcome to Page2-1"/>
    <a href="/page1.html">page1</a>
    <a href="/page2.html">page2</a>
    <div class='logo'></div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>

<style lang='less'>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
    color: pink;
  }
  .logo {
    background-image: url('~@/static/img/logo.png');
    width: 100px;
    height: 100px;
    background-size: 100% 100%;
    margin-top: 10px;
  }
}
</style>
