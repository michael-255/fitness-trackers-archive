<script>
import NavDrawerListItem from './nav-drawer-list-item'

export default {
  name: 'NavDrawer',
  components: {
    NavDrawerListItem,
  },

  computed: {
    navDrawer: {
      get() {
        return this.$store.state.ui.navDrawer
      },
      set(drawer) {
        this.$store.dispatch('ui/setNavDrawer', drawer)
      },
    },
  },
}
</script>

<template>
  <v-navigation-drawer v-model="navDrawer" app clipped>
    <v-list nav>
      <NavDrawerListItem route="/" icon="dashboard" name="Dashboard" />

      <v-divider class="mb-2" />

      <NavDrawerListItem route="/test" icon="timeline" name="Charts" />
      <NavDrawerListItem route="/test" icon="assignment" name="Workouts" />
      <NavDrawerListItem route="/test" icon="fitness_center" name="Exercises" />
      <NavDrawerListItem route="/test" icon="straighten" name="Measurements" />
      <NavDrawerListItem route="/test" icon="sd_card" name="Records" />

      <v-divider class="mb-2" />

      <NavDrawerListItem route="/test" icon="info" name="About" />
      <NavDrawerListItem route="/test" icon="announcement" name="Test" />
    </v-list>
  </v-navigation-drawer>
</template>
