<template>
  <nav>
    <v-toolbar app class="main-bar">
      <v-btn color="primary" class="ml-5 pa-5 darken-2" router to="/login">
        Přihlásit se <br />
        jako odběratel
      </v-btn>
      <v-spacer></v-spacer>

      <v-toolbar-title
        @click="$router.push('/')"
        style="cursor:pointer"
        class="headline text-uppercase error--text"
      >
        Orderia
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn color="secondary" class="mr-5 darken-2 pa-5" router to="/login">
        Přihlásit se <br />
        jako dodavatel
      </v-btn>
    </v-toolbar>
  </nav>
</template>
<style scoped>
.brand {
  color: #39b982;
  text-decoration: none;
}
</style>
<script>
export default {
  name: "MainNavbar",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.main-bar {
  z-index: 1;
}
</style>
