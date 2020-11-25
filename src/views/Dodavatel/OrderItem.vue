<template>
  <v-container fluid class="supplier-order">
    <v-card class="px-4 py-6" id="printMe">
      <v-card-title class="justify-left">
        <h3>Objednávka č. {{ this.id }} </h3>
      </v-card-title>
      <v-row no-gutters class="px-5">
      <p v-if="orderCopy"> status: {{orderCopy.status}} </p>
      </v-row>

      <v-btn @click="print" absolute top right class="success"
        ><v-icon>mdi-printer</v-icon></v-btn
      >

      <div v-if="orderCopy && customer">
        <v-row no-gutters class="pa-5 ma-5 border">
          <v-col cols="7">
            <p class="shop-name">{{ customer.companyName }}</p>
            <p class="font-weight-medium">Kontakt:</p>
            <p>{{ customer.email }}</p>
            <p>{{ customer.phone }}</p>
          </v-col>
          <v-col>
            <p class="font-weight-medium">Vytvorena:</p>
            <p>{{ orderCopy.createdAt }}</p>
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
            <p>{{ customer.companyName }}</p>
            <p>{{ customer.address.street }} {{ customer.address.number }}</p>
            <p>
              {{ customer.address.postaleCode }} {{ customer.address.city }}
            </p>
            <br />
            <span class="font-weight-medium">Zpusob platby:</span>
            <span>{{ orderCopy.payment_method }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters class="px-9 pt-5">
          <h3>Souhrn objednavky:</h3>
        </v-row>

        <div class="order-main py-6 px-4">
          <v-data-table
            :headers="headers"
            :items="orderCopy.items"
            item-key="id"
            hide-default-footer
            show-select
          >
            <template slot="body.append">
              <tr>
                <th></th>
                <th>Celkem</th>
                <th></th>
                <th></th>
                <th></th>
                <th>{{ orderCopy.total_price - orderCopy.transport_price }} Kč</th>
              </tr>
              <tr>
                <td></td>
                <td>Doprava</td>
                <td>PPL</td>
                <td>1</td>
                <td>{{ orderCopy.transport_price }} Kč</td>
                <td>{{ orderCopy.transport_price }} Kč</td>
              </tr>
              <tr class="primary">
                <th></th>
                <th>Celkem k platbe</th>
                <th></th>
                <th></th>
                <th></th>
                <th>{{ orderCopy.total_price }} Kč</th>
                <th v-if="currentUser.role === 'producer'">
                  <v-btn color="error" @click="confirmChanges">
                    ULOŽ ZMĚNY
                  </v-btn>
                </th>
              </tr>
            </template>

            <template v-slot:[`item.item_total`]="{ item }">
              {{ item.price * item.quantity }}
            </template>

            <template v-if="currentUser.role === 'producer'" v-slot:[`item.modifier`]="{ item }">
              <v-text-field type="number" v-model.number="item.newQuantity" :rules="[rules.nonnegative]"></v-text-field>
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
          ZRUŠIT OBJEDNÁVKU
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
      headers: this.$store.state.users.loggedUser.role==="producer"?[
        { text: "Kód produktu", align: "start", sortable: true, value: "id" },
        { text: "Název produktu", value: "title" },
        { text: "Ks", value: "quantity" },
        { text: "Cena za kus", value: "price" },
        { text: "Celkem", value: "item_total" }, //price x quantity
        { text: "Upravit množství", value: "modifier" },
      ]:[
        { text: "Kód produktu", align: "start", sortable: true, value: "id" },
        { text: "Název produktu", value: "title" },
        { text: "Ks", value: "quantity" },
        { text: "Cena za kus", value: "price" },
        { text: "Celkem", value: "item_total" }, //price x quantity
      ],
      rules: {
          nonnegative: (value) => (value >= 0 || typeof value === "undefined")?true:"Musi byt nezaporne."
      },
      orderCopy: null,
    };
  },
  computed: {
    //   //  console.log(
    //   //    "tento",
    //   //    this.$store.state[`${this.currentUser.role}Orders`].order
    //   //  );
    // },
    customer() {
      // console.log("computed", this.$store.state.users);
      return this.$store.state.users.user;
    },

    // producer() {
    //   return this.$store.state.users.user; //???? jak zobrazit ten  konkretni
    // }
  },

  methods: {
    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
    },
    acceptOrder() {
      this.$store.dispatch(
        `${this.currentUser.role}Orders/acceptOrder`,
        this.id
      );
      //  console.log(this.id);
    },
    rejectOrder() {
      this.$store.dispatch(
        `${this.currentUser.role}Orders/rejectOrder`,
        this.id
      );
    },
    deleteOrder() {
      if(this.$store.state.buyerOrders.order.status === "čeká na schválení")
      {
      this.$store.dispatch(
        `${this.currentUser.role}Orders/deleteOrder`,
        this.id
      );
      }
      else
      {
        alert("Objednávku již nelze zrušit.");
      }
    },
    confirmChanges() {
      let newProductTotal = 0;
      for(let iItem = 0; iItem < this.orderCopy.items.length; iItem++)
      {
        if(typeof this.orderCopy.items[iItem].newQuantity !== "undefined")
        {
          this.orderCopy.items[iItem].quantity = this.orderCopy.items[iItem].newQuantity;
          delete this.orderCopy.items[iItem].newQuantity;
        }
        newProductTotal += this.orderCopy.items[iItem].quantity * this.orderCopy.items[iItem].price;
      }
      this.orderCopy.total_price = newProductTotal + this.orderCopy.transport_price;
      this.$store.dispatch(`${this.currentUser.role}Orders/changeOrder`, this.orderCopy);
    },

 

    // changeQuantity(item) {
    //   this.$store.dispatch(`${this.currentUser.role}Orders/changeQuantity`, item);
    // }
  },
     mounted() {
    // nt console.log(this.currentUser);
    this.$store
      .dispatch(`${this.currentUser.role}Orders/getOrder`, this.id)
      .then(() => {
        this.orderCopy = deepCopy(this.$store.state[`${this.currentUser.role}Orders`].order)
      });
    // this.$store.dispatch("user/getUser", this.order.producerID);
    }
};

function deepCopy(value) {
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      let values = [];
      for (const element of value) {
        values.push(deepCopy(element));
      }
      return values;
    } else {
      let objCopy = {};
      for (const key in value) {
        objCopy[key] = deepCopy(value[key]);
      }
      return objCopy;
    }
  } else {
    return value;
  }
}
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
