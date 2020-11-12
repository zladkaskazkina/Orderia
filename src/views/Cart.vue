<template>
  <div>
    <v-card class="ma-5 pa-10">
      <v-card-title class="pa-5">
        <h3>Objednávka</h3>
      </v-card-title>

      <!-- v-show="!products.length" -->
      <!-- <p>Váš košík je prázdný!</p> -->

      <table
        class="pa-5 cart-list"
        v-for="product in cart.cart"
        v-bind:key="product.id"
      >
        <!-- v-show="products.length" -->
        <thead class="cart-list--head">
          <tr>
            <td>Kód</td>
            <td>Název</td>
            <td>Cena</td>
            <td>Množství</td>
          </tr>
        </thead>
        <tbody>
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
              <!-- total price per product? -->
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
        <tfoot>
          <td><strong>Total</strong></td>
          <td>
            CZK
            <!-- {{ total }} -->
          </td>
        </tfoot>
      </table>

      <v-row no-gutters class="pa-5">
        <v-btn @click="clearCart">Vymazat kosik</v-btn>
      </v-row>

      <v-row no-gutters class="pa-5">
        <v-btn @click="checkout">
          <!-- v-show="products.length" -->
          <!-- @click="checkout" -->
          Potvrdit objednávku
        </v-btn>
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
      console.log(this.$store.state.cart);
      return this.$store.state.cart;
    }



    // total(){
    //   return this.products.reduce((total, product) =>{
    //     return total + product.price * product.quantity
    //   }, 0)
    // }
  },
  methods: {
    // checkout() {
    //   alert('Celková částka k zaplacení je CZK' + this.total)
    // }

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

    checkout(){
      this.$store.dispatch(`cart/checkout`);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-list {
  width: 100%;
  border: 1px solid grey;
}
</style>
