<template>
  <div id="app">
		<Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/pages/header'
import Footer from '@/pages/footer'
export default {
  name: 'App',
  components:{
  	Header,
  	Footer
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
li{
  list-style: none;
}
</style>
