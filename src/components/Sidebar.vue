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
  name: "Sidebar",
  data() {
    return {
      links: [
        { text: "Hlavni", route: "/odberatel" },
        { text: "Muj profil", route: "/profil" },
        { text: "Objednavky", route: "/objednavky" },
        { text: "Produkty", route: "/produkty" },
        { text: "Partneři", route: "/partneri" },
        { text: "Statistiky", route: "/statistiky" },
        { text: "Reklamace", route: "/reklamace" }
      ]
    };
  }
};
</script>
