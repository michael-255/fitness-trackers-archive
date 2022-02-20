export default class ExerciseInputs {
  constructor({
    hasSets = false,
    hasWeight = false,
    hasReps = false,
    hasDuration = false,
    hasDistance = false,
  } = {}) {
    this.hasSets = !!hasSets
    this.hasWeight = !!hasWeight
    this.hasReps = !!hasReps
    this.hasDuration = !!hasDuration
    this.hasDistance = !!hasDistance
  }
}
