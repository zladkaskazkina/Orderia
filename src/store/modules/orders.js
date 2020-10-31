// import api from "../../api/axiosSettings";

// // initial state
// const state = {
//   all: [] // id, name, rate, disabled
// };

// const getters = {};

// const actions = {
//   getOrders({ commit }) {
//     api.apiClient
//       .get(`/api/orders`, { crossDomain: true })
//       .then(response => {
//         commit("SET_ORDERS", response.data);
//       })
//       .catch(e => {
//         console.log(e); /* eslint-disable-line no-console */
//       });
//   },

//   createOrder({ commit }, payload) {
//     api.apiClient
//       .post(`/api/orders`, payload, { crossDomain: true })
//       .then(response => {
//         commit("CREATE_ORDER", response.data);
//         console.log(response);
//       })
//       .catch(e => {
//         console.log(e); /* eslint-disable-line no-console */
//       });
//   },

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

// const mutations = {
//   SET_ORDERS(state, orders) {
//     state.all = orders.sort(function(a, b) {
//       var nameA = a.name.toUpperCase();
//       var nameB = b.name.toUpperCase();
//       if (nameA < nameB) {
//         return -1;
//       }
//       if (nameA > nameB) {
//         return 1;
//       }
//       return 0;
//     });
//   },

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
// };

// export default {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations
// };
