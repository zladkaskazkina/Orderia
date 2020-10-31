import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import orders from "./modules/orders";
import users from "./modules/users";

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    orders,
    users
  },
  getters: {}
});
