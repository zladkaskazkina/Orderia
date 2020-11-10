<template>
  <div>
    <v-card class="ma-5 pa-10">
      <v-img
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      ></v-img>
      <v-text-field v-model="productProxy.name" outlined></v-text-field>
      <v-text-field v-model="productProxy.price" outlined></v-text-field>

      <v-card-text>
        <v-text-field
          v-model="productProxy.description"
          outlined
        ></v-text-field>
        <v-text-field outlined></v-text-field>
      </v-card-text>
      <v-btn @click="editProduct"> Ulozit upravy </v-btn>
    </v-card>
    <div></div>
  </div>
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
        price: ""
      }
    };
  },
  computed: {
    product() {
      return this.$store.state[`${this.currentUser.role}Products`].product;
    }
  },
  created() {
    console.log(this.currentUser);
    let productId = this.$route.params.id;
    this.$store
      .dispatch(`${this.currentUser.role}Products/getProduct`, productId)
      .then(() => {
        console.log("then");
        let productThat = this.$store.state.producerProducts.product;
        console.log(productThat);
        this.productProxy.name = productThat.title;
        this.productProxy.price = productThat.price;
        this.productProxy.description = productThat.description;
      });
  },
  mounted() {
    //
  },
  methods: {
    editProduct() {
      console.log(this.productProxy);
    }
  }
};
</script>
