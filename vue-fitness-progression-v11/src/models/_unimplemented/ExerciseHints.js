export default class ExerciseHints {
  constructor({
    sets = '',
    weight = '',
    reps = '',
    duration = '',
    distance = '',
  } = {}) {
    this.sets = sets
    this.weight = weight
    this.reps = reps
    this.duration = duration
    this.distance = distance
  }
}
