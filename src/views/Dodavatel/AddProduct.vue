<template>
  <v-container fluid class="product-form">
    <v-card class="pa-4">
      <v-card-title class="headline ma-2 error--text">
        <h3>Nový produkt</h3>
      </v-card-title>
      <v-row no-gutters class="ma-2" style="height: 300px">
        <v-col>
          <div class="dropbox">
            <multiple-file></multiple-file>
          </div>
        </v-col>
        <v-col offset-md="1">
          <v-row no-gutters class="mr-2">
            <v-text-field
              label="Název"
              outlined
              v-model="product.title"
            ></v-text-field>
          </v-row>
          <v-row no-gutters class="mr-2">
            <v-textarea
              label="Popis"
              outlined
              counter="300"
              v-model="product.description"
            ></v-textarea>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters class="ma-2">
        <v-col>
          <!-- <v-select :items="stock" label="Dostupnost" outlined></v-select> -->
          <v-text-field
            label="Skladové zásoby"
            outlined
            v-model.number="product.stock"
          ></v-text-field>
          <v-text-field
            label="ProducerId"
            outlined
            v-model.number="product.producerID"
          ></v-text-field>
        </v-col>

        <v-col offset-md="1" class="mr-2">
          <v-row no-gutters>
            <v-textarea
              label="Složení"
              outlined
              v-model="product.ingredients"
            ></v-textarea>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-text-field
                label="Vaha"
                outlined
                v-model.number="product.weight"
              ></v-text-field>
            </v-col>
            <!-- <v-col md="3" class="ml-4">
              <v-select :items="units" label="Jednotka" outlined></v-select>
            </v-col> -->
          </v-row>
        </v-col>
      </v-row>

      <v-row no-gutters class="ma-2">
        <v-col>
          <span class="font-weight-medium">Cena</span>
          <v-text-field
            label="Základní cena"
            outlined
            v-model.number="product.price"
          ></v-text-field>
          <!-- <v-text-field label="Cena VIP partnera" outlined></v-text-field>
          <v-text-field label="Individuální cena" outlined></v-text-field> -->
          <!-- <v-select :items="vat" label="DPH" outlined></v-select> -->
          <!-- <v-text-field label="Doporučená cena" outlined></v-text-field> -->
        </v-col>

        <v-col offset-md="1" class="mr-2">
          <!-- <span class="font-weight-medium">Alergeny</span>
          <v-sheet outlined rounded class="px-4 alergen-box">
            <v-row no-gutters>
              <v-col>
                <v-checkbox label="1"></v-checkbox>
                <v-checkbox label="2"></v-checkbox>
                <v-checkbox label="3"></v-checkbox>
                <v-checkbox label="4"></v-checkbox>
                <v-checkbox label="5"></v-checkbox>
                <v-checkbox label="6"></v-checkbox>
                <v-checkbox label="7"></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox label="8"></v-checkbox>
                <v-checkbox label="9"></v-checkbox>
                <v-checkbox label="10"></v-checkbox>
                <v-checkbox label="11"></v-checkbox>
                <v-checkbox label="12"></v-checkbox>
                <v-checkbox label="13"></v-checkbox>
                <v-checkbox label="14"></v-checkbox>
              </v-col>
            </v-row>
          </v-sheet> -->

          <div class="my-8">
            <v-select
              :items="productCategories"
              label="Kategorie"
              outlined
              v-model="product.type"
            ></v-select>
            <!-- <v-text-field label="Čárový kód" outlined></v-text-field> -->
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters justify="center">
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

      // stock: ["Skladem", "Nedostupné", "Vyprodáno"],
      // units: ["ks", "g", "kg", "ml", "l"],
      // vat: ["15%", "21%", "10%", "bez DPH"],
      productCategories: [
        "trvanlive jidlo",
        "mlecne vyrobky",
        "ovoce",
        "zelenina"
      ]
    };
  },

  methods: {
    saveNewProduct(product) {
      
      this.$store.dispatch(`producerProducts/createProduct`, product)
      console.log(this.product);
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
