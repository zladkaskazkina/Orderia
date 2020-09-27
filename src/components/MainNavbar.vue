<template>
  <div class="nav">
    <v-toolbar>
      <v-btn flat>
        <router-link class="nav-item" to="/login">Přihlásit se</router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link to="/" class="brand"> Orderia </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <router-link class="nav-item" to="/registrace">
          Registrovat se
        </router-link>
      </v-btn>
      <router-view></router-view>
    </v-toolbar>
  </div>
</template>

<style scoped>
.brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}

.nav-item {
  color: rgba(0, 0, 0, 0.5);
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
