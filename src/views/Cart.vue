<template>
  <v-container>
    <h3>Objednávka</h3>
    <!-- v-show="!products.length" -->
    <p>Váš košík je prázdný!</p>

    <div> {{ cart }}</div>

    <table class="cart-list">
      <!-- v-show="products.length" -->
      <thead>
        <tr>
          <td>Kód</td>
          <td>Název</td>
          <td>Cena</td>
          <td>Množství</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cart.cart" v-bind:key="product.id">
          <td>
            {{ product.id }}
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            {{ product.price }}
          </td>
          <td>
            <v-text-field outlined number label="Množství">
              <!-- :value="product.quantity" -->
            </v-text-field>
          </td>
          <td>
            <!-- total price per product? -->
          </td>
          <td>
            <!-- delete item -->
            <v-btn icon ripple> <v-icon>mdi-delete</v-icon></v-btn>
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

    <v-btn>
      <!-- v-show="products.length" -->
      <!-- @click="checkout" -->
      Potvrdit objednávku
    </v-btn>
  </v-container>
</template>

<script>
// pri mounted nacteme produkty ze seznamu buyer
//

export default {
  name: "Cart",
  components: {},
  props: [""],
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
  mounted() {},
  methods: {
    // checkout() {
    //   alert('Celková částka k zaplacení je CZK' + this.total)
    // }
  }
};
</script>

<style lang="scss" scoped></style>
