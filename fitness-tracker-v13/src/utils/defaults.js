import { Measurement, Exercise, Workout } from '../models/Entities.js'

/**
 * Using pre-generated ids so new default measurements, exercises, and workouts
 * can be added without breaking any record data that users may already have in
 * the app.
 */
const DEFAULT_IDS = Object.freeze({
  measurements: {
    0: 'MLZ-5VD-XF2',
    1: 'QE4-R7H-RDQ',
    2: '0SY-OC4-V37',
    3: 'O6F-OW4-Y95',
    4: 'NSS-JWK-IFT',
    5: '2R5-3OC-XCS',
    6: 'SEG-7BT-Q8Y',
    7: '7AU-B55-Y8G',
    8: 'S33-1KZ-9WJ',
    9: '8KA-SAT-L4P',
    10: 'I37-RJC-0DM',
    11: '3XD-K32-A13',
    12: '8WE-7M2-IS2',
    13: 'NLM-FIG-XPM',
    // Add new measurement ids here...
  },
  exercises: {
    0: 'KSJ-T7H-NJ1',
    1: '2ON-P4G-YGZ',
    2: '8BH-A4O-4D6',
    3: '822-SIE-1YR',
    4: 'QZW-L12-AZG',
    // Add new exercise ids here...
  },
  workouts: {
    0: 'L8E-0EO-PPY',
    1: 'GX2-Z09-CFW',
    // Add new workout ids here...
  },
})

const Defaults = {
  /**
   * Returns default measurement options with constant ids.
   * Only add new options below current ones to ensure ids are not changed.
   */
  getMeasurements() {
    return [
      new Measurement({
        id: DEFAULT_IDS.measurements[0],
        name: 'Body Weight',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[1],
        name: 'Body Fat',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[2],
        name: 'Neck',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[3],
        name: 'Shoulders',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[4],
        name: 'Chest',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[5],
        name: 'Left Biceps',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[6],
        name: 'Right Biceps',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[7],
        name: 'Left Forearms',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[8],
        name: 'Right Forearms',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[9],
        name: 'Waist',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[10],
        name: 'Left Thighs',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[11],
        name: 'Right Thighs',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[12],
        name: 'Left Calves',
      }),
      new Measurement({
        id: DEFAULT_IDS.measurements[13],
        name: 'Right Calves',
      }),
      // Add new Measurements here...
    ]
  },

  /**
   * Returns default exercise options with constant ids.
   * Only add new options below current ones to ensure ids are not changed.
   */
  getExercises() {
    return [
      new Exercise({
        id: DEFAULT_IDS.exercises[0],
        name: 'Barbell Squats',
        inputs: { setCount: 5 },
      }),
      new Exercise({
        id: DEFAULT_IDS.exercises[1],
        name: 'Barbell Bench Press',
        inputs: { setCount: 5 },
      }),
      new Exercise({
        id: DEFAULT_IDS.exercises[2],
        name: 'Barbell Rows',
        inputs: { setCount: 5 },
      }),
      new Exercise({
        id: DEFAULT_IDS.exercises[3],
        name: 'Barbell Overhead Press',
        inputs: { setCount: 5 },
      }),
      new Exercise({
        id: DEFAULT_IDS.exercises[4],
        name: 'Deadlift',
        inputs: { setCount: 1 },
      }),
      // Add new Exercises here...
    ]
  },

  /**
   * Returns default workouts with constant ids (requires default exercises).
   * Only add new options below current ones to ensure ids are not changed.
   */
  getWorkouts() {
    const defaultExercises = this.getExercises()

    const getExerciseIdByName = (name) => {
      return defaultExercises.find((de) => de.name === name).id
    }

    return [
      new Workout({
        id: DEFAULT_IDS.workouts[0],
        name: 'StrongLifts 5x5 - Alpha',
        exerciseIds: [
          getExerciseIdByName('Barbell Squats'),
          getExerciseIdByName('Barbell Bench Press'),
          getExerciseIdByName('Barbell Rows'),
        ],
      }),
      new Workout({
        id: DEFAULT_IDS.workouts[1],
        name: 'StrongLifts 5x5 - Beta',
        exerciseIds: [
          getExerciseIdByName('Barbell Squats'),
          getExerciseIdByName('Barbell Overhead Press'),
          getExerciseIdByName('Deadlift'),
        ],
      }),
      // Add new Workouts here...
    ]
  },
}

export default Defaults
