<template>
  <v-app class="application">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
</style>
