<template lang="pug">
  div
    v-stepper-step.pa-3(
      :step="step"
      editable
    ) Summary

    v-stepper-content.pl-0.pt-2.pr-12.ml-3(:step="step")
      v-card
        v-card-title Summary of Workout
        v-card-subtitle Progress graph, current duration, etc...
</template>

<script>
export default {
  name: "SummaryStep",
  props: {
    step: {
      type: Number,
      required: true
    }
  }
};
</script>
