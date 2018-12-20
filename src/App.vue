<template>
  <div id="app">
<<<<<<< HEAD
		<!-- <Header/>
    <router-view/>
    <Footer/> -->
    <Resource/>
=======
		<Header/>
    <router-view/>
    <Footer/>
>>>>>>> b85b12fb6031624f0407f867121be91707208777
  </div>
</template>

<script>
import Header from '@/pages/header'
import Footer from '@/pages/footer'
<<<<<<< HEAD
import Resource from '@/pages/resource'

=======
>>>>>>> b85b12fb6031624f0407f867121be91707208777
export default {
  name: 'App',
  components:{
  	Header,
<<<<<<< HEAD
  	Footer,
    Resource
=======
  	Footer
>>>>>>> b85b12fb6031624f0407f867121be91707208777
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
