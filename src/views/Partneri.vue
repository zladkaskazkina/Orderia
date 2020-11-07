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
        <v-icon>mdi-account-search</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-row class="mx-5">
      <v-col v-for="shop in shops" :key="shop.id" cols="4">
        <v-card class="mx-auto" max-width="400">
          <div class="text-center">
            <v-avatar size="56" class="mt-8">
              <img alt="user" :src="shop.src" />
            </v-avatar>
          </div>

          <v-card-title>{{ shop.name }}</v-card-title>

          <v-card-subtitle class="pb-0">
            {{ shop.address }}
          </v-card-subtitle>

          <v-card-text>
            <div class="my-4 subtitle-1">
              {{ shop.web }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="sendMsg">
              Napsat
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple lighten-2" text @click="sendMsg">
              Objednavky
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Partneri",
  data() {
    return {
      fab: false,
      hidden: false,
      tabs: null,
      shops: [
        {
          name: "Rohlik CZ",
          src:
            "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
          route: "/partner/rohlik-cz",
          address: "Praha",
          type: "on-line",
          email: "rohlik@gmail.com",
          id: "12345678",
          web: "rohlik.cz"
        },
        {
          name: "kosik CZ",
          src:
            "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
          route: "/partner/kosik-cz",
          address: "Brno",
          type: "kamenny obchod",
          email: "kosik@gmail.com",
          id: "12346678",
          web: "kosik.cz"
        },
        {
          name: "slevomat CZ",
          src:
            "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
          route: "/partner/slevomat-cz",
          address: "Praha",
          type: "on-line",
          email: "slevomat@gmail.com",
          id: "12345778",
          web: "slevomat.cz"
        },
        {
          name: "sklizeno CZ",
          src:
            "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
          route: "/partner/sklizeno-cz",
          address: "Praha",
          type: "on-line",
          email: "sklizeno@gmail.com",
          id: "12355678",
          web: "sklizeno.cz"
        }
      ]
    };
  },
  methods: {
    sendMsg() {}
  }
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
