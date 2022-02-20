import Vue from 'vue'
import Vuex from 'vuex'
import * as exercises from './exercises.js'
import * as workouts from './workouts.js'
import * as exerciseRecords from './exercise-records.js'
import * as workoutRecords from './workout-records.js'
import * as activeExerciseRecords from './active-exercise-records.js'
import * as activeWorkoutRecords from './active-workout-records.js'
import { combinedStoreActions } from '../utils/store/actions.js'
import { combinedStoreGetters } from '../utils/store/getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    ...combinedStoreActions(),
  },
  getters: {
    ...combinedStoreGetters(),
  },
  modules: {
    exercises,
    workouts,
    activeExerciseRecords,
    activeWorkoutRecords,
    exerciseRecords,
    workoutRecords,
  },
})
