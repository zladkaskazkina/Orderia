<template>
  <v-container fluid class="product-form">

    <v-card class="pa-4">
        <v-card-title class="headline ma-2 error--text">
            Nová reklamace
        </v-card-title>
        <v-row no-gutters class="pa-4 mx-4">
            <v-text-field outlined label="Číslo Vaší objednávky" v-model="form.id">
            </v-text-field>
        </v-row>

        <v-row no-gutters class="pa-4 mx-4">
            <v-textarea
                outlined
                label="Popis problému"
                clearable
                clear-icon="mdi-close-circle"
                v-model="form.description"
            >
            </v-textarea>
        </v-row>

        <v-row no-gutters class="pa-6" justify="center">
            <v-col>
                <div class="dropbox">
                    <multiple-file></multiple-file>
                </div>
            </v-col>
        </v-row>

        <v-row class="pa-6" no-gutters justify="center">
            <v-btn dark @click="saveNewProduct(product)">
                Uložit
            </v-btn>
        </v-row>
    </v-card>

  </v-container>
</template>

<script>
import MultipleFile from "./../../components/MultipleFile.vue";

export default {
  components: {
    MultipleFile: MultipleFile
  },

  data() {
    return {
      product: {
        id: null,
        title: "",
        image: "",
        price: null,
        producerID: "",
        description: "",
        ingredients: "",
        type: "",
        weight: null,
        stock: null
      },

      productCategories: [
        "trvanlive jidlo",
        "mlecne vyrobky",
        "ovoce",
        "zelenina"
      ],
      form: {
        id: "",
        description: ""
      }
    };
  },

  methods: {
    saveNewProduct(product) {
      product.producerID = `${this.$store.state.users.loggedUser.id}`;
      this.$store.dispatch(`producerProducts/createProduct`, product);
      console.log(this.product);
      alert(`Nový produkt ${product.title} byl přidán.`);
      this.$router.push("/produkty");
    }
  }
};
</script>

<style lang="scss" scoped>
.headline {
  justify-content: center;
}

.alergen-box {
  border: thin 1px rgb(118, 118, 118);
}
</style>
