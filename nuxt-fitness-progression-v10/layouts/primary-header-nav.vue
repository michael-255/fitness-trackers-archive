<script>
import PrimaryHeaderBar from '../components/primary-header-bar'
import NavDrawer from '../components/nav-drawer'

export default {
  name: 'PrimaryHeaderNavLayout',
  components: {
    PrimaryHeaderBar,
    NavDrawer,
  },
}
</script>

<template>
  <v-app>
    <PrimaryHeaderBar />
    <NavDrawer />

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
