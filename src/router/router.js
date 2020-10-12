import Vue from "vue";
import VueRouter from "vue-router";
// Views
import Home from "../views/Home";
import Login from "../views/Login";
import Registration from "../views/Registration";
import Test from "../views/Test";
import Test2 from "../views/Test2";
import Dodavatel from "../views/Dodavatel";
// Layouts
import StartLayout from "../layouts/StartLayout";
import AuthLayout from "../layouts/AuthLayout";
import ProfilLayout from "../layouts/ProfilLayout";


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
    meta: { layout: AuthLayout },
    // lazy-loaded
    component: Login
  },
  {
    path: "/registrace",
    name: "Registration",
    meta: { layout: AuthLayout },
    // lazy-loaded
    component: Registration
  },
  {
    path: "/test",
    name: "Test",
    meta: { layout: AuthLayout},
    component: Test
  },
  {
    path: "/test2",
    name: "Test2",
    meta: { layout: AuthLayout},
    component: Test2
  },
  {
    path: "/dodavatel",
    name: "Dodavatel",
    meta: { layout: ProfilLayout},
    component: Dodavatel
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
