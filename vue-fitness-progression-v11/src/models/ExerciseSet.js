export default class ExerciseSet {
  constructor({ weight = 0, reps = 0, duration = 0, distance = 0 } = {}) {
    this.weight = weight
    this.reps = reps
    this.duration = duration
    this.distance = distance
  }
}
