<script>
import { LAYOUT } from '../constants/globals.js'
import MeasurementsAppBar from '../components/layout/MeasurementsAppBar.vue'

export default {
  name: LAYOUT.measurements,

  components: {
    MeasurementsAppBar,
  },
}
</script>

<template>
  <div>
    <MeasurementsAppBar />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>
