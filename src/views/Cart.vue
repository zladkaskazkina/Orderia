<template>
  <div class="cart">
    <v-card class="ma-5 pa-10">
      <v-card-title class="ma-5 justify-center">
        <h3>Vaše objednávka</h3>
      </v-card-title>

      <v-row no-gutters class="px-5" v-show="itemCount === 0">
      <p >Váš košík je prázdný a smutný!</p>
      </v-row>

      <table class="cart-list">
        <thead class="list--head" v-show="itemCount != 0">
          <tr>
            <td>Kód</td>
            <td>Název</td>
            <td>Cena/MJ</td>
            <td>Množství</td>
            <td>Cena celkem</td>
            <td></td>
          </tr>
        </thead>
        <tbody class="list--body"
         v-for="product in cart.cart"
        v-bind:key="product.id">
          <tr>
            <td>
              {{ product.product.id }}
            </td>
            <td>
              {{ product.product.title }}
            </td>
            <td>
              {{ product.product.price }} Kč
            </td>
            <td>
              <v-btn icon ripple @click="decreaseQuant(product.product.id)">
                <v-icon>mdi-minus-circle-outline</v-icon>
              </v-btn>
              {{ product.quantity }}
              <v-btn icon ripple @click="increaseQuant(product.product.id)">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </v-btn>
            </td>
            <td>
              {{ product.product.price * product.quantity }} Kč
            </td>
            <td>
              <!-- delete item -->
              <v-btn icon ripple @click="removeTest(product.product.id)">
                <v-icon>mdi-close-circle</v-icon></v-btn
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
        
          <v-btn outlined text @click="clearCart" :disabled="cartEmpty">Vymazat košík</v-btn>
       
          <v-btn class="success" @click="checkout" :disabled="cartEmpty"> Potvrdit objednávku </v-btn>
     
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

.cart {
  min-height: 100vh;
}

.cart-list {
  width: 100%;
  border-collapse: collapse;
  padding: 16px;
}

.list--head {
  border-bottom: 3px solid #d4dfe6;
  font-weight: bold;
}

.list--body{
  border-bottom: 2px solid #d4dfe6;
}

th,td {
  height: 60px;
}






</style>
