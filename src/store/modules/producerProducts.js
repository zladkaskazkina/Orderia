import axios from "axios";
export const namespaced = true;

const state = {
  products: [],
  product: {}
};
const getters = {
  getProduct: state => {
    console.log("jsem tu");
    return state.product;
  }
};
const actions = {
  getProducts({ commit }) {
    axios.get("http://localhost:3000/products/").then(response => {
      commit("SET_PRODUCTS", response.data);
    });
  },
  getProduct({ commit }, productId) {
    console.log("zacatek get produkt");
    return axios
      .get(`http://localhost:3000/products/${productId}`)
      .then(response => {
        commit("SET_PRODUCT", response.data);
      });
  },
  createProduct({ commit }, product) {
    axios.post(`http://localhost:3000/products/`, product).then(response => {
      commit("CREATE_PRODUCT", response.data);
    });
  },
  editProduct({ commit }, productProxy, productId) {
    axios
      .patch(`http://localhost:3000/products/${productId}`, productProxy)
      .then(response => {
        commit("EDIT_PRODUCT", response.data);
        console.log("The product was edit");
      });
  }
};
const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  CREATE_PRODUCT(state, product) {
    state.products.push(product);
  },
  EDIT_PRODUCT() {
    //
  }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
