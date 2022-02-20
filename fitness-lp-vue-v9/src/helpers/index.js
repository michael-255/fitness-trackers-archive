/**
 * Helpers functions to make frequently uses blocks of code more concise.
 *
 * USAGE: Import helper functions into JavaScript module, service, and index files.
 *
 * NOTE: Avoid using helpers in Vue components. Use Mixins instead.
 */
import { DateTime } from "luxon";

/**
 * Variable you expect to be an object with at least one property
 * @param object
 * @returns {boolean}
 */
export function isObjectWithData(object) {
  if (
    object !== null &&
    typeof object === "object" &&
    Object.keys(object) !== 0
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Variable you expect to be an array with a least one element
 * @param array
 * @returns {boolean}
 */
export function isArrayWithData(array) {
  if (Array.isArray(array) && array.length > 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Object constructor for an Exercise record - Uses destructured defaults
 * @param {Object} obj
 * @param {string} obj.exerciseId
 * @param {string} obj.notes
 * @param {boolean} obj.isConfirmed
 * @param {Array} obj.sets
 * @returns {Object} Exercise record object
 */
export function ExerciseRecord({
  createdAt = DateTime.local().toISO(),
  exerciseId = null,
  notes = "",
  isConfirmed = null,
  sets = []
} = {}) {
  this.createdAt = createdAt;
  this.exerciseId = exerciseId;
  this.notes = notes;
  this.isConfirmed = isConfirmed;
  this.sets = sets;
}

/**
 * Object constructor for a Workout record - Uses destructured defaults
 * @param {Object} obj
 * @param {string} obj.workoutId
 * @param {number} obj.duration
 * @returns {Object} Workout record object
 */
export function WorkoutRecord({
  createdAt = DateTime.local().toISO(),
  workoutId = null,
  duration = null
} = {}) {
  this.createdAt = createdAt;
  this.workoutId = workoutId;
  this.duration = duration;
}

/**
 * Object constructor for a Measurement record - Uses destructured defaults
 * @param {Object} obj
 * @param {number} obj.bodyWeight
 * @param {number} obj.bodyFat
 * @returns {Object} Measurement record object
 */
export function MeasurementRecord({
  createdAt = DateTime.local().toISO(),
  bodyWeight = null,
  bodyFat = null
} = {}) {
  this.createdAt = createdAt;
  this.bodyWeight = bodyWeight;
  this.bodyFat = bodyFat;
}

/**
 * Object constructor for a Set - Uses destructured defaults
 * @param {Object} obj
 * @param {number} obj.duration
 * @param {number} obj.distance
 * @param {number} obj.weight
 * @param {number} obj.reps
 * @returns {Object} A single set object
 */
export function ASet({
  duration = null,
  distance = null,
  weight = null,
  reps = null
} = {}) {
  this.duration = duration;
  this.distance = distance;
  this.weight = weight;
  this.reps = reps;
}
