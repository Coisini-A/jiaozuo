import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cultural from '@/page/cultural/index'
import Conduct from '@/page/conduct/index'
import Estate from '@/page/estate/index'
import Global from '@/page/global/index'
import Public from '@/page/public/index'
import Scenic from '@/page/scenic/index'
import Wisdom from '@/page/wisdom/index'
import Ditu from '@/page/wisdom/component/ditu.vue'
import Tingchecang from '@/page/wisdom-tingchecang/index'
import Analysis from '@/page/wisdom-analysis/index'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [ 
    {
      path: '/wisdom-analysis',
      name: 'Analysis',
      component: Analysis
    },
    {
    path: '/wisdom-tingchecang',
    name: 'Tingchachang',
    component: Tingchecang
    },
    {
      path: '/ditu',
      name: 'Ditu',
      component: Ditu
    },
    {
      path: '/conduct',
      name: 'Conduct',
      component: Conduct
    },
    {
      path: '/cultural',
      name: 'Cultural',
      component: Cultural
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/estate',
      name: 'Estate',
      component: Estate
    },
    {
      path: '/global',
      name: 'Global',
      component: Global
    },
    {
      path: '/public',
      name: 'Public',
      component: Public
    },
    {
      path: '/scenic',
      name: 'Scenic',
      component: Scenic
    },
    {
      path: '/wisdom',
      name: 'Wisdom',
      component: Wisdom,
    },
  ]
})
