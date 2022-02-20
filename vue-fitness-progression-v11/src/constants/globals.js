export const CATEGORY = Object.freeze({
  arms: 'Arms',
  back: 'Back',
  biceps: 'Biceps',
  cardio: 'Cardio',
  chest: 'Chest',
  core: 'Core',
  legs: 'Legs',
  shoulders: 'Shoulders',
  triceps: 'Triceps',
  compound: 'Compound',
  misc: 'Miscellaneous',
  upperBody: 'Upper Body',
  lowerBody: 'Lower Body',
  fullBody: 'Full Body',
})

export const EQUIPMENT = Object.freeze({
  barbell: 'Barbell',
  dumbbell: 'Dumbbell',
  kettlebell: 'Kettlebell',
  plate: 'Plate',
  pullupBar: 'Pull-up Bar',
  machine: 'Machine',
  cableMachine: 'Cable Machine',
  cardioMachine: 'Cardio Machine',
  weightMachine: 'Weight Machine',
  weightVest: 'Weight Vest',
  bands: 'Resistance Bands',
  chains: 'Chains',
})

export const ICON = Object.freeze({
  sets: 'list',
  weight: 'fitness_center',
  reps: 'replay',
  duration: 'history',
  distance: 'place',
})

export const UNIT_PREF = Object.freeze({
  imperial: 'Imperial',
  metric: 'Metric',
})

export const UNIT_CONVERT = Object.freeze({
  kmToMi: 0.62137119,
  miToKm: 1.609344,
  lbsToKg: 0.45359237,
  kgToLbs: 2.20462262185,
  cmToIn: null,
  inToCm: null,
})

export const REGEX = Object.freeze({})

export const LIMIT = Object.freeze({
  storedExercises: 2000,
  storedWorkouts: 200,
  workoutExercises: 50,
  exerciseSets: 50,
  name: 50,
  description: 300,
  note: 600,
})

export const ADAPTER = Object.freeze({
  sessionStorage: 'SessionStorage',
  localStorage: 'LocalStorage',
  indexedDB: 'IndexedDB',
  firebase: 'Firebase',
})

export const ENTITY = Object.freeze({
  exercises: 'exercises',
  workouts: 'workouts',
  exerciseRecords: 'exerciseRecords',
  workoutRecords: 'workoutRecords',
  activeExerciseRecords: 'activeExerciseRecords',
  activeWorkoutRecords: 'activeWorkoutRecords',
})

const layout = 'Layout'

export const LAYOUT = Object.freeze({
  default: 'Default' + layout,
  activeWorkout: 'ActiveWorkout' + layout,
})

const view = 'View'

export const VIEW = Object.freeze({
  notFound: 'NotFound' + view,
  login: 'Login' + view,
  dashboard: 'Dashboard' + view,
  activeWorkout: 'ActiveWorkout' + view,
})
