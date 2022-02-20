<script>
export default {
  props: {
    func: {
      type: Function,
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
  <v-list-item @click="func">
    <v-list-item-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      {{ name }}
    </v-list-item-content>
  </v-list-item>
</template>
