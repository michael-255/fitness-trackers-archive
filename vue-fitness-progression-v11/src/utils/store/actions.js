import ExerciseRecord from '../../models/ExerciseRecord.js'
import WorkoutRecord from '../../models/WorkoutRecord.js'
import { ENTITY } from '../../constants/globals.js'
import { LocalStorage } from './database.js'
import { createDefaultExercises, createDefaultWorkouts } from './defaults.js'

/**
 * Combined Store Actions - Core actions app can take
 */
export const combinedStoreActions = () => {
  return {
    async initApp({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.exercises}/initDatabase`),
        dispatch(`${ENTITY.workouts}/initDatabase`),
        dispatch(`${ENTITY.exerciseRecords}/initDatabase`),
        dispatch(`${ENTITY.workoutRecords}/initDatabase`),
        dispatch(`${ENTITY.activeExerciseRecords}/initDatabase`),
        dispatch(`${ENTITY.activeWorkoutRecords}/initDatabase`),
      ])
      await Promise.all([
        dispatch(`${ENTITY.exercises}/setStateWithDatabase`),
        dispatch(`${ENTITY.workouts}/setStateWithDatabase`),
        dispatch(`${ENTITY.exerciseRecords}/setStateWithDatabase`),
        dispatch(`${ENTITY.workoutRecords}/setStateWithDatabase`),
        dispatch(`${ENTITY.activeExerciseRecords}/setStateWithDatabase`),
        dispatch(`${ENTITY.activeWorkoutRecords}/setStateWithDatabase`),
      ])
    },
    async clearApp({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.exercises}/clearDatabase`),
        dispatch(`${ENTITY.workouts}/clearDatabase`),
        dispatch(`${ENTITY.exerciseRecords}/clearDatabase`),
        dispatch(`${ENTITY.workoutRecords}/clearDatabase`),
        dispatch(`${ENTITY.activeExerciseRecords}/clearDatabase`),
        dispatch(`${ENTITY.activeWorkoutRecords}/clearDatabase`),
        dispatch(`${ENTITY.exercises}/clearState`),
        dispatch(`${ENTITY.workouts}/clearState`),
        dispatch(`${ENTITY.exerciseRecords}/clearState`),
        dispatch(`${ENTITY.workoutRecords}/clearState`),
        dispatch(`${ENTITY.activeExerciseRecords}/clearState`),
        dispatch(`${ENTITY.activeWorkoutRecords}/clearState`),
      ])
    },
    async useDefaults({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.exercises}/setStateWithDefaults`),
        dispatch(`${ENTITY.workouts}/setStateWithDefaults`),
      ])
      await Promise.all([
        dispatch(`${ENTITY.exercises}/saveStateToDatabase`),
        dispatch(`${ENTITY.workouts}/saveStateToDatabase`),
      ])
    },
    async beginNewWorkout({ dispatch }, payload) {
      await Promise.all([
        dispatch(
          `${ENTITY.activeExerciseRecords}/createActiveRecordsForState`,
          payload.exerciseIds
        ),
        dispatch(
          `${ENTITY.activeWorkoutRecords}/createActiveRecordsForState`,
          payload.workoutId
        ),
      ])
      await Promise.all([
        dispatch(`${ENTITY.activeExerciseRecords}/saveStateToDatabase`),
        dispatch(`${ENTITY.activeWorkoutRecords}/saveStateToDatabase`),
      ])
    },
    async existingActiveWorkout({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.activeExerciseRecords}/setStateWithDatabase`),
        dispatch(`${ENTITY.activeWorkoutRecords}/setStateWithDatabase`),
      ])
    },
    async cancelWorkout({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.activeExerciseRecords}/clearDatabase`),
        dispatch(`${ENTITY.activeWorkoutRecords}/clearDatabase`),
        dispatch(`${ENTITY.activeExerciseRecords}/clearState`),
        dispatch(`${ENTITY.activeWorkoutRecords}/clearState`),
      ])
    },
    async finishWorkout({ dispatch, getters }) {
      const activeExerciseRecords = getters['activeExerciseRecords/getState']
      const activeWorkoutRecords = getters['activeWorkoutRecords/getState']

      // Update exercises previous records
      for (const record of activeExerciseRecords) {
        const payload = {
          recordId: record.exerciseId,
          recordData: record,
        }
        await dispatch(
          `${ENTITY.exercises}/updatePreviousRecordForState`,
          payload
        )
      }
      // Update workouts previous records
      for (const record of activeWorkoutRecords) {
        const payload = {
          recordId: record.workoutId,
          recordData: record,
        }
        await dispatch(
          `${ENTITY.workouts}/updatePreviousRecordForState`,
          payload
        )
      }

      await Promise.all([
        dispatch(
          `${ENTITY.exerciseRecords}/insertPayloadToState`,
          activeExerciseRecords
        ),
        dispatch(
          `${ENTITY.workoutRecords}/insertPayloadToState`,
          activeWorkoutRecords
        ),
      ])
      await Promise.all([
        dispatch(`${ENTITY.exercises}/saveStateToDatabase`),
        dispatch(`${ENTITY.workouts}/saveStateToDatabase`),
        dispatch(`${ENTITY.exerciseRecords}/saveStateToDatabase`),
        dispatch(`${ENTITY.workoutRecords}/saveStateToDatabase`),
      ])
      await Promise.all([
        dispatch(`${ENTITY.activeExerciseRecords}/clearDatabase`),
        dispatch(`${ENTITY.activeWorkoutRecords}/clearDatabase`),
        dispatch(`${ENTITY.activeExerciseRecords}/clearState`),
        dispatch(`${ENTITY.activeWorkoutRecords}/clearState`),
      ])
    },
    async updateActiveExerciseSet({ dispatch }, payload) {
      await dispatch('activeExerciseRecords/putPayloadToState', payload)
      await dispatch(`${ENTITY.activeExerciseRecords}/saveStateToDatabase`)
    },
  }
}

/**
 * Database Actions - LocalStorage usage here only!
 */
export const databaseActions = (defaultState, entity) => {
  return {
    async initDatabase() {
      LocalStorage.init(entity, defaultState[entity])
    },
    async saveStateToDatabase({ state }) {
      LocalStorage.overwrite(entity, state[entity])
    },
    async clearDatabase() {
      LocalStorage.clear(entity, defaultState[entity])
    },
    async setStateWithDatabase({ commit }) {
      commit('SET', LocalStorage.get(entity))
    },
  }
}

/**
 * Entity Actions
 */
export const entityActions = (entity) => {
  return {
    async clearState({ commit }) {
      commit('CLEAR_STATE')
    },
    async setStateWithDefaults({ commit }) {
      commit('SET', createDefaultsForEntity(entity))
    },
    async insertPayloadToState({ state, commit }, payload) {
      const combinedState = [...state[entity], ...payload]
      commit('SET', combinedState)
    },
    async putPayloadToState({ state, commit }, payload) {
      if (!Array.isArray(payload)) payload = [payload]

      const stateData = state[entity]

      payload.forEach((pl) => {
        const index = stateData.findIndex((i) => i.id === pl.id)

        if (index === -1) {
          stateData.push(pl)
        } else {
          stateData[index] = pl
        }
      })

      commit('SET', stateData)
    },
  }
}

function createDefaultsForEntity(entity) {
  switch (entity) {
    case ENTITY.exercises:
      return createDefaultExercises()
    case ENTITY.workouts:
      return createDefaultWorkouts()
    default:
      return null
  }
}

/**
 * Activity Actions (Exercises and Workouts)
 */
export const activityActions = (entity) => {
  return {
    async updatePreviousRecordForState({ state, commit }, payload) {
      const { recordId, recordData } = payload

      const stateData = state[entity]
      const index = state[entity].findIndex((i) => i.id === recordId)

      if (index !== -1) {
        stateData[index].previousRecord = recordData
        commit('SET', stateData)
      }
    },
  }
}

/**
 * Active Record Actions
 */
export const activeRecordActions = (entity) => {
  return {
    async createActiveRecordsForState({ commit }, ids) {
      const records = createEntityRecords(entity, ids)
      commit('SET', records)
    },
  }
}

function createEntityRecords(entity, ids) {
  if (!Array.isArray(ids)) ids = [ids] // Must be an array, even if only 1 element

  switch (entity) {
    case ENTITY.activeExerciseRecords:
    case ENTITY.exerciseRecords:
      return ids.map((id) => new ExerciseRecord({ exerciseId: id }))
    case ENTITY.activeWorkoutRecords:
    case ENTITY.workoutRecords:
      return ids.map((id) => new WorkoutRecord({ workoutId: id }))
    default:
      return null
  }
}
