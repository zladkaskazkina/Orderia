<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="orders"
        :items-per-page="15"
        class="elevation-1 ma-5"
        show-expand
        single-expand
        :search="search"
        @click:row="openOrder"
      >
        <template>
          <!-- v-slot:[`item.actions`]="{ item }" -->
          <v-icon small class="mr-2">
            mdi-pencil
          </v-icon>
          <v-icon small>
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Objednavky",
  props: ["role"],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Faktura",
          align: "start",
          sortable: true,
          value: "id"
        },
        { text: "ID", value: "id" },
        { text: "Datum", value: "created_at" },
        { text: "Odberatel", value: "customerID" }, //jen pro dodavatele
        { text: "Hodnota", value: "total_price" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false }
      ]
    };
  },
  methods: {
    openOrder(event) {
      // this.$router.push({ name: "objednavky", params: { id } }); // -> /user/123
      // this.$router.push({ path: `/dodavatel/objednavky/${id}` });
      this.$router.push({
        name: "OrderItem",
        params: { id: event.id, role: this.role }
      });
      console.log(event.id + " is clicked");
    }
  },
  computed: {
    orders() {
      return this.$store.state[`${this.role}Orders`].orders;
    }
  },
  mounted() {
    this.$store.dispatch(`${this.role}Orders/getOrders`);
  }
};
</script>

<style lang="scss">
.btn--float {
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  margin: 0 0 16px 16px;
}
</style>
