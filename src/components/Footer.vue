<template>
<!-- upravit na responsive -->
  <v-footer padless elevation="3" class="footer error--text">
    <div class="circle" v-ripple>
        <v-img
          src="@/assets/images/arrowup.png"
          class="arrow"
          @click="$vuetify.goTo(target, options)"
        ></v-img>
      </div>
    <v-card class="flex error my-5 pa-4" flat>
      
      <v-card-text class="text-center">
        <v-btn
          depressed
          rounded
          class="footer__menu error info--text"
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-btn>
      </v-card-text>
      <v-row no-gutters>
        <v-col>
          <v-card-text class="social-icons">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              icon
              class="social-icons mx-4 info--text"
            >
              <v-icon size="25px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col>
          <v-card-text class="contacts text-end">
            <v-btn depressed rounded class="error info--text">
              <v-icon class="px-2">mdi-email</v-icon>
              orderia@orderia.com
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>

import * as easings from "vuetify/es5/services/goto/easing-patterns";
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      links: ["O nás", "Nejčastější otázky", "Spolupráce", "Tým", "Kontakty"],
      type: "number",
      number: -700,
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
.v-footer {
  background-color: #082940 !important;
}

.v-btn.v-size--default {
 font-size: 12px;
}

.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 0;
}

.footer {
  width: 100%;
}

.circle {
  width: 60px;
  height: 60px;
  background: #082940 ;
  border-radius: 50%;
  position: absolute;
  top: -25px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  z-index: 1;
}

.arrow {
  margin: auto;
  display: block;
  max-width: 35px;
  transform: rotate(180deg);
}
</style>
