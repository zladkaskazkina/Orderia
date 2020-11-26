<template>
  <div class="product-cards ma-8">
    <v-fab-transition>
      <v-btn
        color="success"
        fixed
        fab
        large
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
        @openIt="openItem"
        @addItem="addTest"
      />
    </v-row>
    <!-- vyresit zobrazovani kosiku / horni lista? -->
     <v-row no-gutters justify="center" class="py-5">
      <v-btn class="success" v-ripple @click="goToCart"
        >Prejit do kosiku ({{ cartItemCount }} ks)</v-btn
      >
      <!-- v-if="currentUser === 'buyer' && products -->
    </v-row>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "Products",
  components: { ProductCard },
  props: [""],
  data() {
    return {
      currentUser: this.$store.state.users.loggedUser,
      fab: false,
      hidden: false,
      tabs: null,
    };
  },
  computed: {
    products() {
      return this.$store.state[`${this.currentUser.role}Products`].products;
    },

    cartItemCount() {
      return this.$store.getters["cart/countItems"];
    },
  },
  mounted() {
    this.$store.dispatch(`${this.currentUser.role}Products/getProducts`, null, {
      root: true,
    });
  },
  methods: {
    openItem(event) {
      console.log(event);
      this.$router.push({
        name: "ProductItem",
        params: { id: event },
      });
    },

    addTest(event, quantity) {
      console.log(quantity);
      this.$store.dispatch(`cart/addProduct`, {
        product: event,
        quantity: quantity,
      });
      //alert("Zboží bylo přidáno do košíku!");
    },

    goToCart() {
      this.$router.push(`/cart`);
    },
  },
};
</script>

<style lang="scss">


.product-cards {
  min-height: 100vh;
}
</style>
