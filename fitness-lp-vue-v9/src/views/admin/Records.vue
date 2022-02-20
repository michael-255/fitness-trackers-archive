<template lang="pug">
  v-container.mx-auto
    v-card(shaped)
      v-card-title Records

      v-card-subtitle Create, Read, Update, and Delete operations to be implemented...

      v-card-text This area can contain all the reacords for this item (Read).
      
      v-card-actions
        v-container
          v-btn(color="success" rounded)
            span Create
            v-icon(right) add

          v-btn(color="warning" rounded)
            span Update
            v-icon(right) create

          v-btn(color="error" rounded)
            span Delete
            v-icon(right) delete_forever

          v-btn(@click="confirm" color="error" rounded)
            span Clear All Data
            v-icon(right) delete_sweep
</template>

<script>
export default {
  name: "Records",

  methods: {
    confirm() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Delete Stored Data",
        content: `This will remove all stored data for exercises, workouts, and
                  any current workout.`,
        action: "deleteStorage",
        route: { name: "Dashboard" }
      });
    }
  }
};
</script>
