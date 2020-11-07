import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import producerOrders from "./modules/producerOrders";
import users from "./modules/users";
import producerProducts from "./modules/producerProducts";
import buyerProducts from "./modules/buyerProducts";
import auth from "./modules/auth";
import cart from "./modules/cart";

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    producerProducts,
    buyerProducts,
    producerOrders,
    users,
    auth,
    cart
  },
  getters: {}
});
