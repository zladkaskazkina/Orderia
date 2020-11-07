

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
            quantity: 1,
        }

    ],

};

const getters = {

};

const actions = {
    addProduct({ commit }, product) {
        commit('ADD_TO_CART', product);
    },

    //  fetchCartItems({commit}) {
    //      axios.get(`http://localhost:3000/cart`).then(response => {
    //          commit("SET_CART", response.data);
    //      });
    //  },

    //  removeFromCart() {

    //  },

    //  clearCartItems() {

    //  }

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
            })
        }
    }




    //  ADD_TO_CART(state, {product}) {

    //      let productInCart = state.cart.find(item => {
    //          return item.product.id === product.id;
    //      });
    //      if (productInCart) {
    //         productInCart.quantity++;
    //      } else {
    //         state.cart.push({
    //              product,
    //              quantity: 1
    //          })
    //     }
    //  },

    //  GET_CART_ITEMS(){

    //  },

    //  REMOVE_FROM_CART(){

    //  }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}