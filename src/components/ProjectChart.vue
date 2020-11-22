<template>
  <div>
    <div class="display-1 font-weight-thin">
      Historie objednavek
      <v-btn class="ma-2" outlined color="indigo" @click="byMonths">
        Měsíce
      </v-btn>
      <v-btn class="ma-2" outlined color="indigo" @click="byDays">
        Dny
      </v-btn>
    </div>
    <v-sparkline
      color="indigo" 
      :fill="fill"
      line-width="2"
      padding="10"
      :smooth="radius || false"
      :value="statistics.turnover"
      :labels="statistics.label"
      label-size="5"
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
      fill: true,
      padding: 8,
      radius: 10,
      //value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8],
      width: 2,
      numStatistics: 10,
      statisticsType: this.dailyStatistics,
    };
  },
  computed: {
    orders() {
      return this.$store.state[`${this.$store.state.users.loggedUser.role}Orders`].orders;
    },

    statistics() {
      if (this.orders.length === 0) {
        return {
          turnover: [],
          numOrders: [],
          date: [],
          label: []
        };
      } else {
        return this.statisticsType();
      }
    }

    
  },
  methods: {
    byMonths() {
      this.statisticsType = this.monthlyStatistics;
      //this.numDays = 30;
    },
    byDays() {
      this.statisticsType = this.dailyStatistics;
      //this.numDays = 7;
    },

    pad(num) {
      let numstr = `${num}`;
      while (numstr.length < 2) {
        numstr = "0" + numstr;
      }
      return numstr;
    },

    dailyStatistics() {
      let daily = {
        turnover: [],
        numOrders: [],
        date: [],
        label: []
      };
      // index for last item in orders array
      let idx = this.orders.length - 1;
      let today = new Date();
      let day = new Date();
      
      //iterate days: today, yesterday, ..., today-numdays+1
      for(let i = 0; i < this.numStatistics; i++) {
        day.setDate(today.getDate() - i);
        let date = `${day.getFullYear()}-${this.pad(day.getMonth() + 1)}-${this.pad(day.getDate())}`;
        let thisOrderDate = this.orders[idx].createdAt.slice(0, 10);
      
        let dayTurnover = 0;
        let dayNumOrders = 0;

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
      
        daily.turnover.unshift(dayTurnover);
        daily.numOrders.unshift(dayNumOrders);
        daily.date.unshift(date);
        daily.label.unshift(`${date.slice(8,10)} (${dayTurnover},-)`)
      }
      return daily;
    },
    monthlyStatistics() {
      let monthly = {
        turnover: [],
        numOrders: [],
        date: [],
        label: []
      };
      // index for last item in orders array
      let idx = this.orders.length - 1;
      let today = new Date();
      let day = new Date();
      //iterate days: today, yesterday, ..., today-numdays+1
      for(let i = 0; i < this.numStatistics; i++) {
        day.setMonth(today.getMonth() - i);
        let date = `${day.getFullYear()}-${this.pad(day.getMonth() + 1)}`;
        let thisOrderDate = this.orders[idx].createdAt.slice(0, 7);
      
        let monthTurnover = 0;
        let monthNumOrders = 0;

        while(thisOrderDate === date) {
          monthTurnover += this.orders[idx].total_price;
          monthNumOrders++;
      
          if (idx > 0 ) {
            idx--;
            thisOrderDate = this.orders[idx].createdAt.slice(0, 7);
          } else {
            break;
          }
          
        }
      
        monthly.turnover.unshift(monthTurnover);
        monthly.numOrders.unshift(monthNumOrders);
        monthly.date.unshift(date);
        monthly.label.unshift(`${date.slice(5,7)} (${monthTurnover},-)`)
      }
      return monthly;
    }

  },

 
};
</script>
