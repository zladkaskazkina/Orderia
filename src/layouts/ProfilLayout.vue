<template>
  <v-main>
    <SupSidebar v-if="role === 'dodavatel'" />
    <PurSidebar v-else-if="role === 'odberatel'" />
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
import PurSidebar from "../components/PurSidebar";

export default {
  name: "StartLayout",
  components: {
    SupSidebar,
    PurSidebar,
    Footer
  },
  data() {
    return {
      role: "dodavatel"
    };
  }
};
</script>
