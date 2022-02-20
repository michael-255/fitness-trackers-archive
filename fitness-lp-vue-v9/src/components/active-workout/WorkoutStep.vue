<template lang="pug">
  div
    v-stepper-step.pa-3( 
      :step="step"
      editable
    ) {{ name }}

    v-stepper-content.pl-0.pt-2.pr-12.ml-3(:step="step")
      Exercise(:exerciseId="exerciseId")
</template>

<script>
import Exercise from "./Exercise";

export default {
  name: "WorkoutStep",
  components: {
    Exercise
  },
  props: {
    step: {
      type: Number,
      required: true
    },
    exerciseId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>
