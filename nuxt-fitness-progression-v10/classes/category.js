import { v4 as uuidv4 } from 'uuid'

export default class Category {
  constructor({ name = null, description = null } = {}) {
    this.id = uuidv4()
    this.name = name
    this.description = description
  }
}
