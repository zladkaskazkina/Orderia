const state = {
  cart: [
    {
      id: 1,
      title: "Rizoto",
      price: 129,
      quantity: 1
    },
    {
      id: 2,
      title: "Testoviny",
      price: 150,
      quantity: 1
    }
  ]
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
  ADD_TO_CART(state, product) {
    let productInCart = state.cart.find(item => {
      return item.id === product.id;
    });
    console.log(productInCart);
    if (productInCart) {
      productInCart.quantity++;
    } else {
      state.cart.push({
        ...product,
        quantity: 1
      });
    }
  },

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
