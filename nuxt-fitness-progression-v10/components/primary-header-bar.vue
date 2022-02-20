<script>
export default {
  name: 'PrimaryHeaderBar',

  methods: {
    toggleNavDrawer() {
      this.$store.dispatch('ui/toggleNavDrawer')
    },
  },
}
</script>

<template>
  <v-app-bar app clipped-left color="secondary">
    <v-app-bar-nav-icon @click="toggleNavDrawer" />
    <v-toolbar-title>Fitness LP</v-toolbar-title>
  </v-app-bar>
</template>
