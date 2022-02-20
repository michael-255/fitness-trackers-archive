<template lang="pug">
  v-card(shaped)
    v-card-title No Workouts Found

    v-card-subtitle Would you like to prefill the app with default data to start?

    v-card-text
      | Push the button below to load defaults for exercises and workouts. You
      | can also enter your own exercises and workouts into the app using the
      | options in the menu in the top left of the screen.
      
    v-card-actions
      v-container
        v-btn(@click.stop="confirm" rounded color="success" block)
          span Use Defaults
          v-icon(right) system_update_alt
</template>

<script>
export default {
  name: "DefaultCard",

  methods: {
    confirm() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Generate Defaults",
        content: `Creates default exercises and workouts for you. This will
                  overwrite any existing exercises or workouts you have saved.`,
        action: "initDefaults"
      });
    }
  }
};
</script>
