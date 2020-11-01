<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title class="justify-center pa-4">
          <h3>
            Nastaveni profilu
          </h3>
        </v-card-title>
        <v-row no-gutters class="pa-6 mx-4">
          <v-col cols="4" class="text-center">
            <h5 class="py-4">Logo</h5>

            <image-uploader v-model="avatar">
              <div slot="activator">
                <v-avatar
                  size="160px"
                  v-ripple
                  v-if="!avatar"
                  class="grey lighten-3 mb-3"
                >
                  <span>Přidejte logo</span>
                </v-avatar>
                <v-avatar size="160px" v-ripple v-else class="mb-3">
                  <img :src="avatar.imageURL" alt="logo" />
                </v-avatar>
              </div>
            </image-uploader>
            <div v-if="avatar && saved == false">
              <v-btn class="primary" @click="uploadImage" :loading="saving"
                >Uložit</v-btn
              >
            </div>
          </v-col>
          <v-col class="pt-6">
            <v-row no-gutters class="py-4">
              <v-text-field
                v-model="form.userName"
                label="Název"
                outlined
              ></v-text-field>
            </v-row>
            <v-row no-gutters class="pt-4">
              <v-text-field
                v-model="form.shortDescription"
                counter="80"
                label="Kratky popis"
                outlined
              ></v-text-field>
            </v-row>
          </v-col>
        </v-row>

        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <h5>Kontaktni udaje</h5>
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
            <h5>Adresa</h5>
          </v-col>
        </v-row>

        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <v-text-field outlined label="Adresa" v-model="form.adress.city">
            </v-text-field>
          </v-col>
          <v-col class="mx-4">
            <v-text-field outlined label="Ulice" v-model="form.adress.street">
            </v-text-field>
          </v-col>
          <v-col class="mx-4">
            <v-text-field outlined label="Cislo" v-model="form.adress.house">
            </v-text-field>
          </v-col>
          <v-col class="mx-4">
            <v-text-field outlined label="PSC" v-model="form.adress.postalCode">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters class="pa-6 mx-4">
          <v-text-field outlined label="Web" v-model="form.webAdress">
          </v-text-field>
        </v-row>

        <v-row no-gutters class="pa-6 mx-4">
          <v-textarea
            outlined
            label="Dlouhy popis"
            clearable
            clear-icon="mdi-close-circle"
            v-model="form.longDescription"
          >
          </v-textarea>
        </v-row>

        <v-row no-gutters class="pa-6 mx-4">
          <v-combobox
            v-model="selectedCategories"
            :items="category"
            label="Kategorie"
            multiple
            outlined
          ></v-combobox>
        </v-row>

        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <h5>Fakturační údaje</h5>
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

        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <v-text-field v-model="form.crnNumber" label="ICO" outlined>
            </v-text-field>
          </v-col>
          <v-col class="mx-4">
            <v-text-field v-model="form.vatNumber" label="DIC" outlined>
            </v-text-field>
          </v-col>

          <v-col class="mx-4">
            <v-checkbox label="Platce DPH" v-model="form.vat"> </v-checkbox>
          </v-col>

          <v-col class="mx-4">
            <v-text-field
              v-model="form.bankAccount"
              label="Cislo uctu"
              outlined
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <v-text-field
              v-model="form.companyEmail"
              label="Email pro fakturaci"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col class="mx-4">
            <v-text-field v-model="form.companyPhone" label="Telefon" outlined>
            </v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters class="pa-6">
          <v-col class="mx-4">
            <v-row no-gutters>
              <h5>Objednavky</h5>
            </v-row>

            <v-row no-gutters>
              <v-col>
                <v-select
                  outlined
                  label="Mena"
                  :items="form.currency"
                  :menu-props="{ offsetY: true }"
                >
                </v-select>
              </v-col>
              <v-col class="mx-4">
                <v-text-field
                  outlined
                  label="Minimalni objednavka"
                  v-model="form.minOrder"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>

          <v-col class="mx-4">
            <v-row>
              <h5>Moznosti dopravy</h5>
            </v-row>
            <v-row>
              <v-combobox outlined> </v-combobox>
            </v-row>
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
import ImageUploader from "./../../components/ImageUploader.vue";

export default {
  name: "Profil",
  components: {
    ImageUploader: ImageUploader,
  },

  data() {
    return {
      avatar: null,
      saving: false,
      saved: false,
      loading: false,
      form: {
        userName: "Kokos",
        userID: "",
        phoneNumber: "+420 545 222 111",
        contactEmail: "john@kokosovo.com",
        crnNumber: "04519540",
        vatNumber: "CZ04519540",
        vat: true,
        adress: {
          city: "Kokosov",
          street: "Jahodova",
          house: "55/250",
          postalCode: 10100
        },
        billingAdress: {
          company: "Vse pro kokosy s.r.o.",
          city: "Melounov",
          street: "Kokosova",
          house: 37,
          postalCode: 61500
        },
        bankAccount: "254154554/0100",
        companyEmail: "kokosovo@kokosovo.com",
        companyPhone: "+420 601 505 505",
        webAdress: "https://www.kokosovo.com",
        shortDescription: "You think water moves fast? You should see ice.",
        longDescription:
          "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.",
        currency: ["CZK"],
        minOrder: 500
      },
      selectedCategories: [],
      category: ["Trvanlive", "Maso", "Mlecne vyrobky", "Ovoce", "Zelenina"]
    };
  },
    watch:{
    avatar: {
      handler: function() {
        this.saved = false
      },
      deep: true
    }
  },
  methods: {
    uploadImage() {
      this.saving = true
      setTimeout(() => this.savedAvatar(), 1000)
    },
    savedAvatar() {
      this.saving = false
      this.saved = true
    }
  }
};
</script>


<style lang="scss" scoped>
</style>