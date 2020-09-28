<template>
  <v-footer fixed padless app class="info">
    <v-card flat tile class="text-center info">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 error--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-footer>
</template>
<style scoped></style>
<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
