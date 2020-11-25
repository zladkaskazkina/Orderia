import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import producerOrders from "./modules/producerOrders";
import producerComplaints from "./modules/producerComplaints";
import users from "./modules/users";
import producerProducts from "./modules/producerProducts";
import buyerOrders from "./modules/buyerOrders";
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
<<<<<<< HEAD
    producerComplaints,
=======
    buyerOrders,
>>>>>>> b9c92fb799c38f3e1ff9670a3e5dde1048679735
    users,
    auth,
    cart
  },
  getters: {}
});
