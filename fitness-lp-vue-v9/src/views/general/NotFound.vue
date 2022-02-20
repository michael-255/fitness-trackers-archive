<template lang="pug">
  v-container.mx-auto
    v-card(shaped)
      v-card-title 404 Page Not Found

      v-card-subtitle Please return to the dashboard.
      
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
