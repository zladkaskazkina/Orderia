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
  name: "ObchodSidebar",
  data() {
    return {
      links: [
        { icon: "dashboard", text: "Hlavni", route: "/hlavni" },
        { icon: "dashboard", text: "Hlavni", route: "/hlavni" },
        { icon: "dashboard", text: "Hlavni", route: "/hlavni" },
        { icon: "dashboard", text: "Hlavni", route: "/hlavni" },
      ],
    };
  },
};
</script>
