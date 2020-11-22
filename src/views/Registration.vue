<template>
  <!-- Pro vyrobce -->
  <div>
    <v-card
      width="700px"
      class="mx-auto mt-5 mb-10 pa-10"
      id="registration"
      @submit.prevent="submitForm"
    >
      <v-card-title>
        <h2>Přidejte se k nám</h2>
      </v-card-title>
      <v-card-text>
        <h3>
          Pokud chcete obchodovat přes Orderii,
          <br />vytvořte si zde jednoduše svůj profil
        </h3>
        <v-form>
          <v-text-field
            v-model.trim="companyName"
            label="Název firmy"
          ></v-text-field>
          <v-text-field v-model.number="ico" label="IČO"></v-text-field>
          <v-select
            v-model="role"
            :items="roleItems"
            item-text="text"
            item-value="value"
            label="Jaka je vase hlavni role?"
            required
          ></v-select>
          <v-select
            v-if="role === 'producer'"
            v-model="category"
            :items="categoryItems"
            label="Kategorie zboží"
            required
          ></v-select>
          <v-card-subtitle> <h3>Adresa provozovny</h3></v-card-subtitle>
          <div class="px-5">
            <v-text-field v-model="address.city" label="Mesto"></v-text-field>
            <v-text-field v-model="address.street" label="Ulice"></v-text-field>
            <v-text-field
              v-model="address.number"
              label="Cislo popisne"
            ></v-text-field>
            <v-text-field
              v-model="address.postaleCode"
              label="PSC"
            ></v-text-field>
          </div>
          <v-text-field v-model="web" label="Webové stránky"></v-text-field>
          <v-text-field v-model="name" label="Kontaktní osoba"></v-text-field>
          <v-text-field v-model="phone" label="Telefonní číslo"></v-text-field>
          <v-text-field v-model="email" label="E-mail"></v-text-field>
          <v-text-field
            type="password"
            v-model="password"
            label="Heslo"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="mx-10">
        <v-btn color="success" @click="submitForm">Registrovat se</v-btn>
        <v-spacer></v-spacer>
        <v-btn outlined color="success" router to="/login">Přihlásit se</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Registration",
  data() {
    return {
      companyName: "",
      ico: null,
      category: "",
      role: "",
      web: "",
      name: "",
      phone: "",
      email: "",
      password: "",
      address: {
        city: "",
        street: "",
        number: null,
        postaleCode: null
      },
      dph: false,
      categoryItems: [
        { text: "Trvanlive potraviny", value: "durable" },
        { text: "Pecivo", value: "bakery" },
        { text: "Nápoje", value: "beverages" },
        { text: "Čerstvé potraviny", value: "fresh" },
        { text: "Mlečné výrobky", value: "dairy" },
        { text: "Drogerie", value: "nonfood" }
      ],
      roleItems: [
        { text: "Jsem vyrobce", value: "producer" },
        { text: "Jsem prodejce", value: "buyer" }
      ]
    };
  },
  methods: {
    submitForm() {
      const newUser = {
        id: null,
        companyName: this.companyName,
        ico: this.ico,
        category: this.category,
        role: this.role,
        web: this.web,
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password,
        address: {
          city: this.address.city,
          street: this.address.street,
          number: this.address.number,
          postaleCode: this.address.postaleCode
        },
        dph: this.dph
      };
      this.$store.dispatch("users/addUser", newUser);
      alert("Dekujeme za registraci!");
    }
  }
};
</script>

<style lang="scss"></style>
