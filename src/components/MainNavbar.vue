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
