<template>
  <v-container class="fill-height">
    <v-card width="400px" class="mx-auto">
      <v-card-title>
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            prepend-icon="mdi-mail"
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            :error-messages="passwordErrors"
            label="Heslo"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-btn outlined color="success" router to="/registrace"
          >Registrovat se</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn color="success" @click="submitForm" router to="/profil">Přihlásit se</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<style lang="scss" scoped></style>

<script>
import User from "../models/user";
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      category: "food"
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    }
  },
  methods: {
    submitForm() {
      //this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }

      if (this.email && this.password) {
        let user = new User(this.email, this.password);
        this.$store.dispatch("auth/login", user);

        let loggedIn = this.$store.state.auth.status.loggedIn;
        if (loggedIn) {
          this.$router.push("/dashboard");
          console.log("joo");
        } else {
          console.log("nee");
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
label {
  margin: 0;
}
</style>
