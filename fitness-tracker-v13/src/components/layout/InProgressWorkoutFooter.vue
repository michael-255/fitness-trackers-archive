<script>
import { getDurationFromMilliseconds } from '../../utils/time.js'

export default {
  props: {
    createdAt: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      timerId: null,
      durationStr: '',
    }
  },

  created() {
    this.timerId = setInterval(() => {
      const now = new Date().getTime()
      const createdAt = this.$store.getters.getInProgressWorkoutCreatedAt
      this.durationStr = getDurationFromMilliseconds(now - createdAt)
    }, 1000)
  },

  destroyed() {
    clearInterval(this.timerId)
  },
}
</script>

<template>
  <v-footer app color="primary" height="40">
    <v-row>
      <v-spacer />
      <v-icon class="mr-1">timer</v-icon>
      <span>{{ durationStr }}</span>
      <v-spacer />
    </v-row>
  </v-footer>
</template>
