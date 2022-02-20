<script>
export default {
  methods: {
    async useDefaults() {
      await this.$store.dispatch('useDefaults')
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>No Workouts Found</v-card-title>

      <v-card-subtitle>
        Would you like to prefill the app with default exercises and workouts?
      </v-card-subtitle>

      <v-card-actions>
        <v-container>
          <v-btn color="success" @click="useDefaults()">Use Defaults</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
