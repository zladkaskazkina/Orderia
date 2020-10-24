<template>
  <v-main>
    <v-row class="fill-height" no-gutters>
      <v-col>
        <v-sheet class="fill-height supplier-main pa-8">
          <v-row no-gutters class="mx-16 px-10 py-10">
            <p class="home-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda itaque obcaecati nostrum in aspernatur praesentium
              deserunt. Dolore mollitia cumque esse qui reprehenderit saepe
              provident nobis quis, ea vero praesentium eaque!
            </p>
          </v-row>
          <v-row no-gutters class="py-10">
            <v-btn dark class="mx-auto registration" router to="/registrace">
              Registrovat se jako dodavatel</v-btn
            >
            <!-- VYTVOŘIT REGISTRATION PAGE? -->
          </v-row>
          <v-row no-gutters justify="center" class="py-10">
            <ul class="home-text hp-list">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing.</li>
              <li>Assumenda itaque obcaecati nostrum in aspernatur.</li>
              <li>Dolore mollitia cumque esse qui reprehenderit.</li>
            </ul>
          </v-row>

          <v-row no-gutters justify="center" class="py-10">
            <v-img
              max-height="200"
              max-width="300"
              src="https://thumbs.gfycat.com/ApprehensiveHardKomododragon-mobile.jpg"
            >
            </v-img>
          </v-row>
        </v-sheet>
      </v-col>
      <!-- opravit pozicovani -->
      <v-btn text absolute class="how">
        <v-btn-title>JAK TO FUNGUJE?</v-btn-title>
      </v-btn>
      <v-col>
        <v-sheet class="fill-height buyer-main pa-8">
          <v-row no-gutters class="mx-16 px-10 py-10">
            <p class="home-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda itaque obcaecati nostrum in aspernatur praesentium
              deserunt. Dolore mollitia cumque esse qui reprehenderit saepe
              provident nobis quis, ea vero praesentium eaque!
            </p>
          </v-row>
          <v-row no-gutters class="py-10">
            <v-btn dark class="mx-auto registration" router to="/registrace">
              Registrovat se jako odběratel</v-btn
            >
            <!-- VYTVOŘIT REGISTRATION PAGE? -->
          </v-row>
          <v-row no-gutters justify="center" class="py-10">
            <ul class="home-text hp-list">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing.</li>
              <li>Assumenda itaque obcaecati nostrum in aspernatur.</li>
              <li>Dolore mollitia cumque esse qui reprehenderit.</li>
            </ul>
          </v-row>
          <v-row no-gutters justify="center" class="py-10">
            <v-img
              max-height="200"
              max-width="300"
              src="https://thumbs.gfycat.com/ApprehensiveHardKomododragon-mobile.jpg"
            >
            </v-img>
          </v-row>
          <v-row class="ma-5" no-gutters>
            <div class="mx-auto">
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
  color: #082940;
  list-style: none;
  margin: 0;
}

.hp-list {
  padding: 0;
}

.registration {
  text-transform: none;
  background-color: #082940 !important;
  border-radius: 1px;
}

.how {
  background-color: #ffffff;
  border: solid 2px #082940;
  border-radius: 1px;
  width: 400px;
  height: 50px;
  opacity: 0.8;
  top: 40%;
  left: 50%;
  -ms-transform: translate(-40%, -40%);
  transform: translate(-50%, -50%);
}
</style>