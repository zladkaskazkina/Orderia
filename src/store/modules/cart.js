const state = {
    cart: []
};

const getters = {
    countItems: (state) => {
        let count = 0;
        for (let i=0; i<state.cart.length; i++)
        {
            count += state.cart[i].quantity;
        }
        return count;
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
            state.cart.push({
                product,
                quantity: 1
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
        let productInCart = state.cart.find( item => {
            return item.product.id === id;
        })
        productInCart.quantity++;
    },

    DECREASE_QUANTITY(state, id) {
        let productInCart = state.cart.find( item => {
            return item.product.id === id;
        })
        productInCart.quantity--;
        if (productInCart.quantity === 0) {
            state.cart = state.cart.filter(item => {
                return item.product.id !== id;
            });
        }
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
