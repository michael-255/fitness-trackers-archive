/**
 * 
 */
export default class _Id {
  constructor({ id = null } = {}) {
    !id ? this._initId() : this._id = id
  }

  get id() {
    return this._id
  }

  _initId() {
    const randomStr = (this._getRandomString() + this._getRandomString())
    const generatedId = randomStr.padEnd(16, 'x').substr(0, 16)
    this._id = generatedId
  }

  _getRandomString() {
    return Math.random().toString(36).replace('0.', '')
  }
}
