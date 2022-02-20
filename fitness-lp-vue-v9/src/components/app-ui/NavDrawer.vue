<template lang="pug">
  v-navigation-drawer(v-model="drawerActive" app clipped)
    v-list(nav)

      v-list-item(link to="/dashboard")
        v-list-item-action
          v-icon dashboard
        v-list-item-content Dashboard

      v-divider

      v-list-item(link to="/charts")
        v-list-item-action
          v-icon timeline
        v-list-item-content Charts

      v-list-item(link to="/workouts")
        v-list-item-action
          v-icon assignment
        v-list-item-content Workouts

      v-list-item(link to="/exercises")
        v-list-item-action
          v-icon fitness_center
        v-list-item-content Exercises

      v-list-item(link to="/measurements")
        v-list-item-action
          v-icon straighten
        v-list-item-content Measurements

      v-list-item(link to="/records")
        v-list-item-action
          v-icon sd_card
        v-list-item-content Records

      v-divider

      v-list-item(link to="/about")
        v-list-item-action
          v-icon info
        v-list-item-content About

      v-list-item(@click="test")
        v-list-item-action
          v-icon announcement
        v-list-item-content Testing
</template>

<script>
export default {
  name: "Drawer",

  computed: {
    drawerActive: {
      get() {
        return this.$store.state.isDrawerActive;
      },
      set(bool) {
        // This stops redundent state mutations for the drawer
        if (bool !== this.$store.state.isDrawerActive) {
          this.$store.dispatch("setDrawerActive", bool);
        }
      }
    }
  },

  /**
   * @todo Remove testing methods
   */
  methods: {
    test() {
      console.log("Testing nothing!");
    }
  }
};
</script>
