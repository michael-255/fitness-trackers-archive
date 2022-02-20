<script>
import { VIEW } from '../../constants/globals.js'

export default {
  props: {
    workout: {
      type: Object,
      required: true,
    },
  },

  computed: {
    workoutName() {
      const workoutName = this.workout.name
      if (workoutName) return workoutName
      return null
    },

    previousCreatedAtDate() {
      if (this.workout?.previousRecord?.createdAt) {
        return new Date(this.workout.previousRecord.createdAt).toDateString()
      }
      return null
    },
  },

  methods: {
    beginWorkout() {
      const inProgressWorkout = this.$store.getters['getActiveWorkoutName']

      if (!inProgressWorkout) {
        this.routeToActiveWorkout()
      } else {
        if (confirm('Replace in progress workout?')) {
          this.routeToActiveWorkout()
        }
      }
    },

    async routeToActiveWorkout() {
      const payload = {
        workoutId: this.workout.id,
        exerciseIds: this.workout.exerciseIds,
      }

      this.$router.push({ name: VIEW.activeWorkout })
      await this.$store.dispatch('beginNewWorkout', payload)
    },
  },
}
</script>

<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-xl-3">
    <v-card>
      <v-card-title>{{ workoutName }}</v-card-title>

      <v-card-subtitle>{{ previousCreatedAtDate }}</v-card-subtitle>

      <v-card-actions>
        <v-container>
          <v-btn block color="primary" @click="beginWorkout()">
            Begin Workout
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
