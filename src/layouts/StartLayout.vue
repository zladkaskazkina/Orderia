<template>
  <div class="mainPage">
    <MainNavbar />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </div>
</template>
<script>
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

export default {
  name: "StartLayout",
  components: {
    MainNavbar,
    Footer,
  },
};
</script>
