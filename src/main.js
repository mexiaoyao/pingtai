import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css';

console.log('版本:'+ require('../package.json').version)

//开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。 而在生产环境下，这些警告语句却没有...
Vue.config.productionTip = false

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
