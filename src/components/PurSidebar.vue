<template>
  <v-navigation-drawer app clipped>
    <v-list>
      <v-list-tile
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
      >
        <v-list-tile-action>
          <v-con>
            {{ link.icon }}
          </v-con>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ link.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  name: "ObchodBar",
  data() {
    return {
      links: [
        { text: "Hlavni", route: "/odberatel" },
        { text: "Muj profil", route: "/odberatel/profil" },
        { text: "Objednavky", route: "/odberatel/objednavky" },
        { text: "Sortiment", route: "/odberatel/sortiment" },
        { text: "Partneři", route: "/odberatel/partneri" },
        { text: "Statistiky", route: "/odberatel/statistiky" },
        { text: "Reklamace", route: "/odberatel/reklamace" },
      ],
    };
  },
};
</script>
