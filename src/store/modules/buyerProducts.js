import axios from "axios";
const state = {
  products: [],
  //
  product: null
};
const getters = {};
const actions = {
  getProducts({ commit }) {
    axios.get(`http://localhost:3000/api/products/`).then(response => {
      commit("SET_PRODUCTS", response.data);
    });
  },
  getProduct({ commit }, productId) {
    axios
      .get(`http://localhost:3000/api/products/${productId}`)
      .then(response => {
        commit("SET_PRODUCT", response.data);
      });
  }
};
const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
