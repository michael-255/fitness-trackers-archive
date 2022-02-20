import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import vuetify from './plugins/vuetify'
// Layouts
import DefaultLayout from './layouts/Default.vue'
import ActiveWorkoutLayout from './layouts/ActiveWorkout.vue'
import { LAYOUT } from './constants/globals.js'

Vue.component(LAYOUT.default, DefaultLayout)
Vue.component(LAYOUT.activeWorkout, ActiveWorkoutLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
