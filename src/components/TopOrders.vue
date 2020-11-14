<template>
  <v-col cols="6">
    <v-card flat tile class="mx-5 pa-5 success">
      <v-card-title>{{ title }}</v-card-title>
      <v-card
        @click="openOrder"
        class="mb-5"
        v-for="order in orders"
        :key="order.id"
      >
        <v-card-title class="headline">
          {{ order.name }}
        </v-card-title>
        <v-card-subtitle>{{ order.totalPrice }}</v-card-subtitle>
      </v-card>
      <v-btn class="ma-2" outlined color="indigo"> Vice </v-btn>
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
  // computed: {
  //   orders() {
  //    return
  //   }
  // }
  methods: {
    openOrder() {
      console.log("open order");
    }
  }
};
</script>
