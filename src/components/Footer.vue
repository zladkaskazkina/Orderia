<template>
  <v-footer padless class="pa-3">
    <div class="footer">
      <v-row no-gutters>
        <v-col>
          <v-list dense flat>
            <v-list-item v-for="link in links" :key="link" text class="my-2 left-menu">
              {{ link }}
            </v-list-item>
          </v-list>
        </v-col>

        <v-col>
          <v-list dense flat>
            <v-list-item class="contacts">
              <v-icon class="px-5">mdi-email</v-icon
              >orderia@orderia.com</v-list-item
            >
            <v-list-item>
              <v-icon class="px-5">mdi-cellphone-android</v-icon>+420 XXX XXX
              XXX</v-list-item
            >
          </v-list>
        </v-col>
        <v-col>
          <v-list dense flat class="right-menu">
            <v-list-item v-for="link in links" :key="link" text class="my-2">
              {{ link }}
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-row no-gutters justify="center">
        <v-card flat tile class="text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 error--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-row>
    </div>
  </v-footer>
</template>
<style scoped></style>
<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      links: ["O nás", "Nejčastější otázky", "Spolupráce"]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-footer {
  background: #ffff !important;
}

.footer {
  width: 100%;
  font-size: 12px;
}

</style>
