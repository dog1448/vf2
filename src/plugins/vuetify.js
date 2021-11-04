import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'

// Vue.component('AlertDialog', () => import('@/components/Module/AlertDialog.vue'))

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
})

export default new Vuetify({
})
