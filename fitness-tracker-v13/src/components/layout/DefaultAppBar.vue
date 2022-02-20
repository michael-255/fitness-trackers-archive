<script>
export default {
  methods: {
    toggleDrawer() {
      this.$store.dispatch('toggleDrawer')
    },
  },
}
</script>

<template>
  <v-app-bar app dark color="secondary">
    <v-app-bar-nav-icon @click="toggleDrawer" />

    <v-toolbar-title class="pl-1">Fitness Tracker</v-toolbar-title>

    <v-spacer />

    {{ new Date().toDateString() }}
  </v-app-bar>
</template>
