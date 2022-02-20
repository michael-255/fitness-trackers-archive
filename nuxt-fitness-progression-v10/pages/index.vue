<script>
import PAGE_HEAD from '../constants/page-head'

export default {
  name: 'WelcomePage',
  layout: 'primary-header-nav',
  head() {
    return {
      title: PAGE_HEAD.welcome.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: PAGE_HEAD.welcome.description,
        },
      ],
    }
  },
}
</script>

<template>
  <v-container>
    <h1>Home Page</h1>
  </v-container>
</template>
