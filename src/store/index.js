import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import orders from "./modules/orders";
import users from "./modules/users";
import products from "./modules/products";
import auth from "./modules/auth";
import cart from "./modules/cart";



Vue.use(Vuex, axios);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    orders,
    users,
    products,
    auth,
    cart,
  },
  getters: {}
});
