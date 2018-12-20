<template>
  <div id="app">
		<!-- <Header/>
    <router-view/>
    <Footer/> -->
    <Resource/>
  </div>
</template>

<script>
import Header from '@/pages/header'
import Footer from '@/pages/footer'
import Resource from '@/pages/resource'

export default {
  name: 'App',
  components:{
  	Header,
  	Footer,
    Resource
  }
}
</script>

<style>
body {
    color: #424242;
    font-size: 14px;
    line-height: 1.75;
}

* {
  font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #424242;
}
#app .container {
  width: 1240px;
  margin: 0 auto;
}
</style>
