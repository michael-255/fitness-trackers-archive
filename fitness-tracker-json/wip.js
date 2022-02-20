"use strict";
const uuid = require("uuid");

const ENUMS = (function() {
  /**
   * Material icons used throughout the project
   */
  const Icon = {
    CALENDAR: "calendar_today",
    CANCEL: "cancel",
    INCLINE: "signal_cellular_null",
    INTENSITY: "whatshot",
    MAXIMUM: "priority_high",
    NOTES: "assignment",
    RESISTENCE: "fitness_center",
    REST: "hourglass_empty",
    TEMPO: "speed",
    TIMER: "timer"
  }

  /**
   * Categories for exercises
   */
  const Category = {
    BACK: "Back",
    BICEPS: "Biceps",
    CARDIO: "Cardio",
    CHEST: "Chest",
    CORE: "Core",
    EVENT: "Event",
    LEGS: "Legs",
    MISC: "Miscellaneous",
    SHOULDERS: "Shoudlers",
    TRICEPS: "Triceps"
  }

  /**
   * All available exercise names
   */
  const Exercise = {
    // CARDIO
    ELLIPTICAL_WARMUP: "Elliptical, Warmup",
    ELLIPTICAL_INTERVAL: "Elliptical, Intervals",
    STAIR_STEPPER: "Stair Stepper Machine",
    // MISC
    MISC_EXERCISE: "Miscellaneous Exercise",
    STRETCHING: "Stretching",
    // CHEST
    SMITH_FLAT_BENCH_PRESS: "Smith Flat Bench Press",
    SMITH_INCLINE_BENCH_PRESS: "Smith Incline Bench Press",
    SMITH_DECLINE_BENCH_PRESS: "Smith Decline Bench Press",
    DUMBBELL_FLAT_BENCH_PRESS: "Dumbbell Flat Bench Press",
    DUMBBELL_INCLINE_BENCH_PRESS: "Dumbbell Incline Bench Press",
    DUMBBELL_DECLINE_BENCH_PRESS: "Dumbbell Decline Bench Press",
    FLY_MACHINE_CHEST: "Fly Machine (Chest)",
    LAYING_OVERHEAD_STRAIGHT_ARMS: "Laying Overhead Straight Arms",
    CABLE_CHEST_SIDE_PULLS: "Cable Chest Side Pulls",
    // SHOULDERS
    DUMBBELL_SIDE_RAISES: "Dumbbell Side Raises",
    DUMBBELL_FRONT_RAISES: "Dumbbell Front Raises",
    DUMBBELL_FRONT_SIDE_RAISES: "Dumbbell Front & Side Raises",
    SHOULDER_PRESS_MACHINE: "Shoulder Press Machine",
    // TRICEPS
    SKULL_CRUSHERS: "Skull Crushers",
    STANDING_TRICEP_OVERHEAD_EXT: "Standing Tricep Overhead Extension",
    CABLE_TRICEP_PULLDOWNS: "Cable Tricep Pulldowns",
    TRICEP_PRESS_MACHINE: "Tricep Press Machine",
    // BACK
    SMITH_BENT_OVER_ROWS: "Smith Bent Over Rows",
    SMITH_SHRUGS: "Smith Shrugs",
    SMITH_STIFF_LEG_DEADLIFTS: "Smith Stiff Leg Deadlift",
    ASSISTED_PULL_UPS: "Assisted Pull-ups",
    SEATED_CABLE_PULLDOWNS: "Seated Cable Pulldowns",
    SEATED_CABLE_ROWS: "Seated Cable Rows",
    STANDING_T_ROWS: "Standing T-Rows",
    // BICEPS
    CABLE_OVERHAND_CURLS: "Cable Overhand Curls",
    CABLE_UNDERHAND_CURLS: "Cable Underhand Curls",
    CABLE_ROPE_CURLS: "Cable Rope Curls",
    DUMBBELL_OVERHAND_CURLS: "Dumbbell Overhand Curls",
    DUMBBELL_UNDERHAND_CURLS: "Dumbbell Underhand Curls",
    DUMBBELL_HAMMER_CURLS: "Dumbbell Hammer Curls",
    // LEGS
    LEG_PRESS_MACHINE: "Leg Press Machine",
    LEG_EXT_MACHINE: "Leg Extension Machine",
    LEG_CURL_MACHINE: "Leg Curl Machine",
    CALF_EXT_MACHINE: "Calf Extension Machine",
    STANDING_GLUTE_MACHINE: "Standing Glute Machine",
    HIP_ABDUCTION_MACHINE: "Hip Abduction (Out) Machine",
    HIP_ADDUCTION_MACHINE: "Hip Adduction (in) Machine",
    // CORE
    ABDOMINAL_CRUNCH_MACHINE: "Abdominal Crunch Machine",
    OBLIQUE_SIDE_BEND: "Oblique Side Bends"
  }

  // Reveal module properties
  return {
    Icon,
    Category,
    Exercise
  }
})();

class Exercise {
  constructor({
    name = null,
    category = null,
    desc = null,
    details = null
  }={}) {
    this.id = uuid.v4();
    this.name = name;
    this.category = category;
    this.desc = desc;
    this.details = details;
  }
}

class WeightExerciseDetails {
  constructor({
    highest_weight = null,
    most_weight = null,
    previous_sets = []
  }={}) {
    this.highest_weight = highest_weight;
    this.most_weight = most_weight;
    this.previous_sets = previous_sets;
  }
}

class CardioExerciseDetails {
  constructor({
    previous_cardio_date = null,
    previous_duration = null,
    previous_dist_steps = null,
  }={}) {
    this.previous_cardio_date = previous_cardio_date;
    this.previous_duration = previous_duration;
    this.previous_dist_steps = previous_dist_steps;
  }
}

class PreviousSet {
  constructor({
    weight = null, // Used for "highest_weight"
    reps = null,
    total_moved = null // Take weight * reps for "most_weight"
  }={}) {
    this.created_at = new Date().toISOString();
    this.weight = weight;
    this.reps = reps;
    this.total_moved = total_moved;
  }
}

class Routine {
  constructor({
    name = null,
    exercise_ids = []
  }={}) {
    this.id = uuid.v4();
    this.name = name;
    this.exercise_ids = exercise_ids;
  }
}
