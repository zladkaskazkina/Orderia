<template>
  <v-container>
    <productCard />
  </v-container>
</template>

<script>
import ProductCard from "@/components/ProductAddCard.vue";

export default {
  name: "ProductNew",
  components: {
    productCard: ProductCard
  }
};
</script>
