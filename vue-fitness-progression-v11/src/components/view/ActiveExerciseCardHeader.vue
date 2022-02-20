<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="pa-3">
    <div class="d-flex title">
      {{ name }}

      <v-spacer />

      <span class="body-2 text--disabled">
        {{ category.toUpperCase() }}
      </span>
    </div>

    <div class="d-flex overline">
      {{ equipment }}
    </div>

    <div class="body-2">
      <v-icon small>assignment</v-icon>
      {{ description }}
    </div>
  </div>
</template>
