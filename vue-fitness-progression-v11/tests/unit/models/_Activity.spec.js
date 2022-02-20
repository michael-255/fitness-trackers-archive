import _Activity from '../../../src/models/_Activity.js'

describe('_Activity.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Activity()
      expect(obj).toBeInstanceOf(_Activity)
      expect(typeof obj.id).toBe('string')
      expect(obj.name).toEqual('')
      expect(obj.description).toEqual('')
      expect(obj.previousRecord).toBeNull()
    })

    it('creates object with correct values', () => {
      class MockPreviousRecord {}
      const values = {
        id: 'ABC123',
        name: 'Test Name',
        description: 'Test description text.',
        previousRecord: new MockPreviousRecord(),
      }
      const obj = new _Activity(values)
      expect(obj).toBeInstanceOf(_Activity)
      expect(obj).toMatchObject(values)
    })
  })
})
