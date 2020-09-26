<template>
  <!-- Pro vyrobce -->
  <v-app>
    <v-card
      width="600px"
      class="mx-auto mt-5 mb-5"
      id="registration"
      @submit.prevent="submitForm"
    >
      <v-card-title>
        <h2>Přidejte se k nám</h2>
      </v-card-title>
      <v-card-text>
        <h3>
          Pokud chcete prodávat přes Orderii,
          <br />vytvořte si zde jednoduše svůj profil
        </h3>
        <v-form>
          <v-text-field
            v-model.trim="userBrand"
            label="Název firmy"
          ></v-text-field>
          <v-text-field v-model.number="userID" label="IČO"></v-text-field>

          <v-select
            v-model="category"
            :items="items"
            label="Kategorie zboží"
            required
          ></v-select>

          <v-text-field label="Webové stránky"></v-text-field>
          <v-text-field label="Kontaktní osoba"></v-text-field>
          <v-text-field label="Telefonní číslo"></v-text-field>
          <v-text-field v-model="userEmail" label="E-mail"></v-text-field>
          <v-text-field label="Heslo"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="info">Registrovat se</v-btn>
        <v-spacer></v-spacer>
        <v-btn outlined x-small color="info">Přihlásit se</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Registration",
  data() {
    return {
      userBrand: "",
      userID: null,
      category: "food",
      userEmail: "",
      items: ["Jídlo", "Drogerie", "Hračky", "Item 4"],
    };
  },
  methods: {
    submitForm() {
      console.log(this.userBrand);
    },
  },
};
</script>

<style lang="scss"></style>
