import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "../views/Registration.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: '../views/Home.vue'
  },
  {
    path: "/login",
    name: "Login",
    meta: {layout: 'empty'},
    // lazy-loaded 
    component: () => 
      import ("../views/Login.vue")
  },
  {
    path: "/registrace",
    name: "Registration",
    meta: {layout: 'empty'},
    // lazy-loaded 
    component: () =>
      import ("../views/Registration.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
