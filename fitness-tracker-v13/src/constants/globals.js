/**
 * Used as a prefix for Local Storage fields to make them unique.
 */
export const DATA_VERSION = Object.freeze('fitdata-v3')

// Entity Types - For  basic type checking.

export const OPERATION_TYPE = Object.freeze({
  InitOperation: 'InitOperation',
  LoadOperation: 'LoadOperation',
  CreateOperation: 'CreateOperation',
  UpdateOperation: 'UpdateOperation',
  RemoveOperation: 'RemoveOperation',
  ClearOperation: 'ClearOperation',
})

export const ACTION_TYPE = Object.freeze({
  Measurement: 'Measurement',
  Exercise: 'Exercise',
  Workout: 'Workout',
})

export const RECORD_TYPE = Object.freeze({
  MeasurementRecord: 'MeasurementRecord',
  ExerciseRecord: 'ExerciseRecord',
  WorkoutRecord: 'WorkoutRecord',
})

export const TYPE = Object.freeze({
  ...OPERATION_TYPE,
  ...ACTION_TYPE,
  ...RECORD_TYPE,
})

// Entity Sources - Key names for State and Local Storage sources.

export const ACTION_SOURCE = Object.freeze({
  measurements: 'measurements',
  exercises: 'exercises',
  workouts: 'workouts',
})

export const INPROGRESS_SOURCE = Object.freeze({
  measurementsInProgress: 'measurementsInProgress',
  exercisesInProgress: 'exercisesInProgress',
  workoutsInProgress: 'workoutsInProgress',
})

export const RECORD_SOURCE = Object.freeze({
  measurementRecords: 'measurementRecords',
  exerciseRecords: 'exerciseRecords',
  workoutRecords: 'workoutRecords',
})

export const SOURCE = Object.freeze({
  ...ACTION_SOURCE,
  ...INPROGRESS_SOURCE,
  ...RECORD_SOURCE,
})

// UI Components

const layout = 'Layout'

export const LAYOUT = Object.freeze({
  default: 'Default' + layout,
  inProgressWorkout: 'inProgressWorkout' + layout,
  measurements: 'measurements' + layout,
})

const view = 'View'

export const VIEW = Object.freeze({
  notFound: 'NotFound' + view,
  dashboard: 'Dashboard' + view,
  inProgressWorkout: 'inProgressWorkout' + view,
  measurements: 'measurements' + view,
})
