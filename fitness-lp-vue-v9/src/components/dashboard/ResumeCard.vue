<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card
      v-card-title {{ active.name }}
      
      v-card-subtitle.pb-1
        | Workout started on
        | {{ DateTime.fromISO(active.begin).toLocaleString(DateTime.DATE_HUGE) }}

      v-card-actions
        v-container
          v-btn(
            @click.stop="confirm"
            color="error"
            block
            rounded
          )
            span Discard Workout
            v-icon(right) delete

          v-btn.mt-4(
            @click="resumeWorkout"
            color="success"
            block
            rounded
          )
            span Resume Workout
            v-icon(right) directions_run
</template>

<script>
import { DateTime } from "luxon";

export default {
  name: "ResumeCard",
  props: {
    active: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      DateTime
    };
  },

  methods: {
    resumeWorkout() {
      this.$router.push({
        name: "ActiveWorkout",
        params: {
          name: this.active.name.toLowerCase().replace(/ /g, "-")
        }
      });
    },

    confirm() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Discard Workout",
        content: "Discards this workout and removes it from the Dashboard.",
        action: "active/cancel"
      });
    }
  }
};
</script>
