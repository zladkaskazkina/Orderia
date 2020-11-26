<template>
  <v-container class="edit-product">
    <v-card class="ma-10 pa-10">
      <v-img
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        width="300px"
      ></v-img>
      <v-card-text>
        <v-text-field v-model="productProxy.name" outlined></v-text-field>
        <v-text-field v-model="productProxy.price" outlined></v-text-field>
        <v-text-field
          v-model="productProxy.description"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="productProxy.ingredients"
          outlined
        ></v-text-field>
      </v-card-text>
      <v-btn @click="editProduct"> Ulozit upravy </v-btn>
    </v-card>
    
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProductItem",
  props: ["", ""],
  data() {
    return {
      productId: this.$route.params.id,
      currentUser: this.$store.state.users.loggedUser,
      // productName: this.product.title,
      // productDescript: this.product.description,
      // productPrice: this.product.price,
      productProxy: {
        name: "",
        description: "",
        price: "",
        ingredients: ""
      }
    };
  },
  computed: {
    product() {
      return this.$store.state[`${this.currentUser.role}Products`].product;
    }
  },
  created() {
    let productId = this.$route.params.id;
    this.$store
      .dispatch(`${this.currentUser.role}Products/getProduct`, productId)
      .then(() => {
        let thisProduct = this.$store.state.producerProducts.product;
        this.productProxy.name = thisProduct.title;
        this.productProxy.price = thisProduct.price;
        this.productProxy.description = thisProduct.description;
        this.productProxy.ingredients = thisProduct.ingredients;
      });
  },
  mounted() {
    //
  },
  methods: {
    editProduct() {
      const params = {
        id: this.productId,
        title: this.productProxy.name,
        description: this.productProxy.description,
        price: this.productProxy.price,
        ingredients: this.productProxy.ingredients
      };
      this.$store.dispatch(`producerProducts/editProduct`, params);
    }
  }
};
</script>
<style lang="scss" scoped>
.edit-product {
  min-height: 100vh;
}
</style>
