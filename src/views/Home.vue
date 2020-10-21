<template>
  <v-main>
    <v-row class="fill-height" no-gutters>
      <v-col>
        <v-sheet class="fill-height supplier-main">
          <v-row no-gutters class="px-12 py-10">
            <p class="home-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda itaque obcaecati nostrum in aspernatur praesentium
              deserunt. Dolore mollitia cumque esse qui reprehenderit saepe
              provident nobis quis, ea vero praesentium eaque!
            </p>
          </v-row>
          <v-row no-gutters class="py-10">
            <v-btn flat class="mx-auto" router to="/login">
              Registrovat se jako dodavatel</v-btn
            >
            <!-- VYTVOŘIT REGISTRATION PAGE? -->
          </v-row>
          <v-row no-gutters justify="center" class="py-10">
            <ul class="home-text">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing.</li>
              <li>Assumenda itaque obcaecati nostrum in aspernatur.</li>
              <li>Dolore mollitia cumque esse qui reprehenderit.</li>
            </ul>
          </v-row>

          <v-row no-gutters justify="center"  class="py-10">
            <v-img 
            max-height="200"
            max-width="300"
            src="https://thumbs.gfycat.com/ApprehensiveHardKomododragon-mobile.jpg">
            </v-img>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="fill-height buyer-main">
          <v-row no-gutters class="px-12 py-10">
            <p class="home-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda itaque obcaecati nostrum in aspernatur praesentium
              deserunt. Dolore mollitia cumque esse qui reprehenderit saepe
              provident nobis quis, ea vero praesentium eaque!
            </p>
          </v-row>
          <v-row no-gutters class="py-10">
            <v-btn flat class="mx-auto" router to="/login">
              Registrovat se jako odběratel</v-btn
            >
            <!-- VYTVOŘIT REGISTRATION PAGE? -->
          </v-row>
          <v-row no-gutters justify="center" class="py-10">
            <ul class="home-text">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing.</li>
              <li>Assumenda itaque obcaecati nostrum in aspernatur.</li>
              <li>Dolore mollitia cumque esse qui reprehenderit.</li>
            </ul>
          </v-row>
           <v-row no-gutters justify="center" class="py-10">
            <v-img 
            max-height="200"
            max-width="300"
            src="https://thumbs.gfycat.com/ApprehensiveHardKomododragon-mobile.jpg">
            </v-img>
          </v-row>
          <v-row class="ma-5" no-gutters>
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
  list-style: none;
}
</style>