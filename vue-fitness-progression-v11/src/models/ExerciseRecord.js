import _Record from './_Record.js'

export default class ExerciseRecord extends _Record {
  constructor({ id, createdAt, note, sets = [], exerciseId = null } = {}) {
    super({ id, createdAt, note })
    this.sets = sets
    this.exerciseId = exerciseId
  }
}
