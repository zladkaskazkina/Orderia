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
        @click:row="handleClick"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
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
  name: "OrdersPur",
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
        { text: "Datum", value: "date" },
        { text: "Odberatel", value: "shopName" },
        { text: "Termin dodani", value: "due" },
        { text: "Hodnota", value: "total" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      orders: [
        {
          id: "2110202059",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        },
        {
          id: "2110202859",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        },
        {
          id: "2140202059",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        },
        {
          id: "2100202059",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        },
        {
          id: "2110205059",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        },
        {
          id: "2110235059",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        },
        {
          id: "2125202059",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        },
        {
          id: "2110202399",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        },
        {
          id: "2110402059",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        },
        {
          id: "2112802059",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "vyrizena"
        }
      ]
    };
  },
  methods: {
    handleClick(event) {
      console.log(event.id + " is clicked");
      const id = event.id;
      // this.$router.push({ name: "objednavky", params: { id } }); // -> /user/123
      this.$router.push({ path: `/dodavatel/objednavky/${id}` });
    }
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
