<template>
  <v-container fluid class="fill-height">
    <v-row class="pa-3 fill-height">
      <v-col md6>
        <v-card class="pa-5 fill-height" color="primary">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            repellat, eos odit mollitia hic a culpa iusto temporibus facere
            dolorum soluta ab unde vero non, inventore iure quod aliquid
            reprehenderit.
          </p>
        </v-card>
      </v-col>
      <v-col md6>
        <v-card class="pa-5 fill-height" color="secondary">
          <v-btn flat router to="/test"> test </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>
