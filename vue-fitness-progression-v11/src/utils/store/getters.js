import { ENTITY } from '../../constants/globals.js'

/**
 * Combined Getters - Common consolidated getters for the app
 */
export const combinedStoreGetters = () => {
  return {
    getActiveExercises(_, getters) {
      const activeWorkoutRecord =
        getters[`${ENTITY.activeWorkoutRecords}/getState`][0]

      let workoutId
      if (activeWorkoutRecord) workoutId = activeWorkoutRecord.workoutId

      let workout
      if (workoutId) workout = getters[`${ENTITY.workouts}/findById`](workoutId)

      let exerciseIds
      if (workout) exerciseIds = workout.exerciseIds

      let exercises
      if (exerciseIds) exercises = getters['exercises/filterByIds'](exerciseIds)

      if (exercises) return exercises
      return null
    },

    getActiveExerciseById: (_, getters) => (id) => {
      const exercise = getters[`${ENTITY.exercises}/findById`](id)

      if (exercise) return exercise
      return null
    },

    getActiveExerciseRecords(_, getters) {
      const activeExerciseRecords =
        getters[`${ENTITY.activeExerciseRecords}/getState`]

      if (activeExerciseRecords) return activeExerciseRecords
      return null
    },

    getActiveWorkoutName(_, getters) {
      const activeWorkoutRecord =
        getters[`${ENTITY.activeWorkoutRecords}/getState`][0]

      let workoutId
      if (activeWorkoutRecord) workoutId = activeWorkoutRecord.workoutId

      let workout
      if (workoutId) workout = getters[`${ENTITY.workouts}/findById`](workoutId)

      let workoutName
      if (workout) workoutName = workout.name

      if (workoutName) return workoutName
      return null
    },

    getActiveWorkoutRecordCreatedAt(_, getters) {
      const activeWorkoutRecord =
        getters[`${ENTITY.activeWorkoutRecords}/getState`][0]

      let createdAt
      if (activeWorkoutRecord) createdAt = activeWorkoutRecord.createdAt

      if (createdAt) return createdAt
      return null
    },

    getExerciseById: (_, getters) => (exerciseId) => {
      const exercises = getters[`${ENTITY.exercises}/getState`]

      const index = exercises.findIndex((i) => i.id === exerciseId)

      if (index !== -1) return exercises[index]
      return null
    },
  }
}

export const entityGetters = (entity) => {
  return {
    getState: (state) => state[entity],

    isStateReady(state) {
      return (
        state[entity] !== null &&
        state[entity] !== undefined &&
        Array.isArray(state[entity]) &&
        state[entity].length !== 0
      )
    },

    findById: (state) => (id) => {
      return state[entity].find((i) => i.id === id)
    },

    filterByIds: (state) => (ids) => {
      return ids.map((id) => {
        return state[entity].find((i) => i.id === id)
      })
    },
  }
}
