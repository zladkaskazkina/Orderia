<template>
  <div>
    <v-card flat class="ma-10" min-height="100vh">
      <v-card-title>
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="black"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="API"
          label="Hledat dle jmena"
          placeholder="Zaznete psat jmeno"
          prepend-icon="mdi-database-search"
          return-object
        ></v-autocomplete>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="orders"
        :items-per-page="15"
        class="elevation-1 ma-5"
        single-expand
        :search="search"
        @click:row="openOrder"
      >
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Objednavky",
  props: [""],
  data() {
    return {
      search: "",
      model: null,
      currentUser: this.$store.state.users.loggedUser,
      entries: [],
      isLoading: false,
      headers: [
        {
          text: "Faktura",
          align: "start",
          sortable: true,
          value: "id"
        },
        { text: "ID", value: "id" },
        { text: "Datum", value: "createdAt" },
        { text: "Odberatel", value: "buyerID" }, //jen pro dodavatele
        { text: "Hodnota", value: "total_price" },
        { text: "Status", value: "status" }
      ]
    };
  },
  methods: {
    openOrder(event) {
      // this.$router.push({ name: "objednavky", params: { id } }); // -> /user/123
      // this.$router.push({ path: `/dodavatel/objednavky/${id}` });
      this.$router.push({
        name: "OrderItem",
        params: { id: event.id }
      });
      console.log(event.id + " is clicked");
    }
  },
  computed: {
    orders() {
      return this.$store.state[`${this.currentUser.role}Orders`].orders;
    },
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || "n/a"
        };
      });
    },
    items() {
      return this.entries.map(entry => {
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + "..."
            : entry.Description;

        return Object.assign({}, entry, { Description });
      });
    }
  },

  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      // fetch("https://orderia/api/orders")
      //   .then(res => res.json())
      //   .then(res => {
      //     const { count, entries } = res;
      //     this.count = count;
      //     this.entries = entries;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })
      //   .finally(() => (this.isLoading = false));
    }
  },
  mounted() {
    this.$store.dispatch(`${this.currentUser.role}Orders/getOrders`);
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
