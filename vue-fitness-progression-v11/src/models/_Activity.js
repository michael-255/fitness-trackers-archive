import _Entity from './_Entity.js'

export default class _Activity extends _Entity {
  constructor({ id, name = '', description = '', previousRecord = null } = {}) {
    super({ id })
    this.name = name
    this.description = description
    this.previousRecord = previousRecord
  }
}
