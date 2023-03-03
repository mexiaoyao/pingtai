import Vue from "vue";
//import Antd from "ant-design-vue";
import Antd from "./lib/ant.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./locales";
import "./assets/less/main.less";

import "ant-design-vue/dist/antd.css";

import vuescroll from "vuescroll"; //引入vuescroll
import "vuescroll/dist/vuescroll.css"; //引入vuescroll样式

//console.log('版本:'+ require('../package.json').version)

//开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。 而在生产环境下，这些警告语句却没有...
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(vuescroll); //使用

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
