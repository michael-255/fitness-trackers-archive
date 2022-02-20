import _Record from '../../../src/models/_Record.js'

describe('_Record.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Record()
      expect(obj).toBeInstanceOf(_Record)
      expect(typeof obj.id).toBe('string')
      expect(typeof obj.createdAt).toBe('object') // May store as string later
      expect(obj.note).toEqual('')
    })

    it('creates object with correct values', () => {
      const values = {
        id: 'ABC123',
        createdAt: new Date(),
        note: 'Test note text.',
      }
      const obj = new _Record(values)
      expect(obj).toBeInstanceOf(_Record)
      expect(obj).toMatchObject(values)
    })
  })
})
