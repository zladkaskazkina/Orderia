import axios from "axios";
const state = {
  complaints: [],
  complaint: null
};

const getters = {};
const actions = {
  getComplaints({ commit }) {
    axios.get("http://localhost:3000/complaints").then(response => {
      commit("SET_COMPLAINTS", response.data);
    });
  },
  getComplaint(ctx, complaintId) {
    console.log(complaintId);
    axios.get(`http://localhost:3000/complaints/${complaintId}`).then(response => {
      ctx.commit("SET_COMPLAINT", response.data);
      // return axios.get(`http://localhost:3000/users/${response.data.customerID}`);
      ctx.dispatch("users/getUser", response.data.buyerID, { root: true });
    });
  },

  acceptComplaint({ commit }, id) {
    axios
      .patch(`http://localhost:3000/complaints/${id}`, { status: "prijata" })
      .then(response => {
        commit("ACCEPT_COMPLAINT", response.data);
      });
    //Nebo radeji na backendu! A na frontendu jen zavolam .post(`http://localhost:3000/api/orders/${id}/acceptorder`)
    alert("Objednavka byla prijata");
  },
  rejectComplaint({ commit }, id) {
    axios
      .patch(`http://localhost:3000/complaints/${id}`, { status: "zamitnuta" })
      .then(response => {
        commit("REJECT_COMPLAINT", response.data);
      });
    alert("Objednavka byla odmitnuta");
    //Nebo radeji na backendu! A na frontendu jen zavolam .post(`http://localhost:3000/api/orders/${id}/rejectorder`)
  }
};

const mutations = {
  SET_COMPLAINTS(state, complaints) {
    state.complaints = complaints;
  },
  SET_COMPLAINT(state, complaint) {
    state.complaint = complaint;
  },
  ACCEPT_COMPLAINT(state) {
    state.complaint.status = "prijata";
  },
  REJECT_COMPLAINT(state) {
    state.complaint.status = "zamitnuta";
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
