<template>
  <div>
    <v-card class="ma-5 pa-10">
      <v-card-title class="pa-5">
        <h3>Objednávka</h3>
      </v-card-title>

      <v-row no-gutters class="px-5" v-show="itemCount === 0">
      <p >Váš košík je prázdný a smutný!</p>
      </v-row>

      <table
        class="pa-5 cart-list"
        v-for="product in cart.cart"
        v-bind:key="product.id"
      >
        <thead class="list--head">
          <tr>
            <td>Kód</td>
            <td>Název</td>
            <td>Jednotková cena</td>
            <td>Množství</td>
            <td>Cena celkem</td>
          </tr>
        </thead>
        <tbody class="list--body">
          <tr>
            <td>
              {{ product.product.id }}
            </td>
            <td>
              {{ product.product.title }}
            </td>
            <td>
              {{ product.product.price }}
            </td>
            <td>
              {{ product.quantity }}
            </td>
            <td>
              {{ product.product.price * product.quantity }}
            </td>
            <td>
              <v-btn icon ripple @click="increaseQuant(product.product.id)">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </v-btn>
              <v-btn icon ripple @click="decreaseQuant(product.product.id)">
                <v-icon>mdi-minus-circle-outline</v-icon>
              </v-btn>
            </td>
            <td>
              <!-- delete item -->
              <v-btn icon ripple @click="removeTest(product.product.id)">
                <v-icon>mdi-delete</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </table>

      <v-row no-gutters class="pa-5" justify="space-between">
        <p>
          <strong>Celkový součet položek: {{ itemCount}} </strong>
        </p>

        <p>
          <strong>Celková cena objednávky: {{ totalPrice }} Kč </strong>
        </p>
      </v-row>

       

      <v-row no-gutters class="px-5" justify="space-between">
        
          <v-btn @click="clearCart" :disabled="cartEmpty">Vymazat kosik</v-btn>
       
          <v-btn @click="checkout" :disabled="cartEmpty"> Potvrdit objednávku </v-btn>
     
      </v-row>
    </v-card>
  </div>
</template>

<script>
// pri mounted nacteme produkty ze seznamu buyer
//

export default {
  name: "Cart",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },

    totalPrice() {
      return this.$store.getters["cart/totalPrice"];
    },

    itemCount() {
      return this.$store.getters["cart/countItems"];
    },

    cartEmpty() {
      return this.itemCount === 0;
    }
  },
  methods: {
    removeTest(product) {
      this.$store.dispatch(`cart/removeProduct`, product);
    },

    clearCart() {
      console.log("Mazu vse");
      this.$store.dispatch(`cart/clearCart`);
    },

    increaseQuant(id) {
      this.$store.dispatch(`cart/increaseQuant`, id);
    },

    decreaseQuant(id) {
      this.$store.dispatch(`cart/decreaseQuant`, id);
    },

    checkout() {
      this.$store.dispatch(`cart/checkout`, this.$store.state.users.loggedUser);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-list {
  width: 100%;
  border: 1px solid grey;
}
</style>
