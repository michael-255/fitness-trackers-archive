<template lang="pug">
  v-container.mx-auto(v-if="isArrayWithData(workouts)")
    v-row

      ResumeCard(
        v-if="active.id"
        :active="active"
      )
      
      WorkoutCard(
        v-for="workout in workouts"
        :key="workout.id"
        :workout="workout"
      )

  v-container.mx-auto(v-else)
    DefaultCard
</template>

<script>
import DefaultCard from "../components/dashboard/DefaultCard";
import ResumeCard from "../components/dashboard/ResumeCard";
import WorkoutCard from "../components/dashboard/WorkoutCard";
import { isArrayWithData } from "../helpers";

export default {
  name: "Dashboard",
  components: {
    DefaultCard,
    ResumeCard,
    WorkoutCard
  },
  data() {
    return {
      isArrayWithData
    };
  },

  computed: {
    active() {
      return this.$store.state.active;
    },

    workouts() {
      return this.$store.state.workout.workouts;
    }
  }
};
</script>
