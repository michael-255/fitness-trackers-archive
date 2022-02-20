import _Id from './_Id.js'

/**
 * 
 */
export default class _Record extends _Id {
  constructor({
    id = null,
    createdAt = null,
    note = null,
  } = {}) {
    super({ id })
    !createdAt ? this._initCreatedAt() : this._createdAt = createdAt
    this._note = note
  }

  get note() {
    return this._note
  }

  get createdAt() {
    return this._createdAt
  }

  set note(text) {
    this._note = text
  }
  set createdAt(date) {
    this._createdAt = date
  }

  _initCreatedAt() {
    this._createdAt = new Date()
  }
}