<script>
import { VIEW } from '../../constants/globals.js'

export default {
  computed: {
    inProgressWorkoutName() {
      return this.$store.getters.getInProgressWorkoutName
    },

    inProgressWorkoutDate() {
      return this.$store.getters.getInProgressWorkoutDate
    },
  },

  methods: {
    resumeWorkout() {
      this.$router.push({ name: VIEW.inProgressWorkout })
    },

    async clearInProgressWorkout() {
      if (confirm('Cancel this workout?')) {
        await this.$store.dispatch('clearInProgressWorkout')
      }
    },
  },
}
</script>

<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-xl-3">
    <v-card>
      <v-card-title>{{ inProgressWorkoutName }}</v-card-title>

      <v-card-subtitle class="pb-0">
        <div>
          <v-icon small class="mr-1">start</v-icon>
          <span>{{ inProgressWorkoutDate }}</span>
        </div>
        <div>
          <v-icon small class="mr-1">directions_run</v-icon>
          <span>In progress workout</span>
        </div>
      </v-card-subtitle>

      <v-btn
        icon
        absolute
        top
        right
        color="error"
        @click="clearInProgressWorkout()"
      >
        <v-icon>delete_forever</v-icon>
      </v-btn>

      <v-card-actions>
        <v-container>
          <v-btn block color="success" @click="resumeWorkout()">
            Resume
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
