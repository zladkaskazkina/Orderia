const state = {
  cart: [] 
};

const getters = {};

const actions = {
  addProduct({ commit }, product) {
    commit("ADD_TO_CART", product);
  },

  removeProduct({ commit }, product) {
    commit("REMOVE_FROM_CART", product);
  },

  clearCart({ commit }) {
    commit("CLEAR_CART");
  }
};

const mutations = {
  ADD_TO_CART(state, {product, quantity}) {
      state.cart.push({
          product,
          quantity
      })
    },
    // let productInCart = state.cart.find(item => {
    //   return item.id === product.id;
    // });
    // console.log(productInCart);
    // if (productInCart) {
    //   productInCart.quantity++;
    // } else {
    //   state.cart.push({
    //     ...product,
    //     quantity: 1
    //   });
    // }

  REMOVE_FROM_CART(state, productId) {
    state.cart = state.cart.filter(item => {
      return item.id !== productId;
    });
  },

  CLEAR_CART(state) {
      state.cart = [];
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
