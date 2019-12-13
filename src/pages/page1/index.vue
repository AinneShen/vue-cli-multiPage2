<template>
  <div id="app">
    <HelloWorld msg="Welcome to Page1"/>
    <a href="/page2.html">page2</a>
    <a href="/page2/1.html">page2-1</a>
    <div class='logo'></div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import {getDetail} from '@/api/page1'

export default {
  components: {
    HelloWorld
  },
  methods: {
    init() {
      getDetail()
    }
  },
  created() {
    console.log('接口是' + process.env.VUE_APP_API)
    this.init()
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
