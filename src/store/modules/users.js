import axios from "axios";

const state = {
  user: {},
  loggedUser: {
    id: 1,
    role: "producer",
    ico: 456789056789,
    companyName: "Na italske farme s.r.o.",
    name: "",
    email: "naitalskefarme@gmail.com",
    password: "123456",
    phone: "773503153",
    address: {
      city: "Prague",
      street: "Olgy Havlove",
      number: 10,
      postaleCode: "130 00"
    },
    logo:
      "http://naitalskefarme.cz/wp-content/uploads/2019/04/cropped-Na-italsk%C3%A9-farm%C4%9B.png",
    web: "naitalskefarme.cz",
    dph: true
  }
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
      console.log("user data", response.data);
      commit("SET_USER", response.data);
    });
  }
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },

  SET_USER(state, user) {
    state.user = { ...user };
    console.log(state.user);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
