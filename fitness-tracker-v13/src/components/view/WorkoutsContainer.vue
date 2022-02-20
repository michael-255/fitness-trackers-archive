<script>
import ResumeCard from './ResumeCard.vue'
import WorkoutCard from './WorkoutCard.vue'
import { SOURCE } from '../../constants/globals.js'

export default {
  components: {
    ResumeCard,
    WorkoutCard,
  },

  computed: {
    workouts() {
      return this.$store.getters.getState(SOURCE.workouts)
    },

    renderResumeCard() {
      return this.$store.getters.isWorkoutInProgress
    },
  },
}
</script>

<template>
  <v-row>
    <ResumeCard v-if="renderResumeCard" />

    <WorkoutCard
      v-for="workout in workouts"
      :key="workout.id"
      :workout="workout"
    />
  </v-row>
</template>
