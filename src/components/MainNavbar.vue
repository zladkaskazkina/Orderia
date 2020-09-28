<template>
  <nav>
    <v-toolbar app flat>
      <v-btn flat router to="/login">
        Přihlásit se
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" class="brand"> Orderia </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat router to="/registrace">
        Registrovat se
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
