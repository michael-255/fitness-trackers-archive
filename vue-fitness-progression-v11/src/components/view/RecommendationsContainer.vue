<script>
import DefaultsCard from './DefaultsCard.vue'
import ResumeCard from './ResumeCard.vue'
import TestCard from './TestCard.vue'

export default {
  components: {
    DefaultsCard,
    ResumeCard,
    TestCard,
  },

  computed: {
    renderDefaultsCard() {
      return !this.$store.getters['workouts/isStateReady']
    },

    renderResumeCard() {
      return this.$store.getters['activeWorkoutRecords/isStateReady']
    },
  },
}
</script>

<template>
  <v-row>
    <TestCard />
    <DefaultsCard v-if="renderDefaultsCard" />
    <ResumeCard v-if="renderResumeCard" />
  </v-row>
</template>
