// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// 按需导入组件
// import { 
//   // 模态框
//   Dialog, 
//   // 分页
//   Pagination,
//   // 走马灯
//   Carousel,CarouselItem,
//   // 面包屑
//   Breadcrumb,BreadcrumbItem,
// } from 'element-ui';
// Vue.use(Dialog)
// Vue.use(Pagination)
// Vue.use(Carousel)
// Vue.use(CarouselItem)
// Vue.use(Breadcrumb)
// Vue.use(BreadcrumbItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
