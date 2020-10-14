<template>
  <v-content class="fill-height">
    <v-row class="pa-3 fill-height">
      <v-col md6>
        <v-card class="pa-5 fill-height" color="primary">
          <v-list three-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Content here</v-list-item-title>
                <v-list-item-subtitle
                  >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda itaque obcaecati nostrum in aspernatur praesentium
                  deserunt. Dolore mollitia cumque esse qui reprehenderit saepe
                  provident nobis quis, ea vero praesentium
                  eaque!</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Other</v-list-item-title>
                <v-list-item-subtitle
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum ducimus sit eius facilis incidunt facere numquam nisi?
                  Nihil non doloribus nobis veritatis, architecto asperiores
                  animi laborum quia delectus tenetur
                  rerum?</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col md6>
        <v-card class="pa-5 fill-height" color="secondary">
          <v-btn flat router to="/test"> test </v-btn>
          <v-btn flat router to="/test2"> test2 </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>
