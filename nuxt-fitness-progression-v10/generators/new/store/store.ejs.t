---
to: "store/<%= h.changeCase.kebab(name) %>.js"
---
const initDefaultState = () => {
  return {
    example: null
  }
}

/* State must be a function for Nuxt */
export const state = () => initDefaultState()

export const mutations = {
  SET_EXAMPLE(state, payload) {
    state.example = payload
  },

  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  }
}

export const actions = {
  setExample({ commit }, payload) {
    commit('SET_EXAMPLE', payload)
  }
}

export const getters = {}
