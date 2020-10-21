<template>
  <v-footer fixed padless app class="footer pa-3">
        <v-card flat tile class="text-center mx-auto">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 error--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
    </v-card>
  </v-footer>
</template>
<style scoped></style>
<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-footer {
  background: #ffff !important;
}
</style>
