import axios from "axios";
const state = {
  orders: [],
  order: null
};

const getters = {};
const actions = {
  getOrders({ commit }) {
    axios.get("http://localhost:3000/api/orders/").then(response => {
      commit("SET_ORDERS", response.data);
    });
  },
  getOrder({ commit }, orderId) {
    axios.get(`http://localhost:3000/api/orders/${orderId}`).then(response => {
      commit("SET_ORDER", response.data);
    });
  },

  acceptOrder({ commit }, id) {
    axios
      .patch(`http://localhost:3000/api/orders/${id}`, { status: "prijata" })
      .then(response => {
        commit("ACCEPT_ORDER", response.data);
      });
    //Nebo radeji na backendu! A na frontendu jen zavolam .post(`http://localhost:3000/api/orders/${id}/acceptorder`)
  },
  rejectOrder({ commit }, id) {
    axios
      .patch(`http://localhost:3000/api/orders/${id}`, { status: "zamitnuta" })
      .then(response => {
        commit("REJECT_ORDER", response.data);
      });
    //Nebo radeji na backendu! A na frontendu jen zavolam .post(`http://localhost:3000/api/orders/${id}/rejectorder`)
  }
};

//   updateOrder({ dispatch }, payload) {
//     api.apiClient
//       .put(`/api/orders`, payload, { crossDomain: true })
//       .then(response => {
//         dispatch("getOrders", { root: true });
//         console.log(response);
//       })
//       .catch(e => {
//         console.log(e); /* eslint-disable-line no-console */
//       });
//   },

//   removeProject({ commit }, payload) {
//     api.apiClient
//       .delete(`/api/orders/` + payload.id, { crossDomain: true })
//       .then(response => {
//         commit("REMOVE_ORDER", payload.id);
//         console.log(response);
//       })
//       .catch(e => {
//         console.log(e); /* eslint-disable-line no-console */
//       });
//   },

//   toggleProject({ commit }, payload) {
//     api.apiClient
//       .post(`/api/orders/toggle/` + payload, { crossDomain: true })
//       .then(response => {
//         commit("TOGGLE_ORDER", response.data.id);
//         console.log(response);
//       })
//       .catch(e => {
//         console.log(e); /* eslint-disable-line no-console */
//       });
//   }
// };

const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders;
  },
  SET_ORDER(state, order) {
    state.order = order;
  },
  ACCEPT_ORDER(state) {
    state.order.status = "prijata";
  },
  REJECT_ORDER(state) {
    state.order.status = "zamitnuta";
  }

  //   CREATE_ORDER(state, payload) {
  //     state.all.push(payload);
  //   },

  //   REMOVE_ORDER(state, id) {
  //     for (let i = 0; i < state.all.length; ++i) {
  //       if (state.all[i].id === id) {
  //         state.all.splice(i, 1);
  //         break;
  //       }
  //     }
  //   },

  //   TOGGLE_ORDER(state, id) {
  //     for (let i = 0; i < state.all.length; ++i) {
  //       if (state.all[i].id === id) {
  //         state.all[i].disabled = !state.all[i].disabled;
  //       }
  //     }
  //   }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
