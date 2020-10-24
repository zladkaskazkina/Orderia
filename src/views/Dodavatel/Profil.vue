<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title class="justify-center pa-4">
          <h3>
            Muj profil
          </h3>
        </v-card-title>
        <v-row no-gutters justify="center" class="pa-6">
          <v-avatar class="profile" size="164">
            <img src="@/assets/images/user1.png" max-width="100px" alt="" />
          </v-avatar>
        </v-row>
        <v-row no-gutters justify="center" class="pa-6">
          <v-btn>Změnit profilový obrázek</v-btn>
        </v-row>
        <v-row no-gutters class="pa-6 mx-4">
          <v-text-field
            v-model="form.userName"
            label="Název"
            outlined
          ></v-text-field>
        </v-row>
        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <h5>Kontakt</h5>
          </v-col>
        </v-row>
        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <v-text-field
              v-model="form.phoneNumber"
              label="Telefon"
              outlined
            ></v-text-field>
          </v-col>
          <v-col class="mx-4">
            <v-text-field
              v-model="form.contactEmail"
              label="Emailová adresa"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <h5>Fakturační adresa</h5>
          </v-col>
        </v-row>

        <v-row no-gutters class="pa-6 mx-4">
          <v-text-field
            v-model="form.billingAdress.company"
            label="Nazev spolecnosti"
            outlined
          >
          </v-text-field>
        </v-row>
        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <v-text-field
              v-model="form.billingAdress.city"
              label="Mesto"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col class="mx-4">
            <v-text-field
              v-model="form.billingAdress.street"
              label="Ulice"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col class="mx-4">
            <v-text-field
              v-model="form.billingAdress.house"
              label="Cislo popisne"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col class="mx-4">
            <v-text-field
              v-model="form.billingAdress.postalCode"
              label="PSC"
              outlined
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters justify="center" class="pa-6">
          <v-btn color="error" :loading="loading" @click.native="update">
            Ulozit zmeny
          </v-btn>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Profil",

  data() {
    return {
      loading: false,
      form: {
        userName: "Kokos",
        phoneNumber: "+420 545 222 111",
        contactEmail: "john@kokos.com",
        billingAdress: {
          company: "Vse pro kokosy s.r.o.",
          city: "Melounov",
          street: "Kokosova",
          house: 37,
          postalCode: 61500
        }
      }
    };
  }
};
</script>


<style lang="scss" scoped>
</style>