import axios from "axios";

const state = {
  cart: []
};

const getters = {
  countItems: state => {
    let count = 0;
    for (let i = 0; i < state.cart.length; i++) {
      count += state.cart[i].quantity;
    }
    return count;
  },
  totalPrice: state => {
    let totalPrice = 0.0;
    for (let i = 0; i < state.cart.length; i++) {
      totalPrice += state.cart[i].quantity * state.cart[i].product.price;
    }
    return totalPrice;
  }
};

const actions = {
  addProduct({ commit }, product) {
    commit("ADD_TO_CART", product);
  },

  removeProduct({ commit }, product) {
    commit("REMOVE_FROM_CART", product);
  },

  clearCart({ commit }) {
    commit("CLEAR_CART");
  },

  increaseQuant({ commit }, id) {
    commit("INCREASE_QUANTITY", id);
  },

  decreaseQuant({ commit }, id) {
    commit("DECREASE_QUANTITY", id);
  },

  checkout({ commit }) {
    let d = new Date();
    console.log(d);
    let order = {
      id: null,
      status: "ceka na schvaleni",
      transport_price: 0,
      total_price: getters.totalPrice(state),
      producerID: state.cart[0].product.producerID,
      buyerID: "",
      createdAt: `${d.getFullYear()}-${pad(d.getMonth()+ 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`,
      items: []
    };
    for (let i = 0; i < state.cart.length; i++) {
      let item = {
        id: state.cart[i].product.id,
        title: state.cart[i].product.title,
        price: state.cart[i].product.price,
        quantity: state.cart[i].quantity
      };
      order.items.push(item);
    }
    axios.post(`http://localhost:3000/orders`, order);
    commit("CHECKOUT");
    alert("Objednavka vytvorena.");
  }
};

const mutations = {
  ADD_TO_CART(state, { product, quantity }) {
    let productInCart = state.cart.find(item => {
      return item.product.id === product.id;
    });
    if (productInCart) {
      productInCart.quantity += quantity;
      return;
    } else {
      if (
        state.cart.length > 0 &&
        state.cart[0].product.producerID !== product.producerID
      ) {
        alert("Produkt od jineho dodavatele, objednej zvlast");
        return;
      }
      state.cart.push({
        product,
        quantity: quantity
      });
    }
  },

  REMOVE_FROM_CART(state, product) {
    state.cart = state.cart.filter(item => {
      return item.product.id !== product;
    });
  },

  CLEAR_CART(state) {
    state.cart = [];
  },

  INCREASE_QUANTITY(state, id) {
    let productInCart = state.cart.find(item => {
      return item.product.id === id;
    });
    productInCart.quantity++;
  },

  DECREASE_QUANTITY(state, id) {
    let productInCart = state.cart.find(item => {
      return item.product.id === id;
    });
    productInCart.quantity--;
    if (productInCart.quantity === 0) {
      state.cart = state.cart.filter(item => {
        return item.product.id !== id;
      });
    }
  },

  CHECKOUT(state) {
    state.cart = [];
  }
};

function pad(num) {
  let numstr = `${num}`;
  while(numstr.length < 2) {
    numstr = "0" + numstr;
  }
  return numstr;
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

