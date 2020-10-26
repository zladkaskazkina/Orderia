<template>
  <v-main>
    <v-row class="fill-height" no-gutters>
      <v-col>
        <v-sheet class="fill-height supplier-main pa-8">
          <v-row no-gutters class="mx-16 px-10 py-10">
            <ul class="home-check-text">
              <li>
                <img
                  src="@/assets/images/checkmark.png"
                  max-width="20px"
                  class="checkmark"
                />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
              <li>
                <img
                  src="@/assets/images/checkmark.png"
                  max-width="20px"
                  class="checkmark"
                />
                Assumenda itaque obcaecati nostrum in aspernatur.
              </li>
              <li>
                <img
                  src="@/assets/images/checkmark.png"
                  max-width="20px"
                  class="checkmark"
                />
                Dolore mollitia cumque esse qui reprehenderit saepe.
              </li>
              <li>
                <img
                  src="@/assets/images/checkmark.png"
                  max-width="20px"
                  class="checkmark"
                />
                Assumenda itaque obcaecati nostrum in aspernatur.
              </li>
              <li>
                <img
                  src="@/assets/images/checkmark.png"
                  max-width="20px"
                  class="checkmark"
                />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
            </ul>
          </v-row>
          <v-row no-gutters class="py-10">
            <v-btn dark class="mx-auto registration" router to="/registrace">
              Registrovat se jako dodavatel</v-btn
            >
            <!-- VYTVOŘIT REGISTRATION PAGE? -->

          </v-row>
          <v-row no-gutters class="pt-4" justify="center">
          <h5 class="how">
            JAK TO FUNGUJE?
          </h5>
          </v-row>

          <v-row no-gutters justify="center" class="py-4">
            <ul class="hp-list">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing.</li>
              <li>Assumenda itaque obcaecati nostrum in aspernatur.</li>
              <li>Dolore mollitia cumque esse qui reprehenderit.</li>
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

      <v-col>
        <v-sheet class="fill-height buyer-main pa-8">
          <v-row no-gutters class="mx-16 px-10 py-10">
            <ul class="home-check-text">
              <li>
                <img
                  src="@/assets/images/checkmark_blue.png"
                  max-width="20px"
                  class="checkmark"
                />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
              <li>
                <img
                  src="@/assets/images/checkmark_blue.png"
                  max-width="20px"
                  class="checkmark"
                />
                Assumenda itaque obcaecati nostrum in aspernatur.
              </li>
              <li>
                <img
                  src="@/assets/images/checkmark_blue.png"
                  max-width="20px"
                  class="checkmark"
                />
                Dolore mollitia cumque esse qui reprehenderit saepe.
              </li>
              <li>
                <img
                  src="@/assets/images/checkmark_blue.png"
                  max-width="20px"
                  class="checkmark"
                />
                Assumenda itaque obcaecati nostrum in aspernatur.
              </li>
              <li>
                <img
                  src="@/assets/images/checkmark_blue.png"
                  max-width="20px"
                  class="checkmark"
                />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
            </ul>
          </v-row>
          <v-row no-gutters class="py-10">
            <v-btn dark class="mx-auto registration" router to="/registrace">
              Registrovat se jako odběratel</v-btn
            >
            <!-- VYTVOŘIT REGISTRATION PAGE? -->
          </v-row>
          <v-row no-gutters justify="center" class="pt-4">
          <h5 class="how">
            JAK TO FUNGUJE?
          </h5>
          </v-row>
          <v-row no-gutters justify="center" class="py-4">
            <ul class="hp-list">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing.</li>
              <li>Assumenda itaque obcaecati nostrum in aspernatur.</li>
              <li>Dolore mollitia cumque esse qui reprehenderit.</li>
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
  background-size: cover;
}

.buyer-main {
  background: url("./../assets/images/background-buyer.jpg") center no-repeat;
  background-size: cover;
}

.home-check-text {
  text-align: left;
  color: #082940;
  list-style: none;
  margin: 0;
  background: none;
}

.hp-list {
  padding: 0;
  color: #082940;
}

.registration {
  text-transform: none;
  background-color: #082940 !important;
  border-radius: 1px;
}


.how {
  color: #082940;


}

.checkmark {
  max-width: 20px;
  padding-right: 5px;
}
</style>
