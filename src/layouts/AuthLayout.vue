<template>
  <v-main class="grey lighten-4">
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-title
        @click="$router.push('/')"
        style="cursor:pointer"
        class="headline text-uppercase success--text"
      >
        Orderia
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view></router-view>
  </v-main>
</template>
<script>
export default {
  name: "AuthLayout",
  data() {
    return {};
  }
};
</script>
<style scoped>
.v-application .headline {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600;
}

.nav-item {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
</style>
