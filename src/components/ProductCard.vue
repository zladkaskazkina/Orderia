<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      :src="card.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="card.title"></v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">
      {{ card.price }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ card.stock }}</div>

      <div>{{ card.id }}</div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
