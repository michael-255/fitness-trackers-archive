import { LIMIT } from '../constants/globals.js'

export function isWithinStoredExercisesLimit(number) {
  return parseInt(number) < LIMIT.storedExercises
}

export function isWithinStoredWorkoutsLimit(number) {
  return parseInt(number) < LIMIT.storedWorkouts
}

export function isWithinWorkoutExercisesLimit(number) {
  return parseInt(number) < LIMIT.workoutExercises
}

export function isWithinExerciseSetsLimit(number) {
  return parseInt(number) < LIMIT.exerciseSets
}

export function isWithinNameLimit(number) {
  return parseInt(number) < LIMIT.name
}

export function isWithinDescriptionLimit(number) {
  return parseInt(number) < LIMIT.description
}

export function isWithinNoteLimit(number) {
  return parseInt(number) < LIMIT.note
}
