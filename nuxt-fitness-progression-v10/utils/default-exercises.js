import ACTIVITY_CATEGORY from '../constants/activity-category'
import Exercise from '../classes/exercise'
import defaultCategories from './default-categories'

const defaultExercises = (function () {
  console.log('Generating default Exercises...')

  const categories = defaultCategories

  function getCategoryIdByName(categoryName) {
    return categories.find((category) => category.name === categoryName).id
  }

  function addCardioExercises() {
    const category = getCategoryIdByName(ACTIVITY_CATEGORY.cardio)
    return [
      new Exercise({
        name: 'Cardio & Conditioning',
        category,
        description:
          'Jogging, jumping jacks, mountain climbers, air squats and any other suitable cardio exercise with or without weights.',
      }),
      new Exercise({
        name: 'Warmup',
        category,
        description: 'Spend a few minutes warming up.',
      }),
      new Exercise({
        name: 'Cooldown',
        category,
        description: 'Spend a few minutes cooling down.',
      }),
    ]
  }

  function addMiscellaneousExercises() {
    const category = getCategoryIdByName(ACTIVITY_CATEGORY.misc)
    return [
      new Exercise({
        name: 'Stretching',
        category,
        description: 'Spend a few minutes stretching recently used muscles.',
      }),
    ]
  }

  function addChestExercises() {
    const category = getCategoryIdByName(ACTIVITY_CATEGORY.chest)
    return [
      new Exercise({
        name: 'Flat Press, Barbell',
        category,
        description: 'Do 3-5 sets of 5-8 reps.',
      }),
      new Exercise({
        name: 'Incline Press, Barbell',
        category,
        description: 'Do 3-5 sets of 5-8 reps.',
      }),
      new Exercise({
        name: 'Decline Press, Barbell',
        category,
        description: 'Do 3-5 sets of 5-8 reps.',
      }),
      new Exercise({
        name: 'Pushups',
        category,
        description: 'Do 3-5 sets of 10-20 reps.',
      }),
    ]
  }

  function addShoulderExercises() {
    const category = getCategoryIdByName(ACTIVITY_CATEGORY.shoudlers)
    return [
      new Exercise({
        name: 'Front and Side Raises, Dumbbell',
        category,
        description:
          'Extend arms forward then outward. Do 3 sets of 8-10 reps.',
      }),
      new Exercise({
        name: 'Seated Military Press, Barbell',
        category,
        description: 'Sit nearly upright and weight up. Do 3 sets of 5-8 reps.',
      }),
    ]
  }

  function addTricepExercises() {
    const category = getCategoryIdByName(ACTIVITY_CATEGORY.triceps)
    return [
      new Exercise({
        name: 'Skull Crushers',
        category,
        description:
          'Lower weight behind head using elbows while laying down. Do 3 sets of 8 reps.',
      }),
      new Exercise({
        name: 'Tricep Kickbacks, Dumbbell',
        category,
        description:
          'Lean over and straigthen elbos back. Do 3 sets of 8 reps.',
      }),
    ]
  }

  function addBackExercises() {
    const category = getCategoryIdByName(ACTIVITY_CATEGORY.back)
    return [
      new Exercise({
        name: 'Bent Over Rows, Barbell',
        category,
        description: 'Brace hard! Do 3-5 sets of 5-8 reps.',
      }),
      new Exercise({
        name: 'Shrugs, Barbell',
        category,
        description: 'Do 3-5 sets of 5-8 reps.',
      }),
      new Exercise({
        name: 'Deadlifts, Barbell',
        category,
        description: 'Brace hard! Do 3-5 sets of 5 reps.',
      }),
      new Exercise({
        name: 'Stiff Leg Deadlifts, Barbell',
        category,
        description: 'Brace hard! Do 3-5 sets of 5-8 reps',
      }),
      new Exercise({
        name: 'Pullups',
        category,
        description: 'Do 3-5 sets of 8-10 reps.',
      }),
      new Exercise({
        name: 'Standing T-Rows, Barbell',
        category,
        description: 'Do 3-5 sets of 8-10 reps.',
      }),
    ]
  }

  function addBicepExercises() {
    const category = getCategoryIdByName(ACTIVITY_CATEGORY.biceps)
    return [
      new Exercise({
        name: 'Overhand Curls, Dumbbell',
        category,
        description: 'Do 3-5 sets of 8 reps.',
      }),
      new Exercise({
        name: 'Underhand Curls, Dumbbell',
        category,
        description: 'Do 3-5 sets of 8 reps.',
      }),
      new Exercise({
        name: 'Hammer Curls, Dumbbell',
        category,
        description: 'Do 3-5 sets of 8 reps.',
      }),
    ]
  }

  function addLegExercises() {
    const category = getCategoryIdByName(ACTIVITY_CATEGORY.legs)
    return [
      new Exercise({
        name: 'Squats, Barbell',
        category,
        description: 'Brace hard! Do 3-5 sets of 5-8 reps.',
      }),
      new Exercise({
        name: 'Hip Thrusters, Barbell',
        category,
        description: 'Do 3-5 sets of 5-8 reps.',
      }),
    ]
  }

  function addCoreExercises() {
    const category = getCategoryIdByName(ACTIVITY_CATEGORY.core)
    return [
      new Exercise({
        name: 'Russian Twist, Dumbell',
        category,
        description: 'Do 3-5 sets of 20-30 reps.',
      }),
      new Exercise({
        name: 'Oblique Side Bends, Dumbell',
        category,
        description:
          'Lower and lift weight along side of body with arms straight. Do 3-5 sets of 20-30 reps.',
      }),
    ]
  }

  return [
    ...addCardioExercises(),
    ...addMiscellaneousExercises(),
    ...addChestExercises(),
    ...addShoulderExercises(),
    ...addTricepExercises(),
    ...addBackExercises(),
    ...addBicepExercises(),
    ...addLegExercises(),
    ...addCoreExercises(),
  ]
})()

export default defaultExercises
