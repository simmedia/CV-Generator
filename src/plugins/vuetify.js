import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#234457',
            secondary: '#3E8FBD',
            accent: '#8c9eff',
            error: '#b71c1c'
          },
        },
      },
});
