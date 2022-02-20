import Workout from '../classes/workout'
import defaultExercises from './default-exercises'

const defaultWorkouts = (function () {
  console.log('Generating default Workouts...')

  const exercises = defaultExercises

  function getExerciseIdsByExerciseNames(exerciseNamesArray) {
    return exerciseNamesArray.map((name) => getExerciseIdByName(name))
  }

  function getExerciseIdByName(exerciseName) {
    return exercises.find((exercise) => exercise.name === exerciseName).id
  }

  return [
    new Workout({
      name: 'Cardio Day',
      exerciseIds: getExerciseIdsByExerciseNames([
        'Warmup',
        'Cardio & Conditioning',
        'Cooldown',
        'Stretching',
      ]),
    }),
    new Workout({
      name: 'Chest Day',
      exerciseIds: getExerciseIdsByExerciseNames([
        'Warmup',
        'Flat Press, Barbell',
        'Incline Press, Barbell',
        'Pushups',
        'Cooldown',
        'Stretching',
      ]),
    }),
    new Workout({
      name: 'Back Day',
      exerciseIds: getExerciseIdsByExerciseNames([
        'Warmup',
        'Deadlifts, Barbell',
        'Bent Over Rows, Barbell',
        'Shrugs, Barbell',
        'Cooldown',
        'Stretching',
      ]),
    }),
    new Workout({
      name: 'Arms & Shoulders Day',
      exerciseIds: getExerciseIdsByExerciseNames([
        'Warmup',
        'Front and Side Raises, Dumbbell',
        'Skull Crushers',
        'Underhand Curls, Dumbbell',
        'Cooldown',
        'Stretching',
      ]),
    }),
    new Workout({
      name: 'Legs & Core Day',
      exerciseIds: getExerciseIdsByExerciseNames([
        'Warmup',
        'Squats, Barbell',
        'Hip Thrusters, Barbell',
        'Russian Twist, Dumbell',
        'Cooldown',
        'Stretching',
      ]),
    }),
  ]
})()

export default defaultWorkouts
