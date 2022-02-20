import _Id from './_Id.js'

/**
 * 
 */
export default class ExerciseSet extends _Id {
  constructor({
    id = null,
    weight = null,
    reps = null,
    duration = null,
    distance = null,
  } = {}) {
    super({ id })
    this._weight = weight
    this._reps = reps
    this._duration = duration
    this._distance = distance
  }

  get weight() {
    return this._weight
  }

  get reps() {
    return this._reps
  }

  get duration() {
    return this._duration
  }

  get distance() {
    return this._distance
  }

  set weight(weight) {
    this._weight = weight
  }

  set reps(reps) {
    this._reps = reps
  }

  set duration(time) {
    this._duration = time
  }

  set distance(distance) {
    this._distance = distance
  }
}
