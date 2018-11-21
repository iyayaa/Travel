import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/Home')
    },{
      path: '/city', 
      name: 'city',
      component: () => import('@/pages/city/City')
    },{
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/pages/detail/Detail')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
