import { v4 as uuidv4 } from 'uuid'

export default class Workout {
  constructor({
    name = null,
    description = null,
    showDesc = true,
    exerciseIds = [],
  } = {}) {
    this.id = uuidv4()
    this.name = name
    this.description = description
    this.showDesc = showDesc
    this.exerciseIds = exerciseIds
  }
}
