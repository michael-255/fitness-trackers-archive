<script>
import MeasurementCard from './MeasurementCard.vue'
import { SOURCE } from '../../constants/globals.js'

export default {
  components: {
    MeasurementCard,
  },

  computed: {
    measurements() {
      return this.$store.getters.getState(SOURCE.measurements)
    },
  },
}
</script>

<template>
  <v-row>
    <MeasurementCard
      v-for="measurement in measurements"
      :key="measurement.id"
      :measurement="measurement"
    />
  </v-row>
</template>
