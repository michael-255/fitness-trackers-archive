// import Exporter from './Exporter.js'
import fs from 'fs'
import ExerciseContainer from './ExerciseContainer.js'
import Exercise from './Exercise.js'
import WorkoutContainer from './WorkoutContainer.js'
import Workout from './Workout.js'
import ExerciseInput from './ExerciseInput.js'
import { DEFAULT_EXERCISE, DEFAULT_EQUIPMENT } from '../constants/defaults.js'

/**
 * Postponed: extends Exporter
 */
export default class DefaultsGenerator {
  constructor() {
    this._exercises = new ExerciseContainer()
    this._workouts = new WorkoutContainer()
    this._initContainers()
  }

  get exercises() {
    return this._exercises
  }

  get workouts() {
    return this._workouts
  }

  _initContainers() {
    this._exercises.items = this._initExerciseContainer()
    this._workouts.items = this._initWorkoutContainer()
  }

  _initExerciseContainer() {
    return Object.values(DEFAULT_EXERCISE).map((exercise) => this._initExercise(exercise))
  }

  _initExercise(exercise) {
    const { name, description, category, equipment, inputs } = exercise

    return new Exercise({
      name,
      description,
      category,
      equipment,
      inputs: this._initExerciseInputs(inputs),
    })
  }

  _initExerciseInputs(inputs) {
    return inputs.map((input) => new ExerciseInput({
      inputType: input.inputType,
      hint: input.hint
    }))
  }

  _initWorkoutContainer() {
    return [
      new Workout({
        name: 'Chest #1',
        description: 'Chest focused workout version #1.',
        exercises: this._initChest1(),
      }),
      new Workout({
        name: 'Back #1',
        description: 'Back focused workout version #1.',
        exercises: this._initBack1(),
      }),
      new Workout({
        name: 'Legs #1',
        description: 'Legs focused workout version #1.',
        exercises: this._initLegs1(),
      }),
      new Workout({
        name: 'Arms and Shoulders #1',
        description: 'Arms and Shoulders focused workout version #1.',
        exercises: this._initArmsAndShoulders1(),
      }),
      new Workout({
        name: 'Core #1',
        description: 'Core focused workout version #1.',
        exercises: this._initCore1(),
      }),
    ]
  }

  _initChest1() {
    return [
      this._getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Bench Press', DEFAULT_EQUIPMENT.barbell),
      this._getExerciseByNameAndEquipment('Incline Bench Press', DEFAULT_EQUIPMENT.barbell),
      this._getExerciseByNameAndEquipment('Decline Bench Press', DEFAULT_EQUIPMENT.barbell),
      this._getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
    ]
  }

  _initBack1() {
    return [
      this._getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Bent Over Rows', DEFAULT_EQUIPMENT.barbell),
      this._getExerciseByNameAndEquipment('Stiff Leg Deadlift', DEFAULT_EQUIPMENT.barbell),
      this._getExerciseByNameAndEquipment('Bent Over Back Flyes', DEFAULT_EQUIPMENT.dumbbell),
      this._getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
    ]
  }

  _initLegs1() {
    return [
      this._getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Leg Curls', DEFAULT_EQUIPMENT.weightMachine),
      this._getExerciseByNameAndEquipment('Leg Extensions', DEFAULT_EQUIPMENT.weightMachine),
      this._getExerciseByNameAndEquipment('Squats', DEFAULT_EQUIPMENT.barbell),
      this._getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
    ]
  }

  _initArmsAndShoulders1() {
    return [
      this._getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Underhand Bicep Curls', DEFAULT_EQUIPMENT.dumbbell),
      this._getExerciseByNameAndEquipment('Tricep Pulldowns', DEFAULT_EQUIPMENT.cableMachine),
      this._getExerciseByNameAndEquipment('Front Arm Raises', DEFAULT_EQUIPMENT.dumbbell),
      this._getExerciseByNameAndEquipment('Side Arm Raises', DEFAULT_EQUIPMENT.dumbbell),
      this._getExerciseByNameAndEquipment('Diagonal Arm Raises', DEFAULT_EQUIPMENT.dumbbell),
      this._getExerciseByNameAndEquipment('Shrugs', DEFAULT_EQUIPMENT.barbell),
      this._getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
    ]
  }

  _initCore1() {
    return [
      this._getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Abdominal Crunch', DEFAULT_EQUIPMENT.cableMachine),
      this._getExerciseByNameAndEquipment('Russian Twist', DEFAULT_EQUIPMENT.dumbbell),
      this._getExerciseByNameAndEquipment('Alternating Torso Twist', DEFAULT_EQUIPMENT.cableMachine),
      this._getExerciseByNameAndEquipment('Oblique Side Bends', DEFAULT_EQUIPMENT.dumbbell),
      this._getExerciseByNameAndEquipment('Farmer\'s Walk', DEFAULT_EQUIPMENT.dumbbell),
      this._getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
      this._getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
    ]
  }

  _getExerciseByNameAndEquipment(name, equipment) {
    const exercises = new ExerciseContainer({
      items: this._exercises.findByName(name)
    })
    exercises.items = exercises.findByEquipment(equipment)
    return exercises.items[0] // Only return the first element
  }

  // Remove: Use Exporter method instead
  createJsonFile() {
    const jsonFileData = {
      exercises: this._exercises,
      workouts: this._workouts,
    }

    fs.writeFile('fitness-defaults-export.json', JSON.stringify(jsonFileData), (err) => {
      if (err) {
        throw err;
      }
    })
  }
}
