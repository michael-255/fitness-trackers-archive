<script>
import { VIEW } from '../../constants/globals.js'

export default {
  computed: {
    inProgressWorkoutName() {
      return this.$store.getters.getInProgressWorkoutName
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
    <v-toolbar-title>{{ inProgressWorkoutName }}</v-toolbar-title>

    <v-spacer />

    <v-btn icon right @click="leaveWorkout()">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-app-bar>
</template>
