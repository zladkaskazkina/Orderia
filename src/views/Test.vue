<template>
  <v-container>
    <productCard />
  </v-container>
</template>

<script>
import ProductCard from "./../components/ProductAddCard.vue";

export default {
  name: "Test",
  components: {
    productCard: ProductCard,
  },
};
</script>

<style lang="scss" scoped></style>
