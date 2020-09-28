import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: "md",
  theme: {
    themes: {
      light: {
    primary: '#EBDDCF',
    secondary: '#c6d6d0',
    error: '#082940',
    info: '#d4dfe6',
    success: '#c1922d'
  },
},
},
});
