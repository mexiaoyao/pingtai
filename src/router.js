import Vue from "vue";
import Router from "vue-router";
//import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  //mode: "history",
  mode: 'hash', //对应刷新后404处理
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      //component: Home,
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/page",
      name: "page",
      component: () => import("./views/Page.vue"),
    },
  ],
});
