<template>
  <v-content class="fill-height mainPage">
    <MainNavbar />

    <router-view />

    <Footer />
  </v-content>
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
