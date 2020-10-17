<template>
  <v-navigation-drawer app permanent clipped>
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
        class="success--text"
      >
        <v-list-item-icon>
          <v-icon>
            {{ link.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> {{ link.text }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  name: "SupSidebar",
  data() {
    return {
      links: [
        { text: "Hlavni", route: "/dodavatel" },
        { text: "Objednavky", route: "/dodavatel/objednavky" },
        { text: "Produkty", route: "/dodavatel/produkty" },
        { text: "Partneři", route: "/dodavatel/partneri" },
        { text: "Statistiky", route: "/dodavatel/statistiky" },
        { text: "Reklamace", route: "/dodavatel/reklamace" },
      ],
    };
  },
};
</script>
