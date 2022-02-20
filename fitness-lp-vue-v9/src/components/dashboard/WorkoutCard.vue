<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card
      v-card-title {{ workout.name }}
      
      v-card-subtitle {{ displayDate }}

      v-card-text
        Timer(:duration="duration")

      v-card-actions
        v-container
          v-btn(
            @click="startWorkout"
            color="primary"
            block
            rounded
          )
            span Begin Workout
            v-icon(right) play_arrow
</template>

<script>
import { DateTime } from "luxon";
import Timer from "../general-ui/Timer";

export default {
  name: "WorkoutCard",
  components: {
    Timer
  },
  props: {
    workout: {
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
    startWorkout() {
      this.$router.push({
        name: "ActiveWorkout",
        params: {
          name: this.workout.name.toLowerCase().replace(/ /g, "-")
        }
      });

      // Load workout after setting the route so you don't see the display swap
      this.$store.dispatch("active/start", {
        id: this.workout.id,
        name: this.workout.name,
        exerciseIds: this.workout.exerciseIds
      });
    }
  },

  computed: {
    mostRecent() {
      return this.$store.getters["workoutRecord/getMostRecentById"](
        this.workout.id
      );
    },

    duration() {
      return this.mostRecent ? this.mostRecent.duration : null;
    },

    displayDate() {
      const beginDT = this.mostRecent
        ? DateTime.fromISO(this.mostRecent.createdAt)
        : null;

      return this.mostRecent && beginDT
        ? `Previously completed ${beginDT.toLocaleString(DateTime.DATE_HUGE)}`
        : "No previous records found";
    }
  }
};
</script>
