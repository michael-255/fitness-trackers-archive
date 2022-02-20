<script>
import { LAYOUT } from '../constants/globals.js'
import ActiveWorkoutAppBar from '../components/layout/ActiveWorkoutAppBar.vue'

export default {
  name: LAYOUT.activeWorkout,

  components: {
    ActiveWorkoutAppBar,
  },
}
</script>

<template>
  <div>
    <ActiveWorkoutAppBar />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>
