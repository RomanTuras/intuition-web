import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./components/About")
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("./components/Settings")
    }
  ]
})

export default router;