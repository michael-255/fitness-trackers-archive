<script>
export default {
  props: {
    inProgressExercise: {
      type: Object,
      required: true,
    },
    setNumber: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      weight: null,
      reps: null,
    }
  },

  computed: {
    exerciseId() {
      return this.inProgressExercise?.actionId
    },

    previousWeight() {
      return this.$store.getters
        .getPreviousExerciseWeightBySetAndId(this.setNumber, this.exerciseId)
        .toString()
    },

    previousReps() {
      return this.$store.getters
        .getPreviousExerciseRepsBySetAndId(this.setNumber, this.exerciseId)
        .toString()
    },
  },

  methods: {
    saveChanges() {
      const updatedRecord = this.inProgressExercise

      updatedRecord.data.sets[this.setNumber] = {
        weight: this.weight,
        reps: this.reps,
      }

      this.$store.dispatch('updateInProgressExercises', updatedRecord)
    },
  },
}
</script>

<template>
  <tr>
    <td class="px-1">
      <v-avatar size="32" color="info">{{ setNumber + 1 }}</v-avatar>
    </td>

    <td class="px-1">
      <v-text-field
        v-model="weight"
        @blur="saveChanges()"
        type="number"
        :label="previousWeight"
        dense
        outlined
        hide-details
        class="my-2"
      />
    </td>

    <td class="px-1">
      <v-text-field
        v-model="reps"
        @blur="saveChanges()"
        type="number"
        :label="previousReps"
        dense
        outlined
        hide-details
        class="my-2"
      />
    </td>
  </tr>
</template>
