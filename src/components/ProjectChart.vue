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
      :value="turnover"
      auto-draw
    >
      <template v-slot:label="item"> {{ item.value }} </template>
    </v-sparkline>
  </div>
</template>
<script>
export default {
  name: "ProjectChart",
  data() {
    return {
      currentUser: this.$store.state.users.loggedUser,
      fill: true,
      padding: 8,
      radius: 10,
      //value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8],
      width: 2,
      numDays: 7,
    };
  },
  computed: {
    orders() {
      return this.$store.state[`${this.currentUser.role}Orders`].orders;
    },

    turnover() {
      let dailyTurnover = [];
      for(let i = 1; i <= this.numDays; i++)
      {
        dailyTurnover.push(i);
      }
      return dailyTurnover;
    }
  },
  methods: {


    byMonths() {
      this.numDays = 30;
    },
    byWeeks() {
      this.numDays = 7;
    },
  },

  mounted() {
    this.$store.dispatch(`${this.currentUser.role}Orders/getOrders`);
  },
};
</script>
