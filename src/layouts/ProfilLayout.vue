<template>
  <v-main>
    <Sidebar />
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
      <v-col class="d-flex justify-end">
          <v-menu
            bottom
            offset-y
            v-bind:close-on-content-click="false"
            v-model="menu"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed color="transparent" v-bind="attrs" v-on="on">
                <v-icon x-large class="ikona-user" color="black"
                  >mdi-account-circle</v-icon
                >
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <router-link to="/profil">
                  <v-btn class="my-2" v-on:click="menu = false">
                    Profil
                  </v-btn>
                </router-link>
              </v-list-item>
              <v-list-item>
                <v-btn>
                  Odhlásit
                </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      
    </v-app-bar>

    <router-view />

    <Footer />
  </v-main>
</template>
<script>
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default {
  name: "StartLayout",
  components: {
    Sidebar,
    Footer
  },
  data() {
    return {
      role: "dodavatel",
      menu: false,
    };
  }
};
</script>
