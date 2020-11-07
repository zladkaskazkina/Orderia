import axios from "axios";

const state = {
    user: null,
};

const getters = {};

const actions = {
    getUsers({ commit }) {
        axios.get("http://localhost:3000/users/").then(response => {
            commit("SET_USERS", response.data);
    });
    },

    getUser({ commit }, userId) {
        axios.get(`http://localhost:3000/users/${userId}`).then(response => {
            commit("SET_USER", response.data);
        });
    }
};

const mutations = {
    SET_USERS(state, users) {
        state.users = users;
    },

    SET_USER(state, user) {
        state.user = user;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}