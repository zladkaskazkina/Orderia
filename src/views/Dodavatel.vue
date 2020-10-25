<template>
  <div>
    <v-container fluid>
      <h1>Dashboard</h1>
      <div class="display-1 font-weight-thin">
        Objednavky po mesicich
      </div>
      <v-sparkline
        :fill="fill"
        line-width="2"
        padding="4"
        :smooth="radius || false"
        :value="value"
        auto-draw
      >
        <template v-slot:label="item"> ${{ item.value }} </template>
      </v-sparkline>
    </v-container>
    <v-row>
      <v-col cols="6">
        <v-card flat tile class="mx-5 pa-5 success">
          <v-card-title>Posledni objednavky</v-card-title>
          <v-card class="mb-5">
            <v-card-title class="headline">
              Nazev firmy
            </v-card-title>
            <v-card-subtitle>Cislo objednavky</v-card-subtitle>
          </v-card>
          <v-card class="mb-5">
            <v-card-title class="headline">
              Nazev firmy
            </v-card-title>
            <v-card-subtitle>Cislo objednavky</v-card-subtitle>
          </v-card>
          <v-card class="mb-5">
            <v-card-title class="headline">
              Nazev firmy
            </v-card-title>
            <v-card-subtitle>Cislo objednavky</v-card-subtitle>
          </v-card>
          <v-btn class="ma-2" outlined color="indigo"> Vice </v-btn>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card flat tile class="mx-5 pa-5 success">
          <v-card-title>Nevyrizene objednavky</v-card-title>
          <v-card class="mb-5">
            <v-card-title class="headline">
              Nazev firmy
            </v-card-title>
            <v-card-subtitle>Cislo objednavky</v-card-subtitle>
          </v-card>
          <v-card class="mb-5">
            <v-card-title class="headline">
              Nazev firmy
            </v-card-title>
            <v-card-subtitle>Cislo objednavky</v-card-subtitle>
          </v-card>
          <v-card class="mb-5">
            <v-card-title class="headline">
              Nazev firmy
            </v-card-title>
            <v-card-subtitle>Cislo objednavky</v-card-subtitle>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Dodavatel",
  components: {},
  data: () => ({
    fill: true,
    padding: 8,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2
  })
};
</script>
