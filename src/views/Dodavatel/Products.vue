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
        to="/dodavatel/produkty/novy"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-row class="mx-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :productData="product"
        cols="4"
        @click="openItem"
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
  data() {
    return {
      fab: false,
      hidden: false,
      tabs: null,
      products: [
        {
          id: 12345678,
          name: "Rohlik makovy",
          image: "rohlik-makovy.jpeg",
          price: 2.45,
          available: true
        },
        {
          id: 12345679,
          name: "Rohlik makovy",
          image: "rohlik-makovy.jpeg",
          price: 2.45,
          available: true
        },
        {
          id: 12345670,
          name: "Rohlik makovy",
          image: "rohlik-makovy.jpeg",
          price: 2.45,
          available: true
        },
        {
          id: 12347670,
          name: "Rohlik makovy",
          image: "rohlik-makovy.jpeg",
          price: 2.45,
          available: true
        }
      ]
    };
  },
  methods: {
    openItem(event) {
      console.log(event.id + " is clicked");
      const id = event.id;
      // this.$router.push({ name: "objednavky", params: { id } }); // -> /user/123
      this.$router.push({ path: `/dodavatel/produkty/${id}` });
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
