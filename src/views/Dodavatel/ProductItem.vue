<template>
  <div>
    <v-card v-if="product" class="ma-5 pa-10">
      <v-img
        :src="product.image"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      ></v-img>
      <v-card-title> {{ product.title }} </v-card-title>
      <v-card-subtitle class="pb-0"> {{ product.price }} Kč </v-card-subtitle>
      <v-card-text>
        <div>{{ product.description }}</div>
        <div>Slozeni: {{ product.ingredients }}</div>
      </v-card-text>
    </v-card>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProductItem",
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    product() {
      return this.$store.state.products.product;
    }
  },
  mounted() {
    this.$store.dispatch("products/getProduct", this.id);
  },
  methods: {}
};
</script>
