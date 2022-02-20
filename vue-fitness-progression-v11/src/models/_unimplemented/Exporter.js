/**
 *
 */
export default class Exporter {
  constructor({
    exportSummary = {}, // new ExporterSummary()?
    categories = [],
    equipment = [],
    workouts = [],
    workoutRecords = [],
    exercises = [],
    exerciseRecords = [],
    measurementRecords = [],
  } = {}) {
    this._exportSummary = exportSummary
    this._categories = categories
    this._equipment = equipment
    this._workouts = workouts
    this._workoutRecords = workoutRecords
    this._exercises = exercises
    this._exerciseRecords = exerciseRecords
    this._measurementRecords = measurementRecords
  }

  exportJson() {
    // Promise.all([...]) // Get all data exported seperately
    return {}
  }
}
