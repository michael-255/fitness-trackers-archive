import * as utils from '../../../src/utils/limit-validators.js'

describe('limit-validators.js', () => {
  describe('isWithinStoredExercisesLimit', () => {
    it('returns false with invalid inputs', () => {
      expect(utils.isWithinStoredExercisesLimit(null)).toEqual(false)
      expect(utils.isWithinStoredExercisesLimit('X')).toEqual(false)
    })

    it('returns true with inputs less than the limit', () => {
      expect(utils.isWithinStoredExercisesLimit(0)).toEqual(true)
      expect(utils.isWithinStoredExercisesLimit(1999)).toEqual(true)
    })

    it('returns false with inputs over the limit', () => {
      expect(utils.isWithinStoredExercisesLimit(2000)).toEqual(false)
      expect(utils.isWithinStoredExercisesLimit(75000)).toEqual(false)
    })
  })

  describe('isWithinStoredWorkoutsLimit', () => {
    it('returns false with invalid inputs', () => {
      expect(utils.isWithinStoredWorkoutsLimit(null)).toEqual(false)
      expect(utils.isWithinStoredWorkoutsLimit('X')).toEqual(false)
    })

    it('returns true with inputs less than the limit', () => {
      expect(utils.isWithinStoredWorkoutsLimit(0)).toEqual(true)
      expect(utils.isWithinStoredWorkoutsLimit(199)).toEqual(true)
    })

    it('returns false with inputs over the limit', () => {
      expect(utils.isWithinStoredWorkoutsLimit(200)).toEqual(false)
      expect(utils.isWithinStoredWorkoutsLimit(75000)).toEqual(false)
    })
  })

  describe('isWithinWorkoutExercisesLimit', () => {
    it('returns false with invalid inputs', () => {
      expect(utils.isWithinWorkoutExercisesLimit(null)).toEqual(false)
      expect(utils.isWithinWorkoutExercisesLimit('X')).toEqual(false)
    })

    it('returns true with inputs less than the limit', () => {
      expect(utils.isWithinWorkoutExercisesLimit(0)).toEqual(true)
      expect(utils.isWithinWorkoutExercisesLimit(49)).toEqual(true)
    })

    it('returns false with inputs over the limit', () => {
      expect(utils.isWithinWorkoutExercisesLimit(50)).toEqual(false)
      expect(utils.isWithinWorkoutExercisesLimit(75000)).toEqual(false)
    })
  })

  describe('isWithinExerciseSetsLimit', () => {
    it('returns false with invalid inputs', () => {
      expect(utils.isWithinExerciseSetsLimit(null)).toEqual(false)
      expect(utils.isWithinExerciseSetsLimit('X')).toEqual(false)
    })

    it('returns true with inputs less than the limit', () => {
      expect(utils.isWithinExerciseSetsLimit(0)).toEqual(true)
      expect(utils.isWithinExerciseSetsLimit(49)).toEqual(true)
    })

    it('returns false with inputs over the limit', () => {
      expect(utils.isWithinExerciseSetsLimit(50)).toEqual(false)
      expect(utils.isWithinExerciseSetsLimit(75000)).toEqual(false)
    })
  })

  describe('isWithinNameLimit', () => {
    it('returns false with invalid inputs', () => {
      expect(utils.isWithinNameLimit(null)).toEqual(false)
      expect(utils.isWithinNameLimit('X')).toEqual(false)
    })

    it('returns true with inputs less than the limit', () => {
      expect(utils.isWithinNameLimit(0)).toEqual(true)
      expect(utils.isWithinNameLimit(49)).toEqual(true)
    })

    it('returns false with inputs over the limit', () => {
      expect(utils.isWithinNameLimit(50)).toEqual(false)
      expect(utils.isWithinNameLimit(75000)).toEqual(false)
    })
  })

  describe('isWithinDescriptionLimit', () => {
    it('returns false with invalid inputs', () => {
      expect(utils.isWithinDescriptionLimit(null)).toEqual(false)
      expect(utils.isWithinDescriptionLimit('X')).toEqual(false)
    })

    it('returns true with inputs less than the limit', () => {
      expect(utils.isWithinDescriptionLimit(0)).toEqual(true)
      expect(utils.isWithinDescriptionLimit(299)).toEqual(true)
    })

    it('returns false with inputs over the limit', () => {
      expect(utils.isWithinDescriptionLimit(300)).toEqual(false)
      expect(utils.isWithinDescriptionLimit(75000)).toEqual(false)
    })
  })

  describe('isWithinNoteLimit', () => {
    it('returns false with invalid inputs', () => {
      expect(utils.isWithinNoteLimit(null)).toEqual(false)
      expect(utils.isWithinNoteLimit('X')).toEqual(false)
    })

    it('returns true with inputs less than the limit', () => {
      expect(utils.isWithinNoteLimit(0)).toEqual(true)
      expect(utils.isWithinNoteLimit(599)).toEqual(true)
    })

    it('returns false with inputs over the limit', () => {
      expect(utils.isWithinNoteLimit(600)).toEqual(false)
      expect(utils.isWithinNoteLimit(75000)).toEqual(false)
    })
  })
})
