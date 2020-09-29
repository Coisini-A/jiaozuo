// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from './utils/request'
import '@/assets/css/global.css'
import Axios from 'axios'
import BaiduMap from 'vue-baidu-map'


Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.axios = axios
Vue.prototype.$axios = Axios 
/* eslint-disable no-new */
// Vue.rototype.$goRoute = function(index){
//   this.$router.push(index)
// }
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
