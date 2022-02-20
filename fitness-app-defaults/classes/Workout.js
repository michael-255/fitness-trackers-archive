import _Descriptors from './_Descriptors.js'
import ExerciseContainer from './ExerciseContainer.js'

/**
 * 
 */
export default class Workout extends _Descriptors {
  constructor({
    id = null,
    name = null,
    description = null,
    previousRecord = null,
    exercises = null,
  } = {}) {
    super({ id, name, description, previousRecord })
    this._exercises = new ExerciseContainer({ items: exercises })
  }

  get exercises() {
    return this._exercises
  }

  set exercises(exercises) {
    this._exercises = exercises
  }
}
