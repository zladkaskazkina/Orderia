import Vue from "vue";
import VueRouter from "vue-router";
// Views
import Home from "../views/Home";
import Login from "../views/Login";
import Registration from "../views/Registration";
import Test from "../views/Test";
import Dodavatel from "../views/Dodavatel";
import Products from "../views/Products";
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
    component: Login
  },
  {
    path: "dodavatel/registrace",
    name: "Registration",
    meta: { layout: AuthLayout },
    component: Registration
  },
  {
    path: "/test",
    name: "Test",
    meta: { layout: AuthLayout},
    component: Test
  },
  {
    path: "/dodavatel",
    name: "Dodavatel",
    meta: { layout: ProfilLayout},
    component: Dodavatel
  },
  {
    path: "/dodavatel/produkty",
    name: "Products",
    meta: { layout: ProfilLayout},
    component: Products
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
