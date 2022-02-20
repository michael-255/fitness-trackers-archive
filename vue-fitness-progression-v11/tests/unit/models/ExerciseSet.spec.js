import ExerciseSet from '../../../src/models/ExerciseSet.js'

describe('ExerciseSet.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new ExerciseSet()
      expect(obj).toBeInstanceOf(ExerciseSet)
      expect(obj.weight).toEqual(0)
      expect(obj.reps).toEqual(0)
      expect(obj.duration).toEqual(0)
      expect(obj.distance).toEqual(0)
    })

    it('creates object with correct values', () => {
      const values = {
        weight: 75,
        reps: 15,
        duration: 35000,
        distance: 1.5,
      }
      const obj = new ExerciseSet(values)
      expect(obj).toBeInstanceOf(ExerciseSet)
      expect(obj).toMatchObject(values)
    })
  })
})
