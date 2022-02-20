<script>
export default {
  props: {
    exerciseInputs: {
      type: Object,
      required: true,
    },
    exerciseRecord: {
      type: Object,
      required: true,
    },
    set: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      weight: null,
      reps: null,
      duration: null,
      distance: null,
      previousExerciseRecord: null,
    }
  },

  mounted() {
    const setData = this.exerciseRecord.sets[this.set]
    this.weight = setData ? setData.weight : null
    this.reps = setData ? setData.reps : null
    this.duration = setData ? setData.duration : null
    this.distance = setData ? setData.distance : null
    this.previousExerciseRecord = this.$store.getters['getExerciseById'](
      this.exerciseRecord.exerciseId
    ).previousRecord
  },

  computed: {
    weightHint() {
      return this.previousExerciseRecord?.sets[this.set]?.weight
    },

    repsHint() {
      return this.previousExerciseRecord?.sets[this.set]?.reps
    },

    durationHint() {
      return this.previousExerciseRecord?.sets[this.set]?.duration
    },

    distanceHint() {
      return this.previousExerciseRecord?.sets[this.set]?.distance
    },
  },

  methods: {
    saveChanges() {
      const payload = this.exerciseRecord

      payload.sets[this.set] = {
        weight: this.weight,
        reps: this.reps,
        duration: this.duration,
        distance: this.distance,
      }

      this.$store.dispatch('updateActiveExerciseSet', payload)
    },
  },
}
</script>

<template>
  <v-row>
    <v-col v-if="exerciseInputs.hasWeight" class="col-6 col-sm-3">
      <v-text-field
        v-model="weight"
        @blur="saveChanges()"
        type="number"
        min="0"
        max="9999"
        label="Weight"
        dense
        outlined
        prepend-icon="fitness_center"
        :hint="weightHint"
        persistent-hint
      />
    </v-col>
    <v-col v-if="exerciseInputs.hasReps" class="col-6 col-sm-3">
      <v-text-field
        v-model="reps"
        @blur="saveChanges()"
        type="number"
        min="0"
        max="9999"
        label="Reps"
        dense
        outlined
        prepend-icon="filter_list"
        :hint="repsHint"
        persistent-hint
      />
    </v-col>
    <v-col v-if="exerciseInputs.hasDuration" class="col-6 col-sm-3">
      <v-text-field
        v-model="duration"
        @blur="saveChanges()"
        type="number"
        min="0"
        max="9999"
        label="Duration"
        dense
        outlined
        prepend-icon="history"
        :hint="durationHint"
        persistent-hint
      />
    </v-col>
    <v-col v-if="exerciseInputs.hasDistance" class="col-6 col-sm-3">
      <v-text-field
        v-model="distance"
        @blur="saveChanges()"
        type="number"
        min="0"
        max="9999"
        label="Distance"
        dense
        outlined
        prepend-icon="place"
        :hint="distanceHint"
        persistent-hint
      />
    </v-col>
  </v-row>
</template>
