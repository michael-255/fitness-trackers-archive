<template lang="pug">
  v-app
    Modals
    NavDrawer
    AppBar
    v-content
      router-view
</template>

<script>
import Modals from "./components/modals/Modals";
import NavDrawer from "./components/app-ui/NavDrawer";
import AppBar from "./components/app-ui/AppBar";

export default {
  name: "App",
  components: {
    Modals,
    AppBar,
    NavDrawer
  },

  created() {
    // Get all initial data for app ASAP
    this.$store.dispatch("initApp");
    this.$store.dispatch("testing");
  },

  computed: {
    isActiveWorkout() {
      return this.$route.name === "ActiveWorkout";
    }
  }
};
</script>
