<script>
import { VIEW } from '../../constants/globals.js'

export default {
  computed: {
    activeWorkoutName() {
      return this.$store.getters['getActiveWorkoutName']
    },
  },

  methods: {
    leaveWorkout() {
      if (confirm('Return to the Dashboard?')) {
        this.$router.push({ name: VIEW.dashboard })
      }
    },
  },
}
</script>

<template>
  <v-app-bar app color="secondary">
    <v-toolbar-title>{{ activeWorkoutName }}</v-toolbar-title>

    <v-spacer />

    <v-btn icon right @click="leaveWorkout()">X</v-btn>
  </v-app-bar>
</template>
