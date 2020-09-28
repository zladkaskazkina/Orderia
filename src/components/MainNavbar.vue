<template>
  <nav>
    <v-toolbar app flat>
      <v-btn flat class="primary" router to="/login">
        Přihlásit se <br />
        <span small>jako odběratel</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="headline text-uppercase success--text"
        router
        to="/"
      >
        Orderia
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="secondary" flat router to="/registrace">
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
