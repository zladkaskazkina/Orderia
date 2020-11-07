<template>
  <nav>
    <v-toolbar app class="main-bar">
      <v-row>
        <v-col cols="2"> </v-col>
        <v-col class="d-flex justify-space-around">
          <v-toolbar-title
            @click="$router.push('/')"
            style="cursor:pointer"
            class="headline text-uppercase error--text"
          >
            Orderia
          </v-toolbar-title>
        </v-col>
        <v-col class="d-flex">
          <v-btn
            dark
            color="#082940"
            class="mr-5 pa-4 login-btn"
            router
            to="/login"
          >
            Přihlásit se
          </v-btn>
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
                <router-link to="/dodavatel">
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
      </v-row>
    </v-toolbar>
  </nav>
</template>
<style scoped>
.brand {
  color: #39b982;
  text-decoration: none;
}
</style>
<script>
//import UserService from '../services/user.service';
export default {
  name: "MainNavbar",
  data() {
    return {
      menu: false
    };
  }
  // mounted() {
  //   UserService.getUserMenu().then(
  //     response => {
  //       this.menu = response.data;
  //     },
  //   error => {
  //         this.menu =
  //           (error.response && error.response.data) ||
  //           error.message ||
  //           error.toString();
  //         }
  // )
  // }
};
</script>
<style lang="scss" scoped>
.main-bar {
  z-index: 1;
}

.login-btn {
  border-radius: 1px;
}
</style>
