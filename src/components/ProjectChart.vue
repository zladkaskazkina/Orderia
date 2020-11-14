<template>
  <div>
    <div class="display-1 font-weight-thin">
      Historie objednavek
      <v-btn class="ma-2" outlined color="indigo" @click="byMonths">
        Mesic
      </v-btn>
      <v-btn class="ma-2" outlined color="indigo" @click="byWeeks">
        Tyden
      </v-btn>
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
  </div>
</template>
<script>
export default {
  name: "ProjectChart",
  data: () => ({
    fill: true,
    padding: 8,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8],
    width: 2
  }),
  methods: {
    byMonths() {
      //
    },
    byWeeks() {
      //
    }
  }
};
</script>
