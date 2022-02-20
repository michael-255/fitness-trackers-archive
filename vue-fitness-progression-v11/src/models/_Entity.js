import { v4 as uuid } from 'uuid'

export default class _Entity {
  constructor({ id = uuid() } = {}) {
    this.id = id
  }
}
