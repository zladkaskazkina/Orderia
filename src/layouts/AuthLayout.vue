<template>
  <div class="nav">
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link to="/" class="brand"> Orderia </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "AuthLayout",
  data() {
    return {};
  },
};
</script>
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
