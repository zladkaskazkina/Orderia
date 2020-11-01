import Vue from "vue";
import VueRouter from "vue-router";
// Views
import Home from "../views/Home";
import Login from "../views/Login";
import Registration from "../views/Registration";
import OrderItem from "../views/Dodavatel/OrderItem";
import Dodavatel from "../views/Dodavatel";
import Products from "../views/Dodavatel/Products";
import ProductItem from "../views/Dodavatel/ProductItem";
import Partneri from "../views/Partneri";
import Objednavky from "../views/Dodavatel/OrderList";
import Reklamace from "../views/Dodavatel/Reklamace";
import Statistiky from "../views/Dodavatel/Statistiky";
import AddProduct from "../views/Dodavatel/AddProduct";
import Profil from "../views/Dodavatel/Profil";
import Odberatel from "../views/Odberatel/Odberatel";
import OrderList from "../views/Odberatel/OrderList";
import Partners from "../views/Odberatel/Partneri";
import Sortiment from "../views/Odberatel/Sortiment";

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
    path: "/dodavatel",
    name: "Dodavatel",
    meta: { layout: ProfilLayout },
    component: Dodavatel
  },
  {
    path: "/dodavatel/produkty",
    name: "Products",
    meta: { layout: ProfilLayout },
    component: Products
  },
  {
    path: "/dodavatel/produkty/novy",
    name: "AddProduct",
    meta: { layout: ProfilLayout },
    component: AddProduct
  },
  {
    path: "/dodavatel/produkty/:id",
    name: "ProductItem",
    meta: { layout: ProfilLayout },
    component: ProductItem
  },
  {
    path: "/dodavatel/partneri",
    name: "Partneri",
    meta: { layout: ProfilLayout },
    component: Partneri
  },
  {
    path: "/dodavatel/objednavky",
    name: "Objednavky",
    meta: { layout: ProfilLayout },
    component: Objednavky
  },
  {
    path: "/dodavatel/objednavky/:id",
    name: "OrderItem",
    meta: { layout: ProfilLayout },
    component: OrderItem
    // props: true
  },
  {
    path: "/dodavatel/reklamace",
    name: "Reklamace",
    meta: { layout: ProfilLayout },
    component: Reklamace
  },
  {
    path: "/dodavatel/statistiky",
    name: "Statistiky",
    meta: { layout: ProfilLayout },
    component: Statistiky
  },
  {
    path: "/dodavatel/profil",
    name: "Profil",
    meta: { layout: ProfilLayout },
    component: Profil
  },
  // Odberatel
  {
    path: "/odberatel/objednavky",
    name: "OrderList",
    meta: { layout: ProfilLayout },
    component: OrderList
  },
  {
    path: "/odberatel",
    name: "Odberatel",
    meta: { layout: ProfilLayout },
    component: Odberatel
  },
  {
    path: "/odberatel/partneri",
    name: "Partners",
    meta: { layout: ProfilLayout },
    component: Partners
  },
  {
    path: "/odberatel/sortiment",
    name: "Sortiment",
    meta: { layout: ProfilLayout },
    component: Sortiment
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
