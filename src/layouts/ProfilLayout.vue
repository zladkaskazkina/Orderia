<template>
  <v-main>
    <SupSidebar />
    <v-app-bar clipped-left app>
      <v-spacer></v-spacer>
      <v-toolbar-title
        @click="$router.push('/')"
        style="cursor:pointer"
        class="headline text-uppercase success--text"
      >
        Orderia
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <router-view />

    <Footer />
  </v-main>
</template>
<script>
import Footer from "../components/Footer";
import SupSidebar from "../components/SupSidebar";

export default {
  name: "StartLayout",
  components: {
    SupSidebar,
    Footer,
  },
};
</script>
