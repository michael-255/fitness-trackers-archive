<script>
import InProgressExercisesContainer from '../components/view/InProgressExercisesContainer.vue'
import { VIEW } from '../constants/globals'

export default {
  name: VIEW.inProgressWorkout,

  components: {
    InProgressExercisesContainer,
  },

  methods: {
    async finishWorkout() {
      if (confirm('Finish and save this workout?')) {
        this.$router.push({ name: VIEW.dashboard })
        await this.$store.dispatch('finishWorkout')
      }
    },
  },
}
</script>

<template>
  <v-container>
    <InProgressExercisesContainer />

    <v-row class="mb-3 mt-5">
      <v-spacer />
      <v-btn large color="success" @click="finishWorkout()">
        Finish Workout
      </v-btn>
      <v-spacer />
    </v-row>
  </v-container>
</template>
