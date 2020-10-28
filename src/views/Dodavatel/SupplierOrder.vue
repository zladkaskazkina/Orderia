<template>
  <v-container fluid class="supplier-order">
    <v-card class="pa-4">
      <v-card-title class="justify-center ma-2">
        <h3>Objednávka</h3>
      </v-card-title>

      <v-row no-gutters class="order-num">
        <span>Číslo objednávky: {{ $route.params.id }}</span>
      </v-row>
      <div class="customer-data">
        <v-row no-gutters>
          <span>Odberatel</span>
        </v-row>
        <v-row no-gutters>
          <span>Adresa</span>
        </v-row>
      </div>
      <v-divider></v-divider>

      <div class="order-main">
        <v-data-table
         :headers="headers"
         hide-default-footer
        >
        </v-data-table>

      </div>
      <v-divider></v-divider>
      <div>
        <v-row no-gutters>
          <span>DOPRAVA</span>
        </v-row>
        <v-row no-gutters>
          <!-- propisovat zvoleny typ dopravy -->
          <span>Zvoleny typ dopravy</span>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <span>Celkem</span>
          </v-col>
          <v-col>
            <!-- doplnit soucet vsech polozek -->
            <span>Suma celkem</span>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <span>Doprava</span>
          </v-col>
          <v-col>
            <!-- doplnit suma za dopravu -->
            <span>Suma celkem</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- doplnit celkovy soucet -->
            <span>Total</span>
          </v-col>
          <v-col>
            <span>Suma celkem</span>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-btn flat>PŘIJMOUT OBJEDNÁVKU</v-btn>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SupplierOrder",
  data() {
    return {
      headers: [
        { text: 'Kód produktu',
          align: 'start',
          sortable: true
        },
        { text: 'Název produktu'},
        { text: 'Ks'},
        { text: 'Cena za kus'},
        { text: 'Celkem'},
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.order-num {
  border: solid 1px rgba(0, 0, 0, 0.12);
  padding: 10px;
}
.customer-data {
  border: solid 1px rgba(0, 0, 0, 0.12);
  padding: 10px;
}
</style>
