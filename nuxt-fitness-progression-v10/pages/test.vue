<script>
import PAGE_HEAD from '../constants/page-head'
import defaultCategories from '../utils/default-categories'
import defaultExercises from '../utils/default-exercises'
import defaultWorkouts from '../utils/default-workouts'

export default {
  name: 'TestPage',
  layout: 'primary-header-nav',

  methods: {
    printCategories() {
      console.log('Default Categories:', defaultCategories)
    },

    printExercises() {
      console.log('Default Exercises:', defaultExercises)
    },

    printWorkouts() {
      console.log('Default Workouts:', defaultWorkouts)
    },
  },

  head() {
    return {
      title: PAGE_HEAD.test.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: PAGE_HEAD.test.description,
        },
      ],
    }
  },
}
</script>

<template>
  <v-container>
    <h1>Test Page</h1>

    <v-btn @click="printCategories">
      Print Categories
    </v-btn>

    <v-btn @click="printExercises">
      Print Exercises
    </v-btn>

    <v-btn @click="printWorkouts">
      Print Workouts
    </v-btn>
  </v-container>
</template>
