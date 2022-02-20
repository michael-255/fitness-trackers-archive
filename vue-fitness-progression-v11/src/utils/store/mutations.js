export const entityMutations = (defaultState, entity) => {
  return {
    SET(state, payload) {
      state[entity] = payload
    },
    CLEAR_STATE(state) {
      Object.assign(state, defaultState)
    },
  }
}
