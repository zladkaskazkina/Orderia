import Vue from "vue";
import VueRouter from "vue-router";
// Views
import Home from "../views/Home";
import Login from "../views/Login";
import Registration from "../views/Registration";
import Test from "../views/Test";
import Test2 from "../views/Test2";
import Dodavatel from "../views/Dodavatel";
import Products from "../views/Products";
import Partneri from "../views/Partneri";
import Objednavky from "../views/Objednavky";
import Reklamace from "../views/Dodavatel/Reklamace";
import Statistiky from "../views/Dodavatel/Statistiky";
import Profil from "../views/Dodavatel/Profil";
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
    path: "/registrace",
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
  },
  {
    path: "/dodavatel/produkty",
    name: "Products",
    meta: { layout: ProfilLayout},
    component: Products
  },
  {
    path: "/dodavatel/partneri",
    name: "Partneri",
    meta: { layout: ProfilLayout},
    component: Partneri
  },
  {
    path: "/dodavatel/objednavky",
    name: "Objednavky",
    meta: { layout: ProfilLayout},
    component: Objednavky
  },
  {
    path: "/dodavatel/reklamace",
    name: "Reklamace",
    meta: { layout: ProfilLayout},
    component: Reklamace
  },
  {
    path: "/dodavatel/statistiky",
    name: "Statistiky",
    meta: { layout: ProfilLayout},
    component: Statistiky
  },
  {
    path: "/dodavatel/profil",
    name: "Profil",
    meta: { layout: ProfilLayout},
    component: Profil
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
