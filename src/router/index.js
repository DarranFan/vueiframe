import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: resolve => require(['@/components/Upload'], resolve)
    },
    {
      path: '/Parent',
      name: 'Parent',
      component: resolve => require(['@/components/Parent'], resolve),
      meta:true
    },
    {
      path: '/CombindTable',
      name: 'CombindTable',
      component: resolve => require(['@/components/CombindTable'], resolve)
    }
  ]
})

router.beforeEach((to,from,next)=>{
  console.log(to,from)
  next()
})

export default router;
