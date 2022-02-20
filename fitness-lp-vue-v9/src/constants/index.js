import { v4 as uuidv4 } from "uuid";

/**
 * Constant workout categories this app recognizes
 */
export const Category = Object.freeze({
  BACK: "Back",
  BICEPS: "Biceps",
  CARDIO: "Cardio",
  CHEST: "Chest",
  COMPOUND: "Compound",
  CORE: "Core",
  EVENT: "Event",
  LEGS: "Legs",
  MISC: "Miscellaneous",
  SHOULDERS: "Shoudlers",
  TRICEPS: "Triceps"
});

/**
 * Constant default exercises the app can initialize for the user
 */
export const DefaultExercises = Object.freeze({
  // New up additional default exercises in this array
  exercises: [
    // Cardio ------------------------------------------------------------------
    new Exercise({
      name: "Cardio & Conditioning",
      category: Category.CARDIO,
      desc:
        "Jogging, jumping jacks, mountain climbers, air squats and any other suitable cardio exercise with or without weights."
    }),
    new Exercise({
      name: "Warmup",
      category: Category.CARDIO,
      desc: "Spend a few minutes warming up."
    }),
    new Exercise({
      name: "Cooldown",
      category: Category.CARDIO,
      desc: "Spend a few minutes cooling down."
    }),
    // Miscellaneous -----------------------------------------------------------
    new Exercise({
      name: "Stretching",
      category: Category.MISC,
      desc: "Spend a few minutes stretching recently used muscles."
    }),
    // Chest -------------------------------------------------------------------
    new Exercise({
      name: "Flat Press, Barbell",
      category: Category.CHEST,
      desc: "Do 3-5 sets of 5-8 reps."
    }),
    new Exercise({
      name: "Incline Press, Barbell",
      category: Category.CHEST,
      desc: "Do 3-5 sets of 5-8 reps."
    }),
    new Exercise({
      name: "Decline Press, Barbell",
      category: Category.CHEST,
      desc: "Do 3-5 sets of 5-8 reps."
    }),
    new Exercise({
      name: "Pushups",
      category: Category.CHEST,
      desc: "Do 3-5 sets of 10-20 reps."
    }),
    // Shoulders ---------------------------------------------------------------
    new Exercise({
      name: "Front and Side Raises, Dumbbell",
      category: Category.SHOULDERS,
      desc: "Extend arms forward then outward. Do 3 sets of 8-10 reps."
    }),
    new Exercise({
      name: "Seated Military Press, Barbell",
      category: Category.SHOULDERS,
      desc: "Sit nearly upright and weight up. Do 3 sets of 5-8 reps."
    }),
    // Triceps -----------------------------------------------------------------
    new Exercise({
      name: "Skull Crushers",
      category: Category.TRICEPS,
      desc:
        "Lower weight behind head using elbows while laying down. Do 3 sets of 8 reps."
    }),
    new Exercise({
      name: "Tricep Kickbacks, Dumbbell",
      category: Category.TRICEPS,
      desc: "Lean over and straigthen elbos back. Do 3 sets of 8 reps."
    }),
    // Back --------------------------------------------------------------------
    new Exercise({
      name: "Bent Over Rows, Barbell",
      category: Category.BACK,
      desc: "Brace hard! Do 3-5 sets of 5-8 reps."
    }),
    new Exercise({
      name: "Shrugs, Barbell",
      category: Category.BACK,
      desc: "Do 3-5 sets of 5-8 reps."
    }),
    new Exercise({
      name: "Deadlifts, Barbell",
      category: Category.BACK,
      desc: "Brace hard! Do 3-5 sets of 5 reps."
    }),
    new Exercise({
      name: "Stiff Leg Deadlifts, Barbell",
      category: Category.BACK,
      desc: "Brace hard! Do 3-5 sets of 5-8 reps"
    }),
    new Exercise({
      name: "Pullups",
      category: Category.BACK,
      desc: "Do 3-5 sets of 8-10 reps."
    }),
    new Exercise({
      name: "Standing T-Rows, Barbell",
      category: Category.BACK,
      desc: "Do 3-5 sets of 8-10 reps."
    }),
    // Biceps ------------------------------------------------------------------
    new Exercise({
      name: "Overhand Curls, Dumbbell",
      category: Category.BICEPS,
      desc: "Do 3-5 sets of 8 reps."
    }),
    new Exercise({
      name: "Underhand Curls, Dumbbell",
      category: Category.BICEPS,
      desc: "Do 3-5 sets of 8 reps."
    }),
    new Exercise({
      name: "Hammer Curls, Dumbbell",
      category: Category.BICEPS,
      desc: "Do 3-5 sets of 8 reps."
    }),
    // Legs --------------------------------------------------------------------
    new Exercise({
      name: "Squats, Barbell",
      category: Category.LEGS,
      desc: "Brace hard! Do 3-5 sets of 5-8 reps."
    }),
    new Exercise({
      name: "Hip Thrusters, Barbell",
      category: Category.LEGS,
      desc: "Do 3-5 sets of 5-8 reps."
    }),
    // Core --------------------------------------------------------------------
    new Exercise({
      name: "Russian Twist, Dumbell",
      category: Category.LEGS,
      desc: "Do 3-5 sets of 20-30 reps."
    }),
    new Exercise({
      name: "Oblique Side Bends, Dumbell",
      category: Category.LEGS,
      desc:
        "Lower and lift weight along side of body with arms straight. Do 3-5 sets of 20-30 reps."
    })
  ]
});

/**
 * Constant default workouts the app can initialize for the user
 */
export const DefaultWorkouts = Object.freeze({
  // New up additional default workouts in this array
  workouts: [
    new Workout({
      name: "Cardio",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Cardio & Conditioning",
        "Cooldown",
        "Stretching"
      )
    }),
    new Workout({
      name: "Chest",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Flat Press, Barbell",
        "Incline Press, Barbell",
        "Pushups",
        "Cooldown",
        "Stretching"
      )
    }),
    new Workout({
      name: "Back",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Deadlifts, Barbell",
        "Bent Over Rows, Barbell",
        "Shrugs, Barbell",
        "Cooldown",
        "Stretching"
      )
    }),
    new Workout({
      name: "Arms & Shoulders",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Front and Side Raises, Dumbbell",
        "Skull Crushers",
        "Underhand Curls, Dumbbell",
        "Cooldown",
        "Stretching"
      )
    }),
    new Workout({
      name: "Legs & Core",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Squats, Barbell",
        "Hip Thrusters, Barbell",
        "Russian Twist, Dumbell",
        "Cooldown",
        "Stretching"
      )
    })
  ]
});

//##############################################################################
//##############################################################################
//###############   Helper Functions for Constants Below   #####################
//##############################################################################
//##############################################################################

/**
 * Object contructor for an Exercise - Uses destructured defaults
 * @param {Object} obj
 * @param {string} obj.name
 * @param {string} obj.category
 * @param {string} obj.desc
 * @param {boolean} obj.showDesc
 * @param {boolean} obj.hasConfirmation
 * @param {boolean} obj.hasSets
 * @param {boolean} obj.hasDuration
 * @param {boolean} obj.hasDistance
 * @param {boolean} obj.hasWeight
 * @param {boolean} obj.hasReps
 * @param {boolean} obj.hasNotes
 * @returns {Object} Exercise object
 */
function Exercise({
  name = "",
  category = Category.MISC,
  desc = "",
  showDesc = true,
  hasConfirmation = true,
  hasSets = true,
  hasDuration = true,
  hasDistance = true,
  hasWeight = true,
  hasReps = true,
  hasNotes = true
} = {}) {
  this.id = uuidv4();
  this.name = name;
  this.category = category;
  this.desc = desc;
  this.showDesc = showDesc;
  this.hasConfirmation = hasConfirmation;
  this.hasSets = hasSets;
  this.hasDuration = hasDuration;
  this.hasDistance = hasDistance;
  this.hasWeight = hasWeight;
  this.hasReps = hasReps;
  this.hasNotes = hasNotes;
}

/**
 * Object contructor for a Workout - Uses destructured defaults
 * @param {Object} obj
 * @param {string} obj.name
 * @param {string} obj.desc
 * @param {boolean} obj.showDesc
 * @param {Array} obj.exerciseIds
 * @returns {Object} Workout object
 */
function Workout({
  name = "",
  desc = "",
  showDesc = true,
  exerciseIds = []
} = {}) {
  this.id = uuidv4();
  this.name = name;
  this.desc = desc;
  this.showDesc = showDesc;
  this.exerciseIds = exerciseIds;
}

/**
 * Constants helper function - Populates exerciseIds for default workouts
 * @param {string} args Exercise name(s)
 * @returns {Array<string>} Exercise ids
 * @example
 * let ex = getWorkoutExerciseIds("Warmup", "Cooldown", "Stretching");
 */
function getWorkoutExerciseIds(...args) {
  return args.map(arg => getExerciseIdByName(arg));
}

/**
 * Constants helper function - Populates exerciseIds for default workouts
 * @param {string} name Name of a default exercise
 * @returns {string} Exercise id
 * @example
 * let ex = getExerciseIdByName("Warmup");
 */
function getExerciseIdByName(name) {
  const exerciseId = DefaultExercises.exercises.find(
    exercise => exercise.name === name
  ).id;

  if (exerciseId) {
    return exerciseId;
  }
}
