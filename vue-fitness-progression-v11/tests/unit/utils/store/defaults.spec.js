import * as utils from '../../../../src/utils/store/defaults.js'

describe('defaults.js', () => {
  describe('createDefaultExercises', () => {
    it('returns the default exercises in an array', () => {
      const defaultExercises = utils.createDefaultExercises()
      expect(Array.isArray(defaultExercises)).toBe(true)
      expect(defaultExercises.length).toEqual(75)
    })
  })

  describe('createDefaultWorkouts', () => {
    it('returns the default workouts in an array', () => {
      const defaultWorkouts = utils.createDefaultWorkouts()
      expect(Array.isArray(defaultWorkouts)).toBe(true)
      expect(defaultWorkouts.length).toEqual(5)
    })
  })
})
