<script>
// Error Page is stored in layouts by Nuxt convention
export default {
  name: 'ErrorPage',
  layout: 'primary-header-nav',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'Sorry, an error occurred',
    }
  },

  head() {
    const title =
      this.error && this.error.statusCode === 404
        ? this.pageNotFound
        : this.otherError
    return {
      title,
    }
  },
}
</script>

<template>
  <v-container fill-height>
    <v-row>
      <v-col justify="center" align="center">
        <h1 v-if="error && error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>

        <NuxtLink to="/">
          Return To Home Page
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>
