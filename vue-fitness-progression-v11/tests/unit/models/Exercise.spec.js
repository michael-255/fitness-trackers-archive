import Exercise from '../../../src/models/Exercise.js'

describe('Exercise.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new Exercise()
      expect(obj).toBeInstanceOf(Exercise)
      expect(typeof obj.id).toBe('string')
      expect(obj.name).toEqual('')
      expect(obj.description).toEqual('')
      expect(obj.previousRecord).toBeNull()
      expect(obj.category).toEqual('Miscellaneous')
      expect(obj.equipment).toEqual('')
      expect(obj.inputs).toEqual({
        hasDistance: false,
        hasDuration: false,
        hasReps: false,
        hasSets: false,
        hasWeight: false,
      })
    })

    it('creates object with correct values', () => {
      class MockExerciseInputs {}
      class MockPreviousRecord {}
      const values = {
        id: 'ABC123',
        name: 'Test Name',
        description: 'Test description text.',
        previousRecord: new MockPreviousRecord(),
        category: 'Cardio',
        equipment: 'Barbell',
        inputs: new MockExerciseInputs(),
      }
      const obj = new Exercise(values)
      expect(obj).toBeInstanceOf(Exercise)
      expect(obj).toMatchObject(values)
    })
  })
})
