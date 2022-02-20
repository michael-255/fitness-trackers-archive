<script>
import { VIEW } from '../../constants/globals.js'

export default {
  methods: {
    leaveMeasurements() {
      if (confirm('Return to the Dashboard?')) {
        this.$router.push({ name: VIEW.dashboard })
      }
    },
  },
}
</script>

<template>
  <v-app-bar app color="secondary">
    <v-toolbar-title>Measurements</v-toolbar-title>

    <v-spacer />

    <v-btn icon right @click="leaveMeasurements()">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-app-bar>
</template>
