import { entityMutations } from '../utils/store/mutations.js'
import { databaseActions, entityActions } from '../utils/store/actions.js'
import { entityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

const entity = ENTITY.workoutRecords
const defaultState = () => ({ [entity]: [] })

export const namespaced = true
export const state = defaultState()
export const mutations = {
  ...entityMutations(defaultState(), entity),
}
export const actions = {
  ...databaseActions(defaultState(), entity),
  ...entityActions(entity),
}
export const getters = {
  ...entityGetters(entity),
}
