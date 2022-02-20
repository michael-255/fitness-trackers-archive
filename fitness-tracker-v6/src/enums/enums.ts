/**
 * Preferred measurement unit type
 */
export enum UnitPrefType {
  IMPERIAL = "Imperial",
  METRIC = "Metric"
}

/**
 * Conversion constants for Imperial and Metric measurements
 */
export enum ConvertConstant {
  KM_TO_MILE = 0.62137119,
  MILE_TO_KM = 1.609344,
  LBS_TO_KG = 0.45359237,
  KG_TO_LBS = 2.20462262185
}

/**
 * Categories that exercises can be grouped into
 */
export enum CategoryType {
  EVENT = "Event",
  CARDIO = "Cardio",
  MISC = "Miscellaneous",
  CHEST = "Chest",
  BACK = "Back",
  LEGS = "Legs",
  SHOULDERS = "Shoudlers",
  BICEPS = "Biceps",
  TRICEPS = "Triceps",
  CORE = "Core"
}

/**
 * Exercise objective to aim to meet
 */
export enum ObjectiveType {
  REST = "Rest",
  TEMPO = "Tempo",
  INTENSITY = "Intensity",
  RESISTENCE = "Resistence",
  INCLINE = "Incline",
  MAXIMUM = "Maximum",
  NOTES = "Notes"
}

/**
 * Material icons used in the project
 */
export enum Icon {
  REST = "hourglass_empty",
  TEMPO = "speed",
  INTENSITY = "whatshot",
  RESISTENCE = "fitness_center",
  INCLINE = "signal_cellular_null",
  MAXIMUM = "priority_high",
  NOTES = "assignment",
  CANCEL = "cancel",
  CALENDAR = "calendar_today",
  TIMER = "timer"
}

/**
 * Intesity objective values for an exercise
 */
export enum IntensityType {
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low"
}

/**
 * Tempo objective values for an exercise
 */
export enum TempoType {
  FAST = "Fast",
  NORMAL = "Normal",
  SLOW = "Slow"
}

/**
 * All available exercise names
 */
export enum ExerciseType {
  // CARDIO
  ELLIPTICAL_WARMUP = "Elliptical, Warmup",
  ELLIPTICAL_INTERVAL = "Elliptical, Intervals",
  STAIR_STEPPER = "Stair Stepper Machine",
  // MISC
  MISC_EXERCISE = "Miscellaneous Exercise",
  STRETCHING = "Stretching",
  // CHEST
  SMITH_FLAT_BENCH_PRESS = "Smith Flat Bench Press",
  SMITH_INCLINE_BENCH_PRESS = "Smith Incline Bench Press",
  SMITH_DECLINE_BENCH_PRESS = "Smith Decline Bench Press",
  DUMBBELL_FLAT_BENCH_PRESS = "Dumbbell Flat Bench Press",
  DUMBBELL_INCLINE_BENCH_PRESS = "Dumbbell Incline Bench Press",
  DUMBBELL_DECLINE_BENCH_PRESS = "Dumbbell Decline Bench Press",
  FLY_MACHINE_CHEST = "Fly Machine (Chest)",
  LAYING_OVERHEAD_STRAIGHT_ARMS = "Laying Overhead Straight Arms",
  CABLE_CHEST_SIDE_PULLS = "Cable Chest Side Pulls",
  // SHOULDERS
  DUMBBELL_SIDE_RAISES = "Dumbbell Side Raises",
  DUMBBELL_FRONT_RAISES = "Dumbbell Front Raises",
  DUMBBELL_FRONT_SIDE_RAISES = "Dumbbell Front & Side Raises",
  SHOULDER_PRESS_MACHINE = "Shoulder Press Machine",
  // TRICEPS
  SKULL_CRUSHERS = "Skull Crushers",
  STANDING_TRICEP_OVERHEAD_EXT = "Standing Tricep Overhead Extension",
  CABLE_TRICEP_PULLDOWNS = "Cable Tricep Pulldowns",
  TRICEP_PRESS_MACHINE = "Tricep Press Machine",
  // BACK
  SMITH_BENT_OVER_ROWS = "Smith Bent Over Rows",
  SMITH_SHRUGS = "Smith Shrugs",
  SMITH_STIFF_LEG_DEADLIFTS = "Smith Stiff Leg Deadlift",
  ASSISTED_PULL_UPS = "Assisted Pull-ups",
  SEATED_CABLE_PULLDOWNS = "Seated Cable Pulldowns",
  SEATED_CABLE_ROWS = "Seated Cable Rows",
  STANDING_T_ROWS = "Standing T-Rows",
  // BICEPS
  CABLE_OVERHAND_CURLS = "Cable Overhand Curls",
  CABLE_UNDERHAND_CURLS = "Cable Underhand Curls",
  CABLE_ROPE_CURLS = "Cable Rope Curls",
  DUMBBELL_OVERHAND_CURLS = "Dumbbell Overhand Curls",
  DUMBBELL_UNDERHAND_CURLS = "Dumbbell Underhand Curls",
  DUMBBELL_HAMMER_CURLS = "Dumbbell Hammer Curls",
  // LEGS
  LEG_PRESS_MACHINE = "Leg Press Machine",
  LEG_EXT_MACHINE = "Leg Extension Machine",
  LEG_CURL_MACHINE = "Leg Curl Machine",
  CALF_EXT_MACHINE = "Calf Extension Machine",
  STANDING_GLUTE_MACHINE = "Standing Glute Machine",
  HIP_ABDUCTION_MACHINE = "Hip Abduction (Out) Machine",
  HIP_ADDUCTION_MACHINE = "Hip Adduction (in) Machine",
  // CORE
  ABDOMINAL_CRUNCH_MACHINE = "Abdominal Crunch Machine",
  OBLIQUE_SIDE_BEND = "Oblique Side Bends"
}
