<script>
import { LAYOUT } from '../constants/globals.js'
import DefaultAppBar from '../components/layout/DefaultAppBar.vue'
import AppDrawer from '../components/layout/AppDrawer.vue'

export default {
  name: LAYOUT.default,

  components: {
    DefaultAppBar,
    AppDrawer,
  },
}
</script>

<template>
  <div>
    <AppDrawer />
    <DefaultAppBar />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>
