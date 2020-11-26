<template>
  <v-main>
    <Sidebar />
    <v-app-bar clipped-left app>
      <v-row>
        <v-col></v-col>
        <v-col class="d-flex justify-center">
          <v-toolbar-title
            @click="$router.push('/')"
            style="cursor: pointer"
            class="headline text-uppercase success--text"
          >
            Orderia
          </v-toolbar-title>
        </v-col>
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
                <router-link class="btn-link" to="/profil">
                  <v-btn width="145px" class="my-2 success" v-on:click="menu = false"> Profil </v-btn>
                </router-link>
              </v-list-item>
              <v-list-item>
                <v-btn width="145px" class="success"> Odhlásit </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
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
    Footer,
  },
  data() {
    return {
      role: "dodavatel",
      menu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn-link {
  text-decoration: none;
}

.v-application .headline {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600;
}
</style>
