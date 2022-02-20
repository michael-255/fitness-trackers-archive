<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
  
    v-app-bar-nav-icon(@click="toggleDrawer")

    //- App
    span(v-if="!isActiveWorkout")
      //- Alter what is shown based on device size
      v-toolbar-title.d-sm-none Fitness LP
      v-toolbar-title.d-none.d-sm-flex Fitness Linear Progression

    //- Active Workout
    span(v-else)
      //- Alter what is shown based on device size
      .mt-1.text-no-wrap.d-sm-none {{ active.name }}
      .mt-1.text-no-wrap.d-none.d-sm-flex {{ active.name }}

    v-spacer

    //- App
    span(v-if="!isActiveWorkout")
      span.d-sm-none {{ DateTime.local().toLocaleString() }}
      span.d-none.d-sm-flex {{ DateTime.local().toLocaleString(DateTime.DATE_HUGE) }}

    //- Active Workout
    v-btn(v-else @click.stop="confirm" icon absolute right)
      v-icon clear
</template>

<script>
import { DateTime } from "luxon";

export default {
  name: "AppBar",
  data() {
    return {
      DateTime
    };
  },

  methods: {
    toggleDrawer() {
      this.$store.dispatch("toggleDrawer");
    },

    confirm() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Cancel Workout",
        content: `Cancels and discards this workout and returns you to the
                  Dashboard.`,
        action: "active/cancel",
        route: { name: "Dashboard" }
      });
    }
  },

  computed: {
    isActiveWorkout() {
      return this.$route.name === "ActiveWorkout";
    },

    active() {
      return this.$store.state.active;
    }
  }
};
</script>
