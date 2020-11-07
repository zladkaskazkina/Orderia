import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import orders from "./modules/orders";
import users from "./modules/users";
import producerProducts from "./modules/producerProducts";
import buyerProducts from "./modules/buyerProducts";
import auth from "./modules/auth";

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    producerProducts,
    buyerProducts,
    orders,
    users,
    auth
  },
  getters: {}
});
