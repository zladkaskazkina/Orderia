<template>
  <div class="statistiky">
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
  </div>
</template>
<script>
export default {
  name: "Statistiky",
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
