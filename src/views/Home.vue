<template>
  <v-main class="fill-height">
    <v-row class="fill-height" no-gutters>
      <v-col>
        <v-sheet class="fill-height supplier-main pa-4">
          <v-row no-gutters class="px-12 py-10">
            <p class="home-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda itaque obcaecati nostrum in aspernatur praesentium
              deserunt. Dolore mollitia cumque esse qui reprehenderit saepe
              provident nobis quis, ea vero praesentium eaque!
            </p>
          </v-row>
          <v-row no-gutters>
            <v-btn flat class="mx-auto" router to="/login">
              Registrovat se jako dodavatel</v-btn
            >
            <!-- VYTVOŘIT REGISTRATION PAGE? -->
          </v-row>
          <v-row no-gutters justify="center" class="py-10">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing.</li>
              <li>Assumenda itaque obcaecati nostrum in aspernatur.</li>
              <li>Dolore mollitia cumque esse qui reprehenderit.</li>
            </ul>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="fill-height buyer-main pa-4">
          <v-row no-gutters class="px-12 py-10">
            <p class="home-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda itaque obcaecati nostrum in aspernatur praesentium
              deserunt. Dolore mollitia cumque esse qui reprehenderit saepe
              provident nobis quis, ea vero praesentium eaque!
            </p>
          </v-row>
          <v-row no-gutters>
            <v-btn flat class="mx-auto" router to="/login">
              Registrovat se jako odběratel</v-btn
            >
            <!-- VYTVOŘIT REGISTRATION PAGE? -->
          </v-row>
          <v-row no-gutters justify="center" class="py-10">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing.</li>
              <li>Assumenda itaque obcaecati nostrum in aspernatur.</li>
              <li>Dolore mollitia cumque esse qui reprehenderit.</li>
            </ul>
          </v-row>
          <v-row class="ma-10" no-gutters>
            <div class="mx-auto">
              <v-btn flat router to="/test"> test </v-btn>
              <v-btn flat router to="/test2"> test2 </v-btn>
            </div>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
.supplier-main {
  background: url("./../assets/images/background-supplier.jpg") center no-repeat;
}

.buyer-main {
  background: url("./../assets/images/background-buyer.jpg") center no-repeat;
}

.home-text {
  text-align: center;
  color: #431c5d;
}
</style>