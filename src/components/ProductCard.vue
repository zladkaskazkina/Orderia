/* eslint-disable */
<template>
  <v-col cols="3">
    <v-card class="mx-auto" max-width="400">
      <div @click="clickIt">
        <v-img
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          max-height="200px"
          :src="productData.image"
        >
          <v-card-title>
            {{ productData.title }}
          </v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">
          {{ productData.price }} Kč
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ productData.description }}</div>

          <div>ID produktu: {{ productData.id }}</div>
          <div>Skladem: {{ productData.stock }} Ks</div>
          <div><strong>Dodavatel: {{ productData.producerID}} </strong></div>
        </v-card-text>
      </div>

      <v-row no-gutters justify="end" class="pa-4">
        <v-col>
        <v-text-field label="Mnozstvi" outlined type="number" v-model.number="quantity"></v-text-field>
        </v-col>
        <v-col class="pl-10">
        <v-btn dark @click="clickToCart"
          ><v-icon small dark>mdi-cart-outline</v-icon></v-btn
        >
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "ProductItem",
  props: ["productData"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    clickIt() {
      this.$emit("openIt", this.productData.id);
      console.log(this.productData.id);
    },

    clickToCart() {
      console.log(this.productData);
      this.$emit("addItem", this.productData, this.quantity);
    }
  }
};
</script>
