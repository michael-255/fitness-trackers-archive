/**
 *
 */
export default class ExporterSummary {
  constructor({
    appVersion = null,
    exporterVersion = null,
    createdAt = null,
    totalCategories = null,
    totalEquipment = null,
    totalWorkouts = null,
    totalWorkoutRecords = null,
    totalExercises = null,
    totalExerciseRecords = null,
    totalMeasurementRecords = null,
  } = {}) {
    this._appVersion = appVersion
    this._exporterVersion = exporterVersion
    this._createdAt = createdAt
    this._totalCategories = totalCategories
    this._totalEquipment = totalEquipment
    this._totalWorkouts = totalWorkouts
    this._totalWorkoutRecords = totalWorkoutRecords
    this._totalExercises = totalExercises
    this._totalExerciseRecords = totalExerciseRecords
    this._totalMeasurementRecords = totalMeasurementRecords
  }
}
