import _Entity from './_Entity.js'

export default class _Record extends _Entity {
  constructor({ id, createdAt = new Date(), note = '' } = {}) {
    super({ id })
    this.createdAt = createdAt
    this.note = note
  }
}
