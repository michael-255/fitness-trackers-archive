import { entityMutations } from '../utils/store/mutations.js'
import { databaseActions, entityActions } from '../utils/store/actions.js'
import { entityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

// const LocalStorage = {}

const entity = ENTITY.exerciseRecords
const defaultState = () => ({ [entity]: [] })

export const namespaced = true
export const state = defaultState()
export const mutations = {
  ...entityMutations(defaultState(), entity),
}
export const actions = {
  ...databaseActions(defaultState(), entity),
  // ...((defaultState, LocalStorage, entity) => {
  //   return {
  //     async initDatabase() {
  //       LocalStorage.init(entity, defaultState[entity])
  //     },
  //     async saveStateToDatabase({ state }) {
  //       LocalStorage.overwrite(entity, state[entity])
  //     },
  //     async clearDatabase() {
  //       LocalStorage.clear(entity, defaultState[entity])
  //     },
  //     async setStateWithDatabase({ commit }) {
  //       commit('SET', LocalStorage.get(entity))
  //     },
  //   }
  // })(defaultState(), LocalStorage, entity),
  ...entityActions(entity),
}
export const getters = {
  ...entityGetters(entity),
}
