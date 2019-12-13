<template>
  <div id="app">
    <HelloWorld msg="Welcome to Page2"/>
    <a href="/page1.html">page1</a>
    <a href="/page2/1.html">page2-1</a>
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
}
</style>
