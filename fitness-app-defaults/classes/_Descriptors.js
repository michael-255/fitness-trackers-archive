import _Id from './_Id.js'

/**
 * 
 */
export default class _Descriptors extends _Id {
  constructor({
    id = null,
    name = null,
    description = null,
    previousRecord = null,
  } = {}) {
    super({ id })
    this._name = name
    this._description = description
    this._previousRecord = previousRecord
  }

  get name() {
    return this._name
  }

  get description() {
    return this._description
  }

  get previousRecord() {
    return this._previousRecord
  }

  set name(text) {
    this._name = text
  }

  set description(text) {
    this._description = text
  }

  set previousRecord(record) {
    this._previousRecord = record
  }
}
