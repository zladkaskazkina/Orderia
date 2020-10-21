<template>
  <div>
    <ProductItem />
    <v-row class="mx-5">
      <v-col v-for="card in cards" :key="card.id" cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0"> {{ card.price }} Kč </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ card.stock }} ks</div>

            <div>id {{ card.id }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ProductItem from ProductItem;
export default {
  name: Catalog,
  components: {ProductItem},
  props: {},
  data() {
    return {};
  },
};
</script>
