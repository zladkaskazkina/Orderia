<template>
  <v-main class="fill-height mainPage">
    <MainNavbar />

    <router-view />

    <Footer />
  </v-main>
</template>
<script>
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

export default {
  name: "StartLayout",
  components: {
    MainNavbar,
    Footer
  }
};
</script>

<style lang="scss" scoped>

</style>
