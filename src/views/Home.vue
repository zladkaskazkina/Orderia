<template>
  <v-main>
    <v-row no-gutters align="center" class="homepage__banner secondary">
      <v-col class="d-flex flex-column">
        <div class="opening-text align-self-center">
          <h2 class="opening-text__head error--text">
            Zkroťte svoje objednávky
          </h2>
        </div>

        <div class="opening-text__subhead align-self-center error--text">
          <h3>ORDERIA přináší efektivní řešení pro B2B obchodování</h3>
        </div>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-img
          class="homepage__img"
          max-width="650px"
          src="@/assets/images/5272.png"
        ></v-img>
      </v-col>

      <div class="circle" v-ripple>
        <v-img
          src="@/assets/images/arrowdown.png"
          class="arrow"
          @click="$vuetify.goTo(target, options)"
        ></v-img>
      </div>
    </v-row>

    <!-- section supplier -->
    <v-row no-gutters>
      <v-col class="supplier-main pa-2">
        <v-row no-gutters class="py-10">
          <v-btn class="mx-auto registration error" router to="/registrace">
            Registrovat se jako dodavatel</v-btn
          >
        </v-row>
        <v-row no-gutters class="mx-6 px-6 py-10" justify="center">
          <ul class="home-checkmark-text">
            <li>
              <img
                src="@/assets/images/checkmark.png"
                max-width="20px"
                class="checkmark"
              /> Jednoduchá registrace
            </li>
            <li>
              <img
                src="@/assets/images/checkmark.png"
                max-width="20px"
                class="checkmark"
              />
              Přehled objednávek a související statistiky
            </li>
            <li>
              <img
                src="@/assets/images/checkmark.png"
                max-width="20px"
                class="checkmark"
              />
              Snadné zadávání produktů
            </li>
            <li>
              <img
                src="@/assets/images/checkmark.png"
                max-width="20px"
                class="checkmark"
              />
              Věcný seznam partnerů
            </li>
            <li>
              <img
                src="@/assets/images/checkmark.png"
                max-width="20px"
                class="checkmark"
              />
              Efektivní správa reklamací
            </li>
          </ul>
        </v-row>
        <v-row no-gutters justify="center" class="pb-8">
          <v-img
            class="homepage__img"
            max-width="350px"
            src="@/assets/images/5912.jpg"
          ></v-img>
        </v-row>

        <v-row no-gutters justify="center" class="py-4">
          <ul class="hp-list">
            <li>
              Při vyplnění registračního formuláře zvolíte, že jste výrobce
            </li>
            <li>
              Vyplníte svůj profil s popisem a důležitými údaji
            </li>
            <li>
              Prostřednictvím jednoduchého formuláře vložíte svoje produkty
            </li>
            <li>
              Snadno spravujete příchozí objednávky na jednom místě
            </li>
            <li>Díky statistikám máte přehled, které zboží zákazníci nejvíce kupují</li>
          </ul>
        </v-row>

        <v-row no-gutters justify="center" class="py-10">
          <v-img
            max-height="250"
            max-width="350"
            src="https://thumbs.gfycat.com/ApprehensiveHardKomododragon-mobile.jpg"
          >
          </v-img>
        </v-row>
      </v-col>
      <!-- split -->

      <div class="split-layout__divider">
        <div class="split-layout__rule"></div>
        <div class="split-layout__label"><h3>Jak to funguje?</h3></div>
        <div class="split-layout__rule"></div>
      </div>
      <!-- split ends -->

      <!-- section buyer -->
      <v-col class="buyer-main pa-2">
        <v-row no-gutters class="py-10">
          <v-btn class="mx-auto registration error" router to="/registrace">
            Registrovat se jako odběratel</v-btn
          >
        </v-row>
        <v-row no-gutters class="mx-6 px-6 py-10" justify="center">
          <ul class="home-checkmark-text">
            <li>
              <img
                src="@/assets/images/checkmark_blue.png"
                max-width="20px"
                class="checkmark"
              />
              Jednoduchá registrace
            </li>
            <li>
              <img
                src="@/assets/images/checkmark_blue.png"
                max-width="20px"
                class="checkmark"
              />
              Přehled objednávek a související statistiky
            </li>
            <li>
              <img
                src="@/assets/images/checkmark_blue.png"
                max-width="20px"
                class="checkmark"
              />
              Srozumitelné vyhledávání produktů
            </li>
            <li>
              <img
                src="@/assets/images/checkmark_blue.png"
                max-width="20px"
                class="checkmark"
              />
              Kompletní seznam a možnost komunikace s partnery
            </li>
            <li>
              <img
                src="@/assets/images/checkmark_blue.png"
                max-width="20px"
                class="checkmark"
              />
              Zadávání a zobrazení průběhu reklamací
            </li>
          </ul>
        </v-row>
        <v-row no-gutters justify="center" class="pb-8">
          <v-img
            class="homepage__img"
            max-width="350px"
            src="@/assets/images/10122.jpg"
          ></v-img>
        </v-row>

        <v-row no-gutters justify="center" class="py-4">
          <ul class="hp-list">
            <li>Při vyplnění registračního formuláře zvolíte, že jste prodejce</li>
            <li>Vyplníte svůj profil s popisem a důležitými údaji</li>
            <li>Vyberete si produkty nabízené registrovanými dodavateli</li>
            <li>Snadno objednáte a sledujete všechny objednávky na jednom místě</li>
            <li>Díky statistikám máte přehled nejen o svých výdajích</li>
          </ul>
        </v-row>
        <v-row no-gutters justify="center" class="py-10">
          <v-img
            max-height="250"
            max-width="350"
            src="https://thumbs.gfycat.com/ApprehensiveHardKomododragon-mobile.jpg"
          >
          </v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
// @ is an alias to /src
import * as easings from "vuetify/es5/services/goto/easing-patterns";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      type: "number",
      number: 580,
      duration: 300,
      offset: 50,
      easing: "easeInOutCubic",
      easings: Object.keys(easings),
    };
  },

  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.homepage__banner {
  padding-bottom: 10px;
  position: relative;
}

.opening-text {
  text-align: center;
  position: relative;
  max-width: 500px;
  padding: 20px;
  margin: 20px;

  &__head {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &::before {
    content: "";
    position: absolute;
    width: 10%;
    height: calc(100% - 30px);
    bottom: 0;
    left: 0;
    border-bottom: 5px solid #c1922d;
    border-left: 5px solid #c1922d;
  }

  &::after {
    content: "";
    position: absolute;
    width: 10%;
    height: calc(100% - 30px);
    top: 0;
    right: 0;
    border-top: 5px solid #c1922d;
    border-right: 5px solid#c1922d;
  }

  &__subhead {
    padding: 20px;
  }
}

.home-checkmark-text {
  text-align: left;
  color: #082940;
  list-style: none;
  margin: 0;
  background: none;
}

.hp-list {
  margin: 0;
  color: #082940;
}

.checkmark {
  max-width: 20px;
  padding-right: 5px;
}

.circle {
  width: 60px;
  height: 60px;
  background: #c6d6d0;
  border-radius: 50%;
  position: absolute;
  bottom: -25px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  margin: auto;
  display: block;
  max-width: 35px;
}

.split-layout__divider {
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (min-width: 30em) {
    flex-direction: column;
  }
}

.split-layout__label {
  padding: 1em;
  color: #082940;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
}

.split-layout__rule {
  flex: 1;
  border-style: solid;
  border-color: #c6d6d0;
  border-width: 1px;

  @media screen and (min-width: 30em) {
    border-width: 1px;
  }
}
</style>
