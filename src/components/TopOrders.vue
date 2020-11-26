<template>
  <v-col cols="6">
    <v-card flat tile class="mx-5 pa-5 secondary">
      <v-card-title>{{ title }}</v-card-title>
      <v-card
        @click="openOrder"
        class="mb-5"
        v-for="order in orders"
        :key="order.id"
      >
        
        <v-card-title>
          Číslo objednávky: {{ order.id }}
        </v-card-title>
        <v-row no-gutters justify="space-between" class="px-4">
        <p>Dodavatel: {{ order.buyerID }} </p>
        <p>Celková cena: {{ order.total_price }} Kč</p>
        </v-row>
      </v-card>
      <v-btn class="ma-2" outlined color="error--text"> <router-link to="/objednavky" class="btn-link error--text">Více</router-link></v-btn>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "TopOrders",
  props: ["title", "orders"],
  data: () => ({
    //
  }),
  computed: {
    // orders() {
    //   return this.$store.state[`${this.$store.state.users.loggedUser.role}Orders`].orders;
    // },
  //   orders() {
  //    return
  //   }
  },
  methods: {
    openOrder() {
      console.log("open order");
    }
  }
};
</script>
<style lang="scss" scoped>
.btn-link {
  text-decoration: none;
}
</style>
