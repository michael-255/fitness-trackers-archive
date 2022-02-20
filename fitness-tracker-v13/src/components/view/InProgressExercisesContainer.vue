<script>
import InProgressExerciseCard from './InProgressExerciseCard.vue'
import { SOURCE } from '../../constants/globals.js'

export default {
  components: {
    InProgressExerciseCard,
  },

  computed: {
    inProgressExercises() {
      return this.$store.getters.getState(SOURCE.exercisesInProgress)
    },
  },
}
</script>

<template>
  <v-row>
    <InProgressExerciseCard
      v-for="inProgressExercise in inProgressExercises"
      :key="inProgressExercise.id"
      :inProgressExercise="inProgressExercise"
    />
  </v-row>
</template>
