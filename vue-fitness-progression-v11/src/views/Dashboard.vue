<script>
import { VIEW } from '../constants/globals'
import RecommendationsContainer from '../components/view/RecommendationsContainer.vue'
import WorkoutsContainer from '../components/view/WorkoutsContainer.vue'

export default {
  name: VIEW.dashboard,

  components: {
    RecommendationsContainer,
    WorkoutsContainer,
  },

  async created() {
    const otherWorkout = this.$store.getters[
      'activeWorkoutRecords/isStateReady'
    ]

    if (!otherWorkout) {
      await this.$store.dispatch('existingActiveWorkout')
    }
  },

  computed: {
    renderWorkouts() {
      return this.$store.getters['workouts/isStateReady']
    },
  },
}
</script>

<template>
  <v-container>
    <RecommendationsContainer />
    <WorkoutsContainer v-if="renderWorkouts" />
  </v-container>
</template>
