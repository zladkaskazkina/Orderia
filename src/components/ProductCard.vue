<template>
  <div>
    <v-col>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title>
            <router-link
              :to="{ name: 'product', params: { id: productData.id } }"
            >
              {{ productData.title }}
            </router-link>
          </v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">
          {{ productData.price }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ productData.available }}</div>

          <div>{{ productData.id }}</div>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>
