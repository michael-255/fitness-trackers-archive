<template lang="pug">
  v-container.mx-auto
    v-card(shaped)
      v-card-title Measurements

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
</template>

<script>
export default {
  name: "Measurements"
};
</script>


