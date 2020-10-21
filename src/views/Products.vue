<template>
  <div>
    <v-fab-transition>
      <v-btn
        color="success"
        fab
        large
        light
        top
        right
        class="btn--float"
        router
        to="/test"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
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
// @ is an alias to /src

export default {
  name: "Products",
  data() {
    return {
      fab: false,
      hidden: false,
      tabs: null,
      cards: [
        {
          title: "Rohlik makovy",
          src: "",
          route: "/products/rohlik-makovy",
          price: 3.15,
          stock: 3,
          id: "12345678",
        },
        {
          title: "Rohlik obyc",
          src: "",
          route: "/products/rohlik-obyc",
          price: 3.05,
          stock: 6,
          id: "12345078",
        },
        {
          title: "Rohlik makovy",
          src: "",
          route: "/products/rohlik-makovy",
          price: 3.15,
          stock: 3,
          id: "12345978",
        },
        {
          title: "Rohlik obyc",
          src: "",
          route: "/products/rohlik-obyc",
          price: 3.05,
          stock: 6,
          id: "12345378",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.btn--float {
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  margin: 0 0 16px 16px;
}
</style>
