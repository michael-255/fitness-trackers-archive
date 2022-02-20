<template lang="pug">
  v-card
    v-card-title {{ title }}

    v-card-text {{ content }}

    v-divider

    v-card-actions
      v-spacer
      v-btn(@click.stop="$store.dispatch('modal/close')" text)
        span Cancel
      v-btn(@click.stop="confirm" color="warning")
        span Confirm
</template>

<script>
export default {
  name: "ConfirmAction",

  methods: {
    confirm() {
      // Modal confirmed by user
      const { action, route } = this.$store.state.modal;

      this.$store.dispatch(action);
      this.$store.dispatch("modal/close");

      if (route) {
        this.$router.replace(route);
      }
    }
  },

  computed: {
    title() {
      return this.$store.state.modal.title;
    },

    content() {
      return this.$store.state.modal.content;
    }
  }
};
</script>
