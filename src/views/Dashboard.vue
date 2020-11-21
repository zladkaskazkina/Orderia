<template>
  <div class="pa-10">
    <h1 class="px-5">Nástěnka</h1>
    <v-container fluid>
      <ProjectChart></ProjectChart>
    </v-container>
    <v-row>
      <TopOrders title="Posledni objednavky" :orders="lastOrders"></TopOrders>
      <TopOrders title="Nevyrizene objednavky"></TopOrders>
    </v-row>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import TopOrders from "../components/TopOrders";
import ProjectChart from "../components/ProjectChart";
export default {
  name: "Dashboard",
  components: { TopOrders, ProjectChart },
  data: () => ({
    //currentUser: this.$store.state.users.loggedUser
  }),
  computed: {
    lastOrders() {
      return null; //this.$store.state[`${this.currentUser.role}Orders`].orders;
    }
  },

  // computed() {
  //   ...mapState({
  //   // ...
  // })
  // };
  created() {
    //this.$store.dispatch("orders/getOrders");
    //}
    //mounted() {
    //this.$store.dispatch(`${this.currentUser.role}Orders/getOrders`);
  }
};
</script>
