import Vue from "vue";
import VueRouter from "vue-router";
// Views
import Home from "../views/Home";
import Login from "../views/Login";
import Registration from "../views/Registration";
import OrderItem from "../views/Dodavatel/OrderItem";
import Dashboard from "../views/Dashboard";
import Products from "../views/Dodavatel/Products";
import ProductItem from "../views/Dodavatel/ProductItem";
import Partneri from "../views/Partneri";
import Objednavky from "../views/Dodavatel/OrderList";
import Reklamace from "../views/Dodavatel/Reklamace";
import Statistiky from "../views/Dodavatel/Statistiky";
import AddProduct from "../views/Dodavatel/AddProduct";
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

  // Dodavatel
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { layout: ProfilLayout },
    component: Dashboard
  },
  {
    path: "/produkty",
    name: "Products",
    meta: { layout: ProfilLayout },
    component: Products
  },
  {
    path: "/produkty/novy",
    name: "AddProduct",
    meta: { layout: ProfilLayout },
    component: AddProduct
  },
  {
    path: "/produkty/:id",
    name: "ProductItem",
    meta: { layout: ProfilLayout },
    component: ProductItem,
    props: true
  },
  {
    path: "/partneri",
    name: "Partneri",
    meta: { layout: ProfilLayout },
    component: Partneri
  },
  {
    path: "/objednavky",
    name: "Objednavky",
    meta: { layout: ProfilLayout },
    component: Objednavky
  },
  {
    path: "/objednavky/:id",
    name: "OrderItem",
    meta: { layout: ProfilLayout },
    component: OrderItem,
    props: true
  },
  {
    path: "/reklamace",
    name: "Reklamace",
    meta: { layout: ProfilLayout },
    component: Reklamace
  },
  {
    path: "/statistiky",
    name: "Statistiky",
    meta: { layout: ProfilLayout },
    component: Statistiky
  },
  {
    path: "/profil",
    name: "Profil",
    meta: { layout: ProfilLayout },
    component: Profil
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;
