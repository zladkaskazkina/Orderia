<template>
  <v-container fluid class="supplier-order">
    <v-card class="px-4 py-6" id="printMe">
      <v-card-title class="justify-left">
        <h3>Objednávka č. {{ $route.params.id }}</h3>
      </v-card-title>
      <v-btn @click="print" absolute top right class="success"><v-icon>mdi-printer</v-icon></v-btn>
      <!-- propisovat pres props?? nechybi jeste jedna komponenta?? -->
      <v-row no-gutters class="pa-5 ma-5 border">
        <v-col cols="7">
          <p class="shop-name">Rohlik CZ</p>
          <p class="font-weight-medium">Kontakt:</p>
          <p>partneri@rohlik.cz</p>
          <p>+420 800 730 740</p>
        </v-col>
        <v-col>
          <p class="font-weight-medium">Datum objednávky:</p>
          <p>21. 10. 2020</p>
          <p class="font-weight-medium">Dodání do:</p>
          <p>31. 10. 2020</p>
        </v-col>
      </v-row>

      <v-row no-gutters class="pa-5 ma-5 border">
        <v-col cols="7">
          <p class="font-weight-medium">Fakturační adresa:</p>
          <p>Velká Pecka s.r.o.</p>
          <p>Sokolovská 100/94</p>
          <p>186 00 Praha 8 – Karlín</p>
          <p>IČO: 03024130</p>
          <p>DIČ: CZ03024130</p>
        </v-col>
        <v-col>
          <p class="font-weight-medium">Dodací adresa:</p>
          <p>Velká Pecka s.r.o.</p>
          <p>Sokolovská 100/94</p>
          <p>186 00 Praha 8 – Karlín</p>
          <br>
          <span class="font-weight-medium">Zpusob platby:</span> <span>prevodem</span>
        </v-col>
      </v-row>
      <v-row no-gutters class="px-9 pt-5">
      <h3>Souhrn objednavky:</h3>
      </v-row>

      <div class="order-main py-6 px-4">
        <v-data-table
          :headers="headers"
          :items="orderedProducts"
          item-key="id"
          hide-default-footer
          show-select
        >
        <!--  
          <template #item.totalPrice="{item}">
            {{ item.price * item.quantity }}
          </template>
          -->

          <template slot="body.append">
            <tr>
              <th></th>
              <th>Celkem</th>
              <th></th>
              <th>{{ sumField("quantity") }}</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td></td>
              <td>Doprava</td>
              <td>PPL</td>
              <td>1</td>
              <td>150</td>
              <td>150</td>
            </tr>
            <tr class="primary">
              <th></th>
              <th>Celkem k platbe</th>
              <th></th>
            </tr>
          </template>
        </v-data-table>
        
      </div>
      <v-row no-gutters justify="end" class="pa-4">
        <v-btn color="error">PŘIJMOUT OBJEDNÁVKU</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SupplierOrder",
  data() {
    return {
      headers: [
        { text: "Kód produktu", align: "start", sortable: true, value: "id" },
        { text: "Název produktu", value: "productName" },
        { text: "Ks", value: "quantity" },
        { text: "Cena za kus", value: "price" },
        { text: "Cena s DPH", value: "" },
        { text: "Celkem", value: "totalPrice" }
      ],
      orderedProducts: [
        {
          id: "2511",
          productName: "Banana",
          quantity: 3,
          price: 15
        },
        {
          id: "2548",
          productName: "Strawberry",
          quantity: 4,
          price: 10
        },
        {
          id: "1511",
          productName: "Grapes",
          quantity: 1,
          price: 30
        },
        {
          id: "1485",
          productName: "Orange",
          quantity: 7,
          price: 25
        }
      ]
    };
  },
  computed: {},

  methods: {
    sumField(key) {
      // sum data in give key (property)
      return this.orderedProducts.reduce((a, b) => a + (b[key] || 0), 0);
    },
    print () {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    }
  }
};
</script>

<style lang="scss" scoped>
.shop-name {
  font-weight: bold;
  font-size: 20px;
}
.border {
  border: solid 2px #d4dfe6;
}

p {
  margin: 0;
  padding: 0;
}
</style>
