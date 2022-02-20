---
to: "store/<%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  const fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName)
%>
import { mutations, actions } from './<%= fileName %>'

let state
let commit

beforeEach(() => {
  commit = jest.fn()
  state = {
    example: null,
  }
})

describe('Vuex Module > <%= fileName %>', () => {
  describe('MUTATIONS', () => {
    test('set example', () => {
      const payload = 'testing'
      mutations.SET_EXAMPLE(state, payload)
      expect(state.example).toBe(payload)
    })

    test('clear state', () => {
      state.example = 'testing clear state'
      mutations.CLEAR_STATE(state)
      expect(state).toEqual({example: null})
    })
  })

  describe('ACTIONS', () => {
    test('calls example commit correctly', () => {
      const payload = 'testing'
      actions.setExample({ commit }, payload)
      expect(commit).toHaveBeenCalledWith('SET_EXAMPLE', payload)
    })
  })
})
