<script>
import { mapGetters } from 'vuex'
import { VIEW, SOURCE } from '../../constants/globals.js'
import { getDaysSinceFromDate } from '../../utils/time.js'

export default {
  props: {
    workout: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      dialog: false,
    }
  },

  computed: {
    ...mapGetters([
      'getPreviousWorkoutDateById',
      'getPreviousWorkoutDurationById',
      'isWorkoutInProgress',
    ]),

    workoutName() {
      return this.workout?.name
    },

    previousWorkoutDate() {
      return this.getPreviousWorkoutDateById(this.workout?.id)
    },

    previousWorkoutDuration() {
      return this.getPreviousWorkoutDurationById(this.workout?.id)
    },

    daysSinceLastWorkout() {
      return getDaysSinceFromDate(this.previousWorkoutDate)
    },

    previousWorkoutRecords() {
      return this.$store.getters.getAllPreviousRecordsById(
        SOURCE.workoutRecords,
        this.workout.id
      )
    },
  },

  methods: {
    beginWorkout() {
      if (this.isWorkoutInProgress) {
        this.replaceWorkout()
      } else {
        this.routeToNewWorkout()
      }
    },

    replaceWorkout() {
      if (confirm('Replace in progress workout?')) {
        this.routeToNewWorkout()
      }
    },

    async routeToNewWorkout() {
      this.$router.push({ name: VIEW.inProgressWorkout })
      await this.$store.dispatch('beginNewWorkout', this.workout)
    },
  },
}
</script>

<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-xl-3">
    <v-card>
      <v-card-title>
        <span>{{ workoutName }}</span>
        <!-- DIALOG -->
        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon absolute top right v-bind="attrs" v-on="on">
                <v-icon>timeline</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{ workoutName }}</v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                  <v-btn icon @click="dialog = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <!-- Dialog Table -->
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Date</th>
                      <th class="text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="record in previousWorkoutRecords"
                      :key="record.id"
                    >
                      <td>{{ record.date }}</td>
                      <td>{{ record.duration }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <!-- Dialog Table -->
            </v-card>
          </v-dialog>
        </v-row>
        <!-- DIALOG -->
      </v-card-title>

      <v-card-subtitle class="pb-0">
        <div>
          <v-icon small class="mr-1">event_available</v-icon>
          <span>{{ previousWorkoutDate }}</span>
          <v-badge
            v-show="this.daysSinceLastWorkout"
            class="ml-1"
            inline
            color="secondary"
            :content="this.daysSinceLastWorkout"
          />
        </div>
        <div>
          <v-icon small class="mr-1">timer</v-icon>
          <span>{{ previousWorkoutDuration }}</span>
        </div>
      </v-card-subtitle>

      <v-card-actions>
        <v-container>
          <v-btn block color="primary" @click="beginWorkout()">
            Begin
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
