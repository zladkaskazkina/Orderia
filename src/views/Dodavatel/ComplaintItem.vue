<template>
  <v-container fluid class="supplier-order">
    <v-card class="px-4 py-6" id="printMe">
      <v-card-title class="justify-left">
        <h3>Reklamace č. {{ this.id }}</h3>
      </v-card-title>
      <v-btn @click="print" absolute top right class="success"
        ><v-icon>mdi-printer</v-icon></v-btn
      >
      <!-- propisovat pres props?? nechybi jeste jedna komponenta?? -->
      <div v-if="order">
        <v-row no-gutters class="pa-5 ma-5 border">
          <v-col cols="7">
            <p class="shop-name">{{ customer.companyName }}</p>
            <p class="font-weight-medium">Kontakt:</p>
            <p>partneri@rohlik.cz</p>
            <p>+420 800 730 740</p>
          </v-col>
          <v-col>
            <p class="font-weight-medium">Vytvorena:</p>
            <p>{{ order.createdAt }}</p>
            <p class="font-weight-medium">Dodání do:</p>
            <p>31. 10. 2020</p>
          </v-col>
        </v-row>

        <v-row no-gutters class="pa-5 ma-5 border">
          <!-- <v-col cols="7">
          <p class="font-weight-medium">Fakturační adresa:</p>
          <p>{{ customer.company_name }}</p>
          <p>{{ customer.address.street }} {{ customer.address.number }}</p>
          <p>{{ customer.address.postale_code }} {{ customer.address.city }}</p>
          <p>IČO: {{ customer.ico }}</p>
          <p>DIČ: CZ03024130</p>
        </v-col> -->
          <v-col>
            <p class="font-weight-medium">Dodací adresa:</p>
            <p>Velká Pecka s.r.o.</p>
            <p>Sokolovská 100/94</p>
            <p>186 00 Praha 8 – Karlín</p>
            <br />
            <span class="font-weight-medium">Zpusob platby:</span>
            <span>{{ order.payment_method }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters class="px-9 pt-5">
          <h3>Souhrn objednavky:</h3>
        </v-row>

        <div class="order-main py-6 px-4">
          <v-data-table
            :headers="headers"
            :items="order.items"
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
                <th>{{ order.total_price }}</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td>Doprava</td>
                <td>PPL</td>
                <td>1</td>
                <td>{{ order.transport_price }} Kč</td>
                <td>150</td>
              </tr>
              <tr class="primary">
                <th></th>
                <th>Celkem k platbe</th>
                <th>{{ order.total_price }}</th>
              </tr>
            </template>
          </v-data-table>
        </div>
      </div>
      <v-row no-gutters justify="end" class="pa-4">
        <v-btn
          v-if="currentUser.role === 'producer'"
          outlined
          color="error"
          @click="rejectOrder"
        >
          ODMITNOUT OBJEDNÁVKU
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="currentUser.role === 'producer'"
          color="error"
          v-on:click="acceptOrder"
        >
          PŘIJMOUT OBJEDNÁVKU
        </v-btn>
        <v-btn
          v-if="currentUser.role === 'buyer'"
          color="error"
          @click="deleteOrder"
        >
          ZRISIT OBJEDNÁVKU
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "OrderItem",
  props: ["id"],
  data() {
    return {
      currentUser: this.$store.state.users.loggedUser,
      headers: [
        { text: "Kód produktu", align: "start", sortable: true, value: "id" },
        { text: "Název produktu", value: "title" },
        { text: "Ks", value: "quantity" },
        { text: "Cena za kus", value: "price" },
        { text: "Celkem", value: "total_price" } //price x quantity
      ]
    };
  },
  computed: {
    order() {
      console.log(
        "tento",
        this.$store.state[`${this.currentUser.role}Orders`].order
      );
      return this.$store.state[`${this.currentUser.role}Orders`].order;
    },
    customer() {
      console.log("computed", this.$store.state.users);
      return this.$store.state.users.user;
    }
    // producer() {
    //   return this.$store.state.users.user; //???? jak zobrazit ten  konkretni
    // }
  },
  mounted() {
    console.log(this.currentUser);
    this.$store.dispatch(`${this.currentUser.role}Orders/getOrder`, this.id);
    // this.$store.dispatch("user/getUser", this.order.producerID);
  },

  methods: {
    // sumField(key) {
    //   // sum data in give key (property)
    //   return this.orderedProducts.reduce((a, b) => a + (b[key] || 0), 0);
    // },
    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
    },
    acceptOrder() {
      this.$store.dispatch(
        `${this.currentUser.role}Orders/acceptOrder`,
        this.id
      );
      console.log(this.id);
    },
    rejectOrder() {
      this.$store.dispatch(
        `${this.currentUser.role}Orders/rejectOrder`,
        this.id
      );
    },
    deleteOrder() {
      this.$store.dispatch(
        `${this.currentUser.role}Orders/deleteOrder`,
        this.id
      );
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
