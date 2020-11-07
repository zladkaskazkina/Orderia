<template>
  <div>
    <v-fab-transition>
      <v-btn
        color="success"
        fab
        large
        light
        top
        right
        class="btn--float"
        router
        to="/produkty/novy"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-row class="mx-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :productData="product"
        cols="3"
        @openIt="openItem"
      />
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "Products",
  components: { ProductCard },
  props: ["role"],
  data() {
    return {
      fab: false,
      hidden: false,
      tabs: null
    };
  },
  computed: {
    products() {
      return this.$store.state[`${this.role}Products`].products;
    }
  },
  mounted() {
    this.$store.dispatch(`${this.role}Products/getProducts`, null, {
      root: true
    });
  },
  methods: {
    openItem(event) {
      console.log(event);
      this.$router.push({
        name: "ProductItem",
        params: { id: event, role: this.role }
      });
    }
  }
};
</script>

<style lang="scss">
.btn--float {
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  margin: 0 0 16px 16px;
}
</style>
