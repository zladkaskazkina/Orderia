<template>
  <div class="dashboard ma-10">
    <h1 class="ma-5">Nástěnka</h1>
    <div class="ma-10">
      <ProjectChart></ProjectChart>
    </div>
    <v-row no-gutters class="ma-10">
      <TopOrders title="Posledni objednavky" :orders="lastOrders"></TopOrders>
      <TopOrders title="Nevyrizene objednavky" :orders="pendingOrders"></TopOrders>
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
      return this.$store.state[`${this.$store.state.users.loggedUser.role}Orders`].orders.slice(-3);
    },
    pendingOrders() {
      return this.$store.state[`${this.$store.state.users.loggedUser.role}Orders`].orders
      .filter(x => (x.status === "čeká na schválení"))
      .slice(-3);
    },
  },

  // computed() {
  //   ...mapState({
  //   // ...
  // })
  // };
  created() {
    //this.$store.dispatch("orders/getOrders");
    //}
  },
  mounted() {
    this.$store.dispatch(
      `${this.$store.state.users.loggedUser.role}Orders/getOrders`
    );
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  min-height: 100vh;
}
</style>
