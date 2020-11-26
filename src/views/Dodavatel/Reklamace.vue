<template>
  <div class="complaints ma-10">
    <v-data-table
      :headers="headers"
      :items="complaints"
      :items-per-page="15"
      class="elevation-1 ma-5"
    >
      <template>
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Reklamace",
  data() {
    return {
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
      complaints: [
        {
          id: "2110202059",
          date: "21.10.2020",
          shopName: "Rohlik",
          due: "21.10.2020",
          total: 4000,
          status: "zamitnuta"
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
  methods: {}
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

.complaints {
  min-height: 100vh;
}
</style>
