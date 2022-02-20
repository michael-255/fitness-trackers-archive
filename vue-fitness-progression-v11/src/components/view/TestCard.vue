<script>
export default {
  methods: {
    async useDefaults() {
      if (confirm('Load default exercises and workouts?')) {
        await this.$store.dispatch('useDefaults')
      }
    },

    async clearApp() {
      if (confirm('Clear all app data?')) {
        await this.$store.dispatch('clearApp')
      }
    },

    basicExport() {
      if (confirm('Download state as JSON?')) {
        const workouts = this.$store.getters['workouts/getState']
        const exercises = this.$store.getters['exercises/getState']
        const workoutRecords = this.$store.getters['workoutRecords/getState']
        const exerciseRecords = this.$store.getters['exerciseRecords/getState']
        const appState = {
          workouts,
          exercises,
          workoutRecords,
          exerciseRecords,
        }

        const part1 = Math.random()
          .toString(36)
          .substring(2, 5)
        const part2 = Math.random()
          .toString(36)
          .substring(2, 5)
        const part3 = Math.random()
          .toString(36)
          .substring(2, 5)
        const id = `${part1}-${part2}-${part3}`.toUpperCase()

        const fileName = `fitness-state-export-${id}.json`

        this.downloadFile(fileName, JSON.stringify(appState))
      }
    },

    downloadFile(filename, textInput) {
      let tempElement = document.createElement('a')
      tempElement.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(textInput)
      )
      tempElement.setAttribute('download', filename)
      document.body.appendChild(tempElement)
      tempElement.click()
      document.body.removeChild(tempElement)
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>Dashboard Testing</v-card-title>

      <v-card-actions>
        <v-container>
          <v-btn color="success mr-3 mb-3" @click="useDefaults()">
            Set Defaults
          </v-btn>

          <v-btn color="error mr-3 mb-3" @click="clearApp()">
            Clear App
          </v-btn>

          <v-btn color="warning mr-3 mb-3" @click="basicExport()">
            Store Export
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
