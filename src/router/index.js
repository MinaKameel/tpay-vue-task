//import VueRouter from "vue-router";
//import Vue from 'vue';
import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/game/:id",
    component: () => import("../views/GameDetails.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes
});
// Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   routes // short for `routes: routes`
// })
export default router;
