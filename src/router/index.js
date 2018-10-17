import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/Sku',
      name: 'Sku',
      component: resolve => require(['@/components/Sku'], resolve)
    },
    {
      path: '/Test',
      name: 'Test',
      component: resolve => require(['@/components/Test'], resolve)
    }
  ]
})
