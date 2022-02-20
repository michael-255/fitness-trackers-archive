<script>
import WorkoutsContainer from '../components/view/WorkoutsContainer.vue'
import { SOURCE, VIEW } from '../constants/globals.js'
import { LoadOperation } from '../models/Operations.js'

export default {
  name: VIEW.dashboard,

  components: {
    WorkoutsContainer,
  },

  created() {
    // Ensures in progress state is up-to-date during page loads and crashes
    this.$store.dispatch(
      'operationResolver',
      new LoadOperation({
        theseSources: [
          SOURCE.measurementsInProgress,
          SOURCE.exercisesInProgress,
          SOURCE.workoutsInProgress,
        ],
      })
    )
    this.$store.dispatch('setDrawer', false)
  },

  computed: {
    renderWorkouts() {
      return this.$store.getters.isStateReady(SOURCE.workouts)
    },
  },
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-if="!this.renderWorkouts">
        <v-card>
          <v-card-title>Ready to begin?</v-card-title>

          <v-card-subtitle>
            Open the menu and load the defaults for the app, or import your
            data.
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <WorkoutsContainer v-if="renderWorkouts" />
  </v-container>
</template>
