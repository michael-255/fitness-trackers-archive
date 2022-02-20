<script>
import MeasurementsContainer from '../components/view/MeasurementsContainer.vue'
import { VIEW } from '../constants/globals'

export default {
  name: VIEW.measurements,

  components: {
    MeasurementsContainer,
  },
}
</script>

<template>
  <v-container>
    <MeasurementsContainer />
  </v-container>
</template>
