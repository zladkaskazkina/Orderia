import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Login from "../views/Login";
import Registration from "../views/Registration";
import StartLayout from "../layouts/StartLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: StartLayout }
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    // lazy-loaded
    component: Login
  },
  {
    path: "/registrace",
    name: "Registration",
    meta: { layout: "empty" },
    // lazy-loaded
    component: Registration
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
