<template>
  <div>
    <v-col>
      <v-card class="mx-auto" max-width="400" @click="clickIt">
        <v-img
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
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
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  props: ["productData"],
  data() {
    return {};
  },
  methods: {
    clickIt() {
      this.$emit("openIt", this.productData.id);
      console.log(this.productData.id);
    }
  }
};
//              :to="{ name: 'ProductItem', params: { id: productData.id } }"
</script>
