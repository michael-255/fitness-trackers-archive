<script>
import ActiveExerciseCardHeader from './ActiveExerciseCardHeader.vue'
import ActiveExerciseCardSet from './ActiveExerciseCardSet.vue'

export default {
  props: {
    exerciseRecord: {
      type: Object,
      required: true,
    },
  },

  components: {
    ActiveExerciseCardHeader,
    ActiveExerciseCardSet,
  },

  computed: {
    activeExercise() {
      return this.$store.getters['getActiveExerciseById'](
        this.exerciseRecord.exerciseId
      )
    },

    setLimit() {
      if (this.exerciseRecord.sets.length > 0) {
        return this.exerciseRecord.sets.length
      } else {
        return 1
      }
    },
  },

  methods: {
    addSet() {
      if (this.setLimit < 10) {
        this.setLimit++
        const payload = this.exerciseRecord
        payload.sets.push({
          weight: null,
          reps: null,
          duration: null,
          distance: null,
        })
        this.$store.dispatch('updateActiveExerciseSet', payload)
      }
    },

    async removeSet() {
      if (this.setLimit > 1) {
        this.setLimit--
        const payload = this.exerciseRecord
        payload.sets.pop()
        this.$store.dispatch('updateActiveExerciseSet', payload)
      }
    },
  },
}
</script>

<template>
  <v-col class="col-12 px-0">
    <v-card>
      <ActiveExerciseCardHeader
        :name="activeExercise.name"
        :equipment="activeExercise.equipment"
        :category="activeExercise.category"
        :description="activeExercise.description"
      />

      <v-card-text>
        <div v-for="(item, i) in setLimit" :key="i">
          <v-chip v-if="activeExercise.inputs.hasSets" x-small class="mb-1">
            SET {{ i + 1 }}
          </v-chip>
          <ActiveExerciseCardSet
            :set="i"
            :exerciseRecord="exerciseRecord"
            :exerciseInputs="activeExercise.inputs"
          />
        </div>
      </v-card-text>

      <v-card-actions v-if="activeExercise.inputs.hasSets">
        <v-btn @click="addSet()" color="success" :disabled="setLimit >= 10">
          <span>Add Set</span>
        </v-btn>
        <v-btn
          fab
          small
          @click="removeSet()"
          color="error"
          :depressed="setLimit <= 1"
          :disabled="setLimit <= 1"
        >
          <v-icon>remove</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
