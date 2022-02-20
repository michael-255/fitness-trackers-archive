import * as utils from '../../../src/utils/common.js'

describe('common.js', () => {
  describe('isUndef', () => {
    it('returns false with a value that exists', () => {
      expect(utils.isUndef(true)).toBe(false)
      expect(utils.isUndef(false)).toBe(false)
      expect(utils.isUndef('Hello')).toBe(false)
      expect(utils.isUndef('')).toBe(false)
      expect(utils.isUndef([])).toBe(false)
      expect(utils.isUndef({})).toBe(false)
    })

    it('returns true with a null or undefined value', () => {
      expect(utils.isUndef(null)).toBe(true)
      expect(utils.isUndef(undefined)).toBe(true)
    })
  })

  describe('isDef', () => {
    it('returns true with a value that exists', () => {
      expect(utils.isDef(true)).toBe(true)
      expect(utils.isDef(false)).toBe(true)
      expect(utils.isDef('Hello')).toBe(true)
      expect(utils.isDef('')).toBe(true)
      expect(utils.isDef([])).toBe(true)
      expect(utils.isDef({})).toBe(true)
    })

    it('returns false with a null or undefined value', () => {
      expect(utils.isDef(null)).toBe(false)
      expect(utils.isDef(undefined)).toBe(false)
    })
  })
})
