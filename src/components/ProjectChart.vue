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
      color="indigo" 
      :fill="fill"
      line-width="2"
      padding="10"
      :smooth="radius || false"
      :value="dailyStatistics.turnover"
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

    dailyStatistics() {
      let daily = {
        turnover: [],
        numOrders: [],
        date: [],
      };
      if (this.orders.length === 0) {
        return daily;
      }
      // index for last item in orders array
      let idx = this.orders.length - 1;
      let today = new Date();
      let day = new Date();
      
      //iterate days: today, yesterday, ..., today-numdays+1
      for(let i = 0; i < this.numDays; i++) {
        day.setDate(today.getDate() - i);
        let date = `${day.getFullYear()}-${this.pad(day.getMonth() + 1)}-${this.pad(day.getDate())}`;
        let thisOrderDate = this.orders[idx].createdAt.slice(0, 10);
        //console.log(thisOrderDate);
        let dayTurnover = 0;
        let dayNumOrders = 0;
        let dayDate = date;

        while(thisOrderDate === date) {
          dayTurnover += this.orders[idx].total_price;
          dayNumOrders++;
      
          if (idx > 0 ) {
            idx--;
            thisOrderDate = this.orders[idx].createdAt.slice(0, 10);
          } else {
            break;
          }
          
        }
        // get orders from database
        daily.turnover.unshift(dayTurnover);
        daily.numOrders.unshift(dayNumOrders);
        daily.date.unshift(dayDate);
      }

      return daily;
    },
  },
  methods: {
    byMonths() {
      this.numDays = 30;
    },
    byWeeks() {
      this.numDays = 7;
    },

    pad(num) {
      let numstr = `${num}`;
      while (numstr.length < 2) {
        numstr = "0" + numstr;
      }
      return numstr;
    },
  },

  mounted() {
    this.$store.dispatch(`${this.currentUser.role}Orders/getOrders`);
  },
};
</script>
