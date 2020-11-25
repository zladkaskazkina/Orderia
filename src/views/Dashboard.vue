<template>
  <div class="pa-10">
    <h1 class="px-5">Nástěnka</h1>
    <v-container fluid>
      <ProjectChart></ProjectChart>
    </v-container>
    <v-row>
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
<<<<<<< HEAD
      return null; //this.$store.state[`${this.currentUser.role}Orders`].orders;
    }
=======
      return this.$store.state[`${this.$store.state.users.loggedUser.role}Orders`].orders.slice(-3);
    },
    pendingOrders() {
      return this.$store.state[`${this.$store.state.users.loggedUser.role}Orders`].orders
      .filter(x => (x.status === "čeká na schválení"))
      .slice(-3);
    },
>>>>>>> b9c92fb799c38f3e1ff9670a3e5dde1048679735
  },

  // computed() {
  //   ...mapState({
  //   // ...
  // })
  // };
  created() {
    //this.$store.dispatch("orders/getOrders");
    //}
<<<<<<< HEAD
    //mounted() {
    //this.$store.dispatch(`${this.currentUser.role}Orders/getOrders`);
  }
=======
  },
  mounted() {
    this.$store.dispatch(
      `${this.$store.state.users.loggedUser.role}Orders/getOrders`
    );
  },
>>>>>>> b9c92fb799c38f3e1ff9670a3e5dde1048679735
};
</script>
