<template>
<<<<<<< Updated upstream
  <v-app>
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </v-app>
=======
  <div id="app">
    <h1>APP</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/registrace">Registrace</router-link>
    <router-link to="/test">Test</router-link>
    <router-view></router-view>
  </div>
>>>>>>> Stashed changes
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
