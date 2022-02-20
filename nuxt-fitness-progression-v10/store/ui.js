const initDefaultUIState = () => {
  return {
    navDrawer: false,
  }
}

/* State must be a function for Nuxt */
export const state = () => initDefaultUIState()

export const mutations = {
  SET_NAV_DRAWER(state, payload) {
    state.navDrawer = payload
  },

  CLEAR_STATE(state) {
    Object.assign(state, initDefaultUIState())
  },
}

export const actions = {
  setNavDrawer({ state, commit }, drawerEvent) {
    if (!isNavDrawerStateChangeRedundant(state, drawerEvent)) {
      commit('SET_NAV_DRAWER', drawerEvent)
    }
  },

  toggleNavDrawer({ state, commit }) {
    commit('SET_NAV_DRAWER', !state.navDrawer)
  },
}

export const getters = {}

function isNavDrawerStateChangeRedundant(state, drawerEvent) {
  return state.navDrawer === drawerEvent
}
