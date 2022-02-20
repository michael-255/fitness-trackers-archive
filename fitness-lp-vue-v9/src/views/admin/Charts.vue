<template lang="pug">
  v-container.mx-auto
    v-card(shaped)
      v-card-title Charts

      v-card-subtitle Sorry, charts have not been implemented yet.
      
      v-card-actions
        v-container
          v-btn(to="/" color="primary" rounded)
            span Dashboard
            v-icon(right) dashboard
</template>

<script>
export default {
  name: "About"
};
</script>
