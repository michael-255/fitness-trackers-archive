import { mutations, actions } from './ui'

let commit
let state

beforeEach(() => {
  commit = jest.fn()
  state = {
    navDrawer: false,
  }
})

describe('Vuex Module > ui', () => {
  describe('MUTATIONS', () => {
    test('SET_NAV_DRAWER sets navDrawer to provided value', () => {
      state.navDrawer = true
      let payload = false
      mutations.SET_NAV_DRAWER(state, payload)
      expect(state.navDrawer).toEqual(payload)

      state.navDrawer = true
      payload = true
      mutations.SET_NAV_DRAWER(state, payload)
      expect(state.navDrawer).toEqual(payload)
    })

    test('clear state sets state to default', () => {
      state.navDrawer = true
      mutations.CLEAR_STATE(state)
      expect(state).toEqual({ navDrawer: false })
    })
  })

  describe('ACTIONS', () => {
    test('setNavDrawer calls correct mutation with provided value', () => {
      let payload = false
      actions.setNavDrawer({ state, commit }, payload)
      expect(commit).toHaveBeenCalledWith('SET_NAV_DRAWER', payload)

      payload = true
      actions.setNavDrawer({ state, commit }, payload)
      expect(commit).toHaveBeenCalledWith('SET_NAV_DRAWER', payload)
    })

    test('toggleNavDrawer calls correct mutation with provided value', () => {
      state.navDrawer = true
      actions.setNavDrawer({ state, commit })
      expect(commit).toHaveBeenCalledWith('SET_NAV_DRAWER', !state.navDrawer)

      state.navDrawer = false
      actions.setNavDrawer({ state, commit })
      expect(commit).toHaveBeenCalledWith('SET_NAV_DRAWER', !state.navDrawer)
    })
  })
})
