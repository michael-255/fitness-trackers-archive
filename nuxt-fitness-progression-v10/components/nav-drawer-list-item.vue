<script>
export default {
  name: 'NavDrawerListItem',
  props: {
    route: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <v-list-item link :to="route">
    <v-list-item-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      {{ name }}
    </v-list-item-content>
  </v-list-item>
</template>
