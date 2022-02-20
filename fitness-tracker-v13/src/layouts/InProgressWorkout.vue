<script>
import { LAYOUT } from '../constants/globals.js'
import InProgressWorkoutAppBar from '../components/layout/InProgressWorkoutAppBar.vue'
import WorkoutTimerFooter from '../components/layout/InProgressWorkoutFooter.vue'

export default {
  name: LAYOUT.inProgressWorkout,

  components: {
    InProgressWorkoutAppBar,
    WorkoutTimerFooter,
  },
}
</script>

<template>
  <div>
    <InProgressWorkoutAppBar />
    <v-main>
      <slot />
    </v-main>
    <WorkoutTimerFooter />
  </div>
</template>
