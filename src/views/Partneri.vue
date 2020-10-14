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
      <v-col v-for="partner in partners" :key="partner.id" cols="4">
        <v-card class="mx-auto text-center" max-width="400">
          <v-img
            :src="partner.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="partner.title"></v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
            {{ partner.city }}
          </v-card-subtitle>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 subtitle-1">
              on-line supermarket
            </div>

            <div>
              Nakupujte vše, co potřebujete, na jedné stránce
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Pravidelne objednavky</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>Pondeli</v-chip>

              <v-chip>Streda</v-chip>

              <v-chip>Patek</v-chip>

              <v-chip>Sobota</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Napsat
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
      partners: [
        {
          title: "Rohlik CZ",
          src: "",
          route: "/partner/rohlik-cz",
          city: "Praha",
          id: "12345678",
        },
        {
          title: "Kosik CZ",
          src: "",
          route: "/products/kosik-cz",
          city: "Praha",
          id: "12345078",
        },
        {
          title: "Slevomat",
          src: "",
          route: "/products/slevomat",
          city: "Praha",
          id: "12345678",
        },
        {
          title: "La Bohemia",
          src: "",
          route: "/products/la-bohemia",
          city: "Praha",
          id: "12345078",
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
