<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            required
            label="E-mail"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            required
            :type="showPassword ? 'text' : 'password'"
            label="Heslo"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-btn outlined x-small color="info">Registrovat se</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Přihlásit se</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  name: "Registration",
  data() {
    return {
      showPassword: false,
      userEmail: "",
      userPassword: null,
      category: "food",
    };
  },
  methods: {
    submitForm() {
      console.log(this.userBrand);
    },
  },
};
</script>
