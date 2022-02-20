import _Entity from '../../../src/models/_Entity.js'

describe('_Entity.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Entity()
      expect(obj).toBeInstanceOf(_Entity)
      expect(typeof obj.id).toBe('string')
    })

    it('creates object with correct values', () => {
      const values = { id: 'ABC123' }
      const obj = new _Entity(values)
      expect(obj).toBeInstanceOf(_Entity)
      expect(obj).toMatchObject(values)
    })
  })
})
