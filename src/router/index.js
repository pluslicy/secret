import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Books from '@/pages/books'
import Magazine from '@/pages/magazine'
import Resource from '@/pages/resource'
import Solution from '@/pages/solution'
import Study from '@/pages/study'
import Video from '@/pages/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },{
    	path: '/books',
      component: Books
    },{
    	path: '/magazine',
      component: Magazine
    },{
    	path: '/resource',
      component: Resource
    },{
    	path: '/solution',
      component: Solution
    },{
    	path: '/study',
      component: Study
    },{
    	path: '/video',
      component: Video
    }
  ]
})
