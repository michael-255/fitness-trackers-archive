<script>
import { LAYOUT } from '../constants/globals.js'
import DefaultAppBar from '../components/layout/DefaultAppBar.vue'

export default {
  name: LAYOUT.default,

  components: {
    DefaultAppBar,
  },
}
</script>

<template>
  <div>
    <DefaultAppBar />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>
