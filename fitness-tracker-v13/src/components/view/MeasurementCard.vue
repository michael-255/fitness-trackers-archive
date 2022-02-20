<script>
import { SOURCE } from '../../constants/globals.js'
import { MeasurementRecord } from '../../models/Entities.js'
import { getDaysSinceFromDate } from '../../utils/time.js'

export default {
  props: {
    measurement: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      dialog: false,
      measurementValue: null,
    }
  },

  computed: {
    measurementName() {
      return this.measurement?.name
    },

    measurementRecords() {
      return this.$store.getters.getSortedRecordsByActionId(
        SOURCE.measurementRecords,
        this.measurement?.id
      )
    },

    previousMeasurementDate() {
      return this.measurementRecords[0]?.date ?? 'No previous measurements'
    },

    previousMeasurementValue() {
      return this.measurementRecords[0]?.value.toString() ?? ''
    },

    daysSinceLastMeasurement() {
      return getDaysSinceFromDate(this.previousMeasurementDate)
    },
  },

  methods: {
    recordMeasurement() {
      if (this.measurementValue) {
        if (confirm('Save this measurement?')) {
          const measurementRecord = new MeasurementRecord({
            actionId: this.measurement?.id,
            actionName: this.measurement?.name,
            value: Number(this.measurementValue),
          })
          this.$store.dispatch('saveMeasurement', measurementRecord)
          this.measurementValue = null
        }
      } else {
        confirm('Please enter a number to record.')
      }
    },
  },
}
</script>

<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-xl-3">
    <v-card>
      <v-card-title>
        <span>{{ measurementName }}</span>
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
                <v-toolbar-title>{{ measurementName }}</v-toolbar-title>
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
                      <th class="text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="record in measurementRecords" :key="record.id">
                      <td>{{ record.date }}</td>
                      <td>{{ record.value }}</td>
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
          <span>{{ previousMeasurementDate }}</span>
          <v-badge
            v-show="this.daysSinceLastMeasurement"
            class="ml-1"
            inline
            color="secondary"
            :content="this.daysSinceLastMeasurement"
          />
        </div>
      </v-card-subtitle>

      <v-card-text class="pb-0">
        <v-text-field
          v-model="measurementValue"
          type="number"
          :label="previousMeasurementValue"
          dense
          outlined
          hide-details
          class="my-2"
          prepend-icon="straighten"
        />
      </v-card-text>

      <v-card-actions>
        <v-container>
          <v-btn block color="success" @click="recordMeasurement()">
            Record Measurement
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
