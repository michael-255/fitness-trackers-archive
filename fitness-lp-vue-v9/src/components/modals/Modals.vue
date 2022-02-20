<template lang="pug">
  div
    //- Dismissible
    v-dialog(v-model="modalActive" width="500" light)
      component(:is="modalComponent")

    //- Other modal types below if any...
    
</template>

<script>
export default {
  /**
   * Modals container
   */
  name: "Modals",
  components: {
    ConfirmAction: () => import("./dismissible/ConfirmAction")
  },

  computed: {
    modalActive: {
      get() {
        return this.$store.state.modal.isActive;
      },
      set() {
        this.$store.dispatch("modal/close");
      }
    },

    modalComponent() {
      return this.$store.state.modal.component;
    }
  }
};
</script>
