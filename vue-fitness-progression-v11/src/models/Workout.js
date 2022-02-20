import _Activity from './_Activity.js'

export default class Workout extends _Activity {
  constructor({
    id,
    name,
    description,
    previousRecord,
    exerciseIds = [],
  } = {}) {
    super({ id, name, description, previousRecord })
    this.exerciseIds = exerciseIds
  }
}
