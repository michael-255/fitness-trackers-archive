<script>
import InProgressExerciseSet from './InProgressExerciseSet.vue'
import { SOURCE } from '../../constants/globals.js'

export default {
  props: {
    inProgressExercise: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      dialog: false,
    }
  },

  components: {
    InProgressExerciseSet,
  },

  computed: {
    exerciseName() {
      return this.inProgressExercise?.actionName
    },

    exerciseId() {
      return this.inProgressExercise?.actionId
    },

    setCount() {
      return this.$store.getters.getExerciseSetCountById(
        this.inProgressExercise?.actionId
      )
    },

    previousExerciseRecords() {
      return this.$store.getters.getAllPreviousRecordsById(
        SOURCE.exerciseRecords,
        this.exerciseId
      )
    },
  },

  methods: {
    recordSetsToStr(setsData) {
      let outputStr = ''

      setsData.forEach((set) => {
        if (set.weight && set.reps) {
          const weight = set.weight.toString()
          const reps = set.reps.toString()

          outputStr += `${weight}x${reps}, `
        }
      })

      outputStr = outputStr.slice(0, -2)

      return outputStr
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>
        <span>{{ exerciseName }}</span>
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
                <v-toolbar-title>{{ exerciseName }}</v-toolbar-title>
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
                      <th class="text-left">Sets</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="record in previousExerciseRecords"
                      :key="record.id"
                    >
                      <td>{{ record.date }}</td>
                      <td>{{ recordSetsToStr(record.data.sets) }}</td>
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

      <v-card-text>
        <div v-if="setCount">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left px-1">Set</th>

                  <th class="text-left px-1">
                    <v-icon small class="mr-1">fitness_center</v-icon>
                    <span>Weight</span>
                  </th>

                  <th class="text-left px-1">
                    <v-icon small class="mr-1">filter_list</v-icon>
                    <span>Reps</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <InProgressExerciseSet
                  v-for="i in setCount"
                  :key="i"
                  :inProgressExercise="inProgressExercise"
                  :setNumber="i - 1"
                />
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>
