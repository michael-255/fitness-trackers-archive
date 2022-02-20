"use strict";
const uuid = require("uuid");

// CONSTANTS ###################################################################
const KM_TO_MILE = 0.62137119;
const MILE_TO_KM = 1.609344;
const LBS_TO_KG = 0.45359237;
const KG_TO_LBS = 2.20462262185;

const UnitPrefType = {
  IMPERIAL: "Imperial",
  METRIC: "Metric"
}

const CategoryType = {
  EVENT: "Event",
  CARDIO: "Cardio",
  MISC: "Miscellaneous",
  CHEST: "Chest",
  BACK: "Back",
  LEGS: "Legs",
  SHOULDERS: "Shoudlers",
  BICEPS: "Biceps",
  TRICEPS: "Triceps",
  CORE: "Core"
}

const ObjectiveType = {
  REST: "Rest",
  TEMPO: "Tempo",
  INTENSITY: "Intensity",
  RESISTENCE: "Resistence",
  INCLINE: "Incline",
  MAXIMUM: "Maximum"
}

const Icon = {
  NOTES: "assignment",
  REST: "hourglass_empty",
  TEMPO: "speed",
  INTENSITY: "whatshot",
  RESISTENCE: "fitness_center",
  INCLINE: "signal_cellular_null",
  MAXIMUM: "priority_high"
}

const IntensityType = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low"
}

const TempoType = {
  FAST: "Fast",
  NORMAL: "Normal",
  SLOW: "Slow"
}

const ExerciseType = {
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

// HELPER FUNCTIONS ############################################################
function getExerciseIdByName(name) {
  return fitness_data.exercises.filter( exer => {
    return exer.name === name;
  })[0].id;
}

function getPounds(unitPref, weight) {
  return Number((unitPref === "Imperial" ? weight : weight * KG_TO_LBS).toFixed(2));
}

function getKilograms(unitPref, weight) {
  return Number((unitPref === "Imperial" ? weight * LBS_TO_KG : weight).toFixed(2));
}

function getMiles(unitPref, distance) {
  return Number((unitPref === "Imperial" ? distance : distance * KM_TO_MILE).toFixed(2));
}

function getKilometers(unitPref, distance) {
  return Number((unitPref === "Imperial" ? distance * MILE_TO_KM : distance).toFixed(2));
}

// CONSTRUCTOR FUNCTIONS #######################################################
function Exercise({
  name = null,
  category = null,
  inputs = null,
  objectives = [],
  exerciseRecords = []
}={}) {
  this.id = uuid.v4();
  this.name = name;
  this.category = category;
  this.inputs = inputs;
  this.objectives = objectives; // Objective []
  this.exerciseRecords = exerciseRecords; // Record []
}

function Inputs({
  hasNotes = false,
  hasDuration = false,
  hasDistance = false,
  hasWeight = false,
  hasReps = false
}={}) {
  this.hasNotes = hasNotes; // 1 input
  this.hasDuration = hasDuration; // 3 inputs (H : M : S)
  this.hasDistance = hasDistance; // 1 input
  this.hasWeight = hasWeight; // 1 input
  this.hasReps = hasReps; // 1 input
}

function Objective({type = null, icon = null, text = null}={}) {
  this.type = type;
  this.icon = icon;
  this.text = text;
}

function ExerciseRecord({duration = null, distance = null, sets = []}={}) {
  this.createdAt = new Date().toISOString();
  this.duration = duration;
  this.distance = distance;
  this.sets = sets; // OneSet[]
}

function OneSet({
  weight = null,
  reps = null
}={}) {
  this.weight = weight;
  this.reps = reps;
}

function Routine({
  name = null,
  exerciseIds = [],
  routineRecords = []
}={}) {
  this.id = uuid.v4();
  this.name = name;
  this.exerciseIds = exerciseIds;
  this.routineRecords = routineRecords; // RoutineRecord []
}

// Not used in this project at this time...
// function RoutineRecord(createdAt, startTime, endTime) {
//   this.createdAt = createdAt;
//   this.startTime = startTime;
//   this.endTime = endTime;
// }

// BUILD RECORDS ###############################################################
var fitness_data = {
  exercises: [],
  routines: []
}

// Build Exercises #############################################################
fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.ELLIPTICAL_WARMUP, // Exercise Name -----
    category: CategoryType.CARDIO,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: true,
      hasDistance: true,
      hasWeight: false,
      hasReps: false
    }),
    objectives: [
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.LOW}),
      new Objective({type: ObjectiveType.RESISTENCE, icon: Icon.RESISTENCE, text: "8/20"}),
      new Objective({type: ObjectiveType.INCLINE, icon: Icon.INCLINE, text: "0/20"})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: 7,
        distance: 0.5,
        sets: []
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.STRETCHING, // Exercise Name -----
    category: CategoryType.MISC,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: true,
      hasDistance: false,
      hasWeight: false,
      hasReps: false
    }),
    objectives: [
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.LOW})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: 8,
        distance: null,
        sets: []
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.SMITH_FLAT_BENCH_PRESS, // Exercise Name -----
    category: CategoryType.CHEST,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 130,
            reps: 10
          }),
          new OneSet({
            weight: 130,
            reps: 7
          }),
          new OneSet({
            weight: 130,
            reps: 7
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.SMITH_INCLINE_BENCH_PRESS, // Exercise Name -----
    category: CategoryType.CHEST,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 75,
            reps: 10
          }),
          new OneSet({
            weight: 75,
            reps: 8
          }),
          new OneSet({
            weight: 75,
            reps: 8
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.SMITH_DECLINE_BENCH_PRESS, // Exercise Name -----
    category: CategoryType.CHEST,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 125,
            reps: 10
          }),
          new OneSet({
            weight: 125,
            reps: 10
          }),
          new OneSet({
            weight: 127.5,
            reps: 9
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.DUMBBELL_FLAT_BENCH_PRESS, // Exercise Name -----
    category: CategoryType.CHEST,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 45,
            reps: 10
          }),
          new OneSet({
            weight: 45,
            reps: 10
          }),
          new OneSet({
            weight: 45,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.FLY_MACHINE_CHEST, // Exercise Name -----
    category: CategoryType.CHEST,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.SLOW}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 105,
            reps: 10
          }),
          new OneSet({
            weight: 105,
            reps: 10
          }),
          new OneSet({
            weight: 105,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.LAYING_OVERHEAD_STRAIGHT_ARMS, // Exercise Name -----
    category: CategoryType.CHEST,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.SLOW}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.HIGH})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 30,
            reps: 10
          }),
          new OneSet({
            weight: 30,
            reps: 10
          }),
          new OneSet({
            weight: 30,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.DUMBBELL_FRONT_SIDE_RAISES, // Exercise Name -----
    category: CategoryType.SHOULDERS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 10,
            reps: 10
          }),
          new OneSet({
            weight: 10,
            reps: 10
          }),
          new OneSet({
            weight: 10,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.SHOULDER_PRESS_MACHINE, // Exercise Name -----
    category: CategoryType.SHOULDERS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 60,
            reps: 10
          }),
          new OneSet({
            weight: 60,
            reps: 10
          }),
          new OneSet({
            weight: 60,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.CABLE_TRICEP_PULLDOWNS, // Exercise Name -----
    category: CategoryType.TRICEPS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 47.5,
            reps: 10
          }),
          new OneSet({
            weight: 47.5,
            reps: 10
          }),
          new OneSet({
            weight: 47.5,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.TRICEP_PRESS_MACHINE, // Exercise Name -----
    category: CategoryType.TRICEPS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 170,
            reps: 10
          }),
          new OneSet({
            weight: 170,
            reps: 10
          }),
          new OneSet({
            weight: 170,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.SKULL_CRUSHERS, // Exercise Name -----
    category: CategoryType.TRICEPS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 40,
            reps: 10
          }),
          new OneSet({
            weight: 40,
            reps: 10
          }),
          new OneSet({
            weight: 40,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.STANDING_TRICEP_OVERHEAD_EXT, // Exercise Name -----
    category: CategoryType.TRICEPS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 35,
            reps: 10
          }),
          new OneSet({
            weight: 35,
            reps: 10
          }),
          new OneSet({
            weight: 35,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.SMITH_BENT_OVER_ROWS, // Exercise Name -----
    category: CategoryType.BACK,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 125,
            reps: 9
          }),
          new OneSet({
            weight: 125,
            reps: 8
          }),
          new OneSet({
            weight: 125,
            reps: 8
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.SMITH_STIFF_LEG_DEADLIFTS, // Exercise Name -----
    category: CategoryType.BACK,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 115,
            reps: 10
          }),
          new OneSet({
            weight: 115,
            reps: 10
          }),
          new OneSet({
            weight: 115,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.SEATED_CABLE_PULLDOWNS, // Exercise Name -----
    category: CategoryType.BACK,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 85,
            reps: 10
          }),
          new OneSet({
            weight: 90,
            reps: 10
          }),
          new OneSet({
            weight: 90,
            reps: 12
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.SEATED_CABLE_ROWS, // Exercise Name -----
    category: CategoryType.BACK,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 85,
            reps: 10
          }),
          new OneSet({
            weight: 85,
            reps: 10
          }),
          new OneSet({
            weight: 85,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.STANDING_T_ROWS, // Exercise Name -----
    category: CategoryType.BACK,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 50,
            reps: 10
          }),
          new OneSet({
            weight: 50,
            reps: 10
          }),
          new OneSet({
            weight: 50,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.ASSISTED_PULL_UPS, // Exercise Name -----
    category: CategoryType.BACK,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: -25,
            reps: 10
          }),
          new OneSet({
            weight: -25,
            reps: 10
          }),
          new OneSet({
            weight: -25,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.DUMBBELL_HAMMER_CURLS, // Exercise Name -----
    category: CategoryType.BICEPS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 25,
            reps: 10
          }),
          new OneSet({
            weight: 25,
            reps: 9
          }),
          new OneSet({
            weight: 25,
            reps: 8
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.CABLE_UNDERHAND_CURLS, // Exercise Name -----
    category: CategoryType.BICEPS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 32.5,
            reps: 10
          }),
          new OneSet({
            weight: 32.5,
            reps: 10
          }),
          new OneSet({
            weight: 32.5,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.DUMBBELL_OVERHAND_CURLS, // Exercise Name -----
    category: CategoryType.BICEPS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 20,
            reps: 10
          }),
          new OneSet({
            weight: 20,
            reps: 10
          }),
          new OneSet({
            weight: 20,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.DUMBBELL_UNDERHAND_CURLS, // Exercise Name -----
    category: CategoryType.BICEPS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 25,
            reps: 10
          }),
          new OneSet({
            weight: 25,
            reps: 10
          }),
          new OneSet({
            weight: 25,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.LEG_PRESS_MACHINE, // Exercise Name -----
    category: CategoryType.LEGS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 180,
            reps: 10
          }),
          new OneSet({
            weight: 180,
            reps: 10
          }),
          new OneSet({
            weight: 180,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.LEG_EXT_MACHINE, // Exercise Name -----
    category: CategoryType.LEGS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 95,
            reps: 10
          }),
          new OneSet({
            weight: 95,
            reps: 10
          }),
          new OneSet({
            weight: 95,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.LEG_CURL_MACHINE, // Exercise Name -----
    category: CategoryType.LEGS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 90,
            reps: 10
          }),
          new OneSet({
            weight: 90,
            reps: 10
          }),
          new OneSet({
            weight: 90,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.CALF_EXT_MACHINE, // Exercise Name -----
    category: CategoryType.LEGS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 200,
            reps: 10
          }),
          new OneSet({
            weight: 200,
            reps: 10
          }),
          new OneSet({
            weight: 200,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.STANDING_GLUTE_MACHINE, // Exercise Name -----
    category: CategoryType.LEGS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 130,
            reps: 10
          }),
          new OneSet({
            weight: 130,
            reps: 10
          }),
          new OneSet({
            weight: 130,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.HIP_ABDUCTION_MACHINE, // Exercise Name -----
    category: CategoryType.LEGS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 205,
            reps: 10
          }),
          new OneSet({
            weight: 210,
            reps: 10
          }),
          new OneSet({
            weight: 215,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.HIP_ADDUCTION_MACHINE, // Exercise Name -----
    category: CategoryType.LEGS,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 170,
            reps: 10
          }),
          new OneSet({
            weight: 175,
            reps: 10
          }),
          new OneSet({
            weight: 180,
            reps: 10
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.ABDOMINAL_CRUNCH_MACHINE, // Exercise Name -----
    category: CategoryType.CORE,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "2m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 50,
            reps: 15
          }),
          new OneSet({
            weight: 50,
            reps: 15
          }),
          new OneSet({
            weight: 50,
            reps: 15
          })
        ]
      })
    ]
  })
);

fitness_data.exercises.push(
  new Exercise({
    name: ExerciseType.OBLIQUE_SIDE_BEND, // Exercise Name -----
    category: CategoryType.CORE,
    inputs: new Inputs({
      hasNotes: true,
      hasDuration: false,
      hasDistance: false,
      hasWeight: true,
      hasReps: true
    }),
    objectives: [
      new Objective({type: ObjectiveType.REST, icon: Icon.REST, text: "1m"}),
      new Objective({type: ObjectiveType.TEMPO, icon: Icon.TEMPO, text: TempoType.NORMAL}),
      new Objective({type: ObjectiveType.INTENSITY, icon: Icon.INTENSITY, text: IntensityType.MEDIUM})
    ],
    exerciseRecords: [
      new ExerciseRecord({
        duration: null,
        distance: null,
        sets: [
          new OneSet({
            weight: 45,
            reps: 25
          }),
          new OneSet({
            weight: 45,
            reps: 25
          }),
          new OneSet({
            weight: 45,
            reps: 25
          })
        ]
      })
    ]
  })
);

// Build Routines ##############################################################
fitness_data.routines.push(
  new Routine({
    name: "Chest, Shoulders, Triceps #1",
    exerciseIds: [
      getExerciseIdByName(ExerciseType.SMITH_FLAT_BENCH_PRESS),
      getExerciseIdByName(ExerciseType.SMITH_INCLINE_BENCH_PRESS),
      getExerciseIdByName(ExerciseType.FLY_MACHINE_CHEST),
      getExerciseIdByName(ExerciseType.DUMBBELL_FRONT_SIDE_RAISES),
      getExerciseIdByName(ExerciseType.CABLE_TRICEP_PULLDOWNS),
      getExerciseIdByName(ExerciseType.TRICEP_PRESS_MACHINE),
      getExerciseIdByName(ExerciseType.STRETCHING)
    ],
    routineRecords: []
  })
);

fitness_data.routines.push(
  new Routine({
    name: "Chest, Shoulders, Triceps #2",
    exerciseIds: [
      getExerciseIdByName(ExerciseType.DUMBBELL_FLAT_BENCH_PRESS),
      getExerciseIdByName(ExerciseType.SMITH_DECLINE_BENCH_PRESS),
      getExerciseIdByName(ExerciseType.LAYING_OVERHEAD_STRAIGHT_ARMS),
      getExerciseIdByName(ExerciseType.SHOULDER_PRESS_MACHINE),
      getExerciseIdByName(ExerciseType.SKULL_CRUSHERS),
      getExerciseIdByName(ExerciseType.STANDING_TRICEP_OVERHEAD_EXT),
      getExerciseIdByName(ExerciseType.STRETCHING)
    ],
    routineRecords: []
  })
);

fitness_data.routines.push(
  new Routine({
    name: "Back and Biceps #1",
    exerciseIds: [
      getExerciseIdByName(ExerciseType.SMITH_BENT_OVER_ROWS),
      getExerciseIdByName(ExerciseType.SMITH_STIFF_LEG_DEADLIFTS),
      getExerciseIdByName(ExerciseType.SEATED_CABLE_PULLDOWNS),
      getExerciseIdByName(ExerciseType.DUMBBELL_HAMMER_CURLS),
      getExerciseIdByName(ExerciseType.CABLE_UNDERHAND_CURLS),
      getExerciseIdByName(ExerciseType.STRETCHING)
    ],
    routineRecords: []
  })
);

fitness_data.routines.push(
  new Routine({
    name: "Back and Biceps #2",
    exerciseIds: [
      getExerciseIdByName(ExerciseType.SEATED_CABLE_ROWS),
      getExerciseIdByName(ExerciseType.STANDING_T_ROWS),
      getExerciseIdByName(ExerciseType.ASSISTED_PULL_UPS),
      getExerciseIdByName(ExerciseType.DUMBBELL_OVERHAND_CURLS),
      getExerciseIdByName(ExerciseType.DUMBBELL_UNDERHAND_CURLS),
      getExerciseIdByName(ExerciseType.STRETCHING)
    ],
    routineRecords: []
  })
);

fitness_data.routines.push(
  new Routine({
    name: "Legs and Core",
    exerciseIds: [
      getExerciseIdByName(ExerciseType.LEG_PRESS_MACHINE),
      getExerciseIdByName(ExerciseType.LEG_EXT_MACHINE),
      getExerciseIdByName(ExerciseType.LEG_CURL_MACHINE),
      getExerciseIdByName(ExerciseType.CALF_EXT_MACHINE),
      getExerciseIdByName(ExerciseType.STANDING_GLUTE_MACHINE),
      getExerciseIdByName(ExerciseType.HIP_ABDUCTION_MACHINE),
      getExerciseIdByName(ExerciseType.HIP_ADDUCTION_MACHINE),
      getExerciseIdByName(ExerciseType.ABDOMINAL_CRUNCH_MACHINE),
      getExerciseIdByName(ExerciseType.OBLIQUE_SIDE_BEND),
      getExerciseIdByName(ExerciseType.STRETCHING)
    ],
    routineRecords: []
  })
);

// OUTPUT ######################################################################
console.log( JSON.stringify(fitness_data) );
