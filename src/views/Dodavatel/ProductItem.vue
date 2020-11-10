<template>
  <div>
    <v-card v-if="product" class="mx-auto my-10 pa-10" max-width="600">
      <v-img
        :src="product.image"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      ></v-img>
      <v-card-title> {{ product.title }} </v-card-title>
      <v-card-subtitle class="pb-0"> {{ product.price }} Kč </v-card-subtitle>
      <v-card-text>
        <div>{{ product.description }}</div>
        <div>Slozeni: {{ product.ingredients }}</div>
      </v-card-text>
      <v-btn fab absolute bottom right large @click="goToEditor"
        ><v-icon>mdi-pencil</v-icon></v-btn
      >
    </v-card>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProductItem",
  props: ["id", ""],
  data() {
    return {
      currentUser: this.$store.state.users.loggedUser
    };
  },
  computed: {
    product() {
      return this.$store.state[`${this.currentUser.role}Products`].product;
    }
  },
  mounted() {
    this.$store.dispatch(
      `${this.currentUser.role}Products/getProduct`,
      this.id
    );
  },
  methods: {
    goToEditor() {
      this.$router.push({
        name: "EditProduct",
        params: { id: this.id }
      });
    }
    // editace produktu -  presmerovani na novou stranku?
  }
};
</script>
