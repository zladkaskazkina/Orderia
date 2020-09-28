<template>
  <div>
    <v-container fluid class="product-form">
      <v-card>
        <v-row>
          <v-col>
            <v-file-input
              label="Fotografie"
              icon="mdi-camera"
              name="productPhoto"
              outlined
            ></v-file-input>
          </v-col>
          <v-col>
            <v-row>
              <v-text-field label="Název" outlined></v-text-field>
            </v-row>
            <v-row>
              <v-textarea label="Popis" outlined counter="300"></v-textarea>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
            <v-col>
        <v-select :items="stock" label="Dostupnost" outlined></v-select>
        <v-text-field label="Skladové zásoby" outlined></v-text-field>
            </v-col>
            <v-col>
        <v-textarea label="Složení" outlined></v-textarea>
            </v-col>
        </v-row>
        <v-text-field label="Objem" outlined></v-text-field>
        <v-select :items="units" label="Jednotka" outlined></v-select>
        <span>Cena</span>
        <v-text-field label="Základní cena" outlined></v-text-field>
        <v-text-field label="Cena VIP partnera" outlined></v-text-field>
        <v-text-field label="Individuální cena" outlined></v-text-field>
        <v-select :items="vat" label="DPH" outlined></v-select>
        <v-text-field label="Doporučená cena" outlined></v-text-field>
        <v-sheet outlined>
          <span>Alergeny</span>
          <v-checkbox label="1"></v-checkbox>
          <v-checkbox label="2"></v-checkbox>
          <v-checkbox label="3"></v-checkbox>
          <v-checkbox label="4"></v-checkbox>
          <v-checkbox label="5"></v-checkbox>
          <v-checkbox label="6"></v-checkbox>
          <v-checkbox label="7"></v-checkbox>
          <v-checkbox label="8"></v-checkbox>
          <v-checkbox label="9"></v-checkbox>
          <v-checkbox label="10"></v-checkbox>
          <v-checkbox label="11"></v-checkbox>
          <v-checkbox label="12"></v-checkbox>
          <v-checkbox label="13"></v-checkbox>
          <v-checkbox label="14"></v-checkbox>
        </v-sheet>
        <v-select
          :items="productCategories"
          label="Kategorie"
          multiple
          outlined
        ></v-select>
        <v-text-field label="Čárový kód" outlined></v-text-field>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stock: ["Skladem", "Nedostupné", "Vyprodáno"],
      units: ["ks", "g", "kg", "ml", "l"],
      vat: ["15%", "21%", "10%", "bez DPH"],
      productCategories: ["trvanlivé", "mléčné", "maso"]
    };
  }
};
</script>


<style lang="scss" scoped>
</style>