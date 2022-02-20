<template lang="pug">
  v-container.mx-auto
    v-stepper.pb-0(v-model="step" vertical non-linear)
    
      WorkoutStep(
        v-for="(exercise, i) in active.exercises"
        :key="i"
        :step="i+1"
        :exerciseId="exercise.id"
        :name="exercise.name"
      )

      SummaryStep(:step="active.exercises.length+1")

      v-container.d-flex
        v-spacer
        v-btn(@click.stop="confirm" rounded color="success" width="240")
          span Finish Workout
          v-icon(right) check
        v-spacer

    WorkoutFooter(:begin="active.begin")
</template>

<script>
import WorkoutStep from "../components/active-workout/WorkoutStep";
import SummaryStep from "../components/active-workout/SummaryStep";
import WorkoutFooter from "../components/active-workout/WorkoutFooter";

export default {
  name: "ActiveWorkout",
  components: {
    WorkoutStep,
    SummaryStep,
    WorkoutFooter
  },

  mounted() {
    if (!this.$store.state.active.id) {
      // No active workout to load, sending user back to Dashboard
      this.$router.push("/dashboard");
    }

    // Shuts the nav when starting a workout
    this.$store.dispatch("setDrawerActive", false);
  },

  methods: {
    confirm() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Finish Workout",
        content: `Saves the results of this workout into your records and
                  returns you to the Dashboard.`,
        action: "active/submit",
        route: { name: "Dashboard" }
      });
    }
  },

  computed: {
    step: {
      get() {
        return this.$store.state.active.step;
      },
      set(step) {
        this.$store.dispatch("active/setStep", step);
      }
    },

    active() {
      return this.$store.state.active;
    }
  }
};
</script>
