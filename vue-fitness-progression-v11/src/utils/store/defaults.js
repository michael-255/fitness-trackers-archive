import Workout from '../../models/Workout.js'
import Exercise from '../../models/Exercise.js'
import ExerciseInputs from '../../models/ExerciseInputs.js'
import { isArrayWithData } from '../common.js'
import { CATEGORY, EQUIPMENT } from '../../constants/globals.js'

let defaultWorkouts
let defaultExercises

export function createDefaultWorkouts() {
  if (!isArrayWithData(defaultExercises)) initExercises() // required for workouts
  if (!isArrayWithData(defaultWorkouts)) initWorkouts()
  return defaultWorkouts
}

export function createDefaultExercises() {
  if (!isArrayWithData(defaultExercises)) initExercises()
  return defaultExercises
}

function getExerciseIdByNameAndEquipment(name, equipment) {
  return defaultExercises.find(
    (i) => i.name === name && i.equipment === equipment
  ).id
}

function initWorkouts() {
  defaultWorkouts = [
    new Workout({
      name: 'StrongLifts 5x5 - Alpha',
      description: 'The StrongLifts 5x5 "A" workout.',
      exerciseIds: [
        getExerciseIdByNameAndEquipment('Squats', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment('Bench Press', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment('Bent Over Rows', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment('Dips', ''),
      ],
    }),
    new Workout({
      name: 'StrongLifts 5x5 - Beta',
      description: 'The StrongLifts 5x5 "B" workout.',
      exerciseIds: [
        getExerciseIdByNameAndEquipment('Squats', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment('Overhead Press', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment('Deadlift', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment(
          'Standard Pull-ups',
          EQUIPMENT.pullupBar
        ),
      ],
    }),
    new Workout({
      name: 'Chest #1',
      description: 'Chest focused workout version #1.',
      exerciseIds: [
        getExerciseIdByNameAndEquipment('Warm-up', ''),
        getExerciseIdByNameAndEquipment('Bench Press', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment(
          'Incline Bench Press',
          EQUIPMENT.barbell
        ),
        getExerciseIdByNameAndEquipment(
          'Decline Bench Press',
          EQUIPMENT.barbell
        ),
        getExerciseIdByNameAndEquipment('Cool-down', ''),
        getExerciseIdByNameAndEquipment('Stretching', ''),
      ],
    }),
    new Workout({
      name: 'Back #1',
      description: 'Back focused workout version #1.',
      exerciseIds: [
        getExerciseIdByNameAndEquipment('Warm-up', ''),
        getExerciseIdByNameAndEquipment('Bent Over Rows', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment(
          'Stiff Leg Deadlift',
          EQUIPMENT.barbell
        ),
        getExerciseIdByNameAndEquipment(
          'Bent Over Back Flyes',
          EQUIPMENT.dumbbell
        ),
        getExerciseIdByNameAndEquipment('Cool-down', ''),
        getExerciseIdByNameAndEquipment('Stretching', ''),
      ],
    }),
    new Workout({
      name: 'Legs #1',
      description: 'Legs focused workout version #1.',
      exerciseIds: [
        getExerciseIdByNameAndEquipment('Warm-up', ''),
        getExerciseIdByNameAndEquipment('Leg Curls', EQUIPMENT.weightMachine),
        getExerciseIdByNameAndEquipment(
          'Leg Extensions',
          EQUIPMENT.weightMachine
        ),
        getExerciseIdByNameAndEquipment('Squats', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment('Cool-down', ''),
        getExerciseIdByNameAndEquipment('Stretching', ''),
      ],
    }),
    new Workout({
      name: 'Arms and Shoulders #1',
      description: 'Arms and Shoulders focused workout version #1.',
      exerciseIds: [
        getExerciseIdByNameAndEquipment('Warm-up', ''),
        getExerciseIdByNameAndEquipment(
          'Underhand Bicep Curls',
          EQUIPMENT.dumbbell
        ),
        getExerciseIdByNameAndEquipment(
          'Tricep Pulldowns',
          EQUIPMENT.cableMachine
        ),
        getExerciseIdByNameAndEquipment('Front Arm Raises', EQUIPMENT.dumbbell),
        getExerciseIdByNameAndEquipment('Side Arm Raises', EQUIPMENT.dumbbell),
        getExerciseIdByNameAndEquipment(
          'Diagonal Arm Raises',
          EQUIPMENT.dumbbell
        ),
        getExerciseIdByNameAndEquipment('Shrugs', EQUIPMENT.barbell),
        getExerciseIdByNameAndEquipment('Cool-down', ''),
        getExerciseIdByNameAndEquipment('Stretching', ''),
      ],
    }),
    new Workout({
      name: 'Core #1',
      description: 'Core focused workout version #1.',
      exerciseIds: [
        getExerciseIdByNameAndEquipment('Warm-up', ''),
        getExerciseIdByNameAndEquipment(
          'Abdominal Crunch',
          EQUIPMENT.cableMachine
        ),
        getExerciseIdByNameAndEquipment('Russian Twist', EQUIPMENT.dumbbell),
        getExerciseIdByNameAndEquipment(
          'Alternating Torso Twist',
          EQUIPMENT.cableMachine
        ),
        getExerciseIdByNameAndEquipment(
          'Oblique Side Bends',
          EQUIPMENT.dumbbell
        ),
        getExerciseIdByNameAndEquipment("Farmer's Walk", EQUIPMENT.dumbbell),
        getExerciseIdByNameAndEquipment('Cool-down', ''),
        getExerciseIdByNameAndEquipment('Stretching', ''),
      ],
    }),
  ]
}

function initExercises() {
  defaultExercises = [
    new Exercise({
      name: "Farmer's Walk",
      description:
        'Brace your core. Walk with weights in each hand at your sides.',
      category: CATEGORY.compound,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasDuration: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hint: '1-2' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '30+' }),
      //   new ExerciseInput({ name: INPUT.duration, hint: '1+' }),
      // ],
    }),
    new Exercise({
      name: "Farmer's Walk",
      description:
        'Brace your core. Walk with weights in each hand at your sides.',
      category: CATEGORY.compound,
      equipment: EQUIPMENT.plate,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasDuration: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hint: '1-2' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '30+' }),
      //   new ExerciseInput({ name: INPUT.duration, hint: '1+' }),
      // ],
    }),
    new Exercise({
      name: 'Warm-up',
      description:
        'Warm up your body using any combination of cardio exercises.',
      category: CATEGORY.cardio,
      inputs: new ExerciseInputs({ hasDuration: true }),
      // hints: [new ExerciseInput({ name: INPUT.duration, hint: '5-10' })],
    }),
    new Exercise({
      name: 'Cool-down',
      description: 'Cool down your body by doing some light cardio exercises.',
      category: CATEGORY.cardio,
      inputs: new ExerciseInputs({ hasDuration: true }),
      // hints: [new ExerciseInput({ name: INPUT.duration, hint: '5-10' })],
    }),
    new Exercise({
      name: 'Jumping Jacks',
      description:
        'Alternate jumping your legs wide to narrow and arms wide then back to your side.',
      category: CATEGORY.cardio,
      inputs: new ExerciseInputs({
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.reps, hint: '50-100' })],
    }),
    new Exercise({
      name: 'Mountain Climbers',
      description:
        'Alternate bringing your knees close to your chin while in plank position.',
      category: CATEGORY.cardio,
      inputs: new ExerciseInputs({
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.reps, hint: '50-100' })],
    }),
    new Exercise({
      name: 'High Knees',
      description: 'Alternate bringing your knees up quickly while standing.',
      category: CATEGORY.cardio,
      inputs: new ExerciseInputs({
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.reps, hint: '50-100' })],
    }),
    new Exercise({
      name: 'Burpees',
      description:
        'Starting from plank, do a push-up, jump your legs forward, then jump with high knees, and return to plank position.',
      category: CATEGORY.cardio,
      inputs: new ExerciseInputs({
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.reps, hint: '10-20' })],
    }),
    new Exercise({
      name: 'High Arms Alternating Knees',
      description:
        'With arms in the air, alternate one knee up to your waist as you crunch down with your arms.',
      category: CATEGORY.cardio,
      inputs: new ExerciseInputs({
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.reps, hint: '50-100' })],
    }),
    new Exercise({
      name: 'High Arms Alternating Knees',
      description:
        'With arms in the air, alternate one knee up to your waist as you crunch down with your arms.',
      category: CATEGORY.cardio,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasWeight: true,
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.reps, hint: '50-100' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '5+' }),
      // ],
    }),
    new Exercise({
      name: 'Treadmill',
      description: 'Walking, jogging, running, or sprints.',
      category: CATEGORY.cardio,
      equipment: EQUIPMENT.cardioMachine,
      inputs: new ExerciseInputs({
        hasDuration: true,
        hasDistance: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.duration, hint: '20-60' })],
    }),
    new Exercise({
      name: 'Elliptical',
      description: 'Standard elliptical machine.',
      category: CATEGORY.cardio,
      equipment: EQUIPMENT.cardioMachine,
      inputs: new ExerciseInputs({
        hasDuration: true,
        hasDistance: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.duration, hint: '20-60' })],
    }),
    new Exercise({
      name: 'Stair Stepper',
      description: 'Standard stair stepper machine.',
      category: CATEGORY.cardio,
      equipment: EQUIPMENT.cardioMachine,
      inputs: new ExerciseInputs({
        hasDuration: true,
        hasDistance: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.duration, hint: '20-60' })],
    }),
    new Exercise({
      name: 'Straight Lunges',
      description: 'Standing or walking straight lunges.',
      category: CATEGORY.misc,
      inputs: new ExerciseInputs({
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.reps, hint: '25-50' })],
    }),
    new Exercise({
      name: 'Straight Lunges',
      description: 'Standing or walking straight lunges with weights.',
      category: CATEGORY.legs,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.reps, hint: '25-50' })],
    }),
    new Exercise({
      name: 'Side Lunges',
      description: 'Standing alternating side lunges.',
      category: CATEGORY.misc,
      inputs: new ExerciseInputs({
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.reps, hint: '25-50' })],
    }),
    new Exercise({
      name: 'Stretching',
      description:
        'Spend a few minutes stretching muscles you have or plan to use.',
      category: CATEGORY.misc,
      inputs: new ExerciseInputs({
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.duration, hint: '5-10' })],
    }),
    new Exercise({
      name: 'Bench Press',
      description: 'Brace your core. Push weight above chest.',
      category: CATEGORY.chest,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '100+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Chest Press',
      description: 'Push weight above chest.',
      category: CATEGORY.chest,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '20+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Incline Bench Press',
      description:
        'Brace your core. Push weight above chest while at an incline.',
      category: CATEGORY.chest,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '40+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Incline Chest Press',
      description: 'Push weight above chest while at an incline.',
      category: CATEGORY.chest,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '15+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Decline Bench Press',
      description:
        'Brace your core. Push weight above chest while at a decline.',
      category: CATEGORY.chest,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '100+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Decline Chest Press',
      description: 'Push weight above chest while at a decline.',
      category: CATEGORY.chest,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '20+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Bench Chest Flyes',
      description:
        'Start with arms wide and slightly lower than chest and push up and touch weights together high above chest.',
      category: CATEGORY.chest,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hint: '15+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Diamond Push-ups',
      description:
        'Place hands next to eachother under chest while in plank position and push up.',
      category: CATEGORY.chest,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '10-20' }),
      // ],
    }),
    new Exercise({
      name: 'Military Push-ups',
      description:
        'Place hands under shoulders while in plank position and push up keeping the elbows next to your body.',
      category: CATEGORY.chest,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '15-25' }),
      // ],
    }),
    new Exercise({
      name: 'Standard Push-ups',
      description:
        'Place hands slightly outside of shoulders while in plank position and push up.',
      category: CATEGORY.chest,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '15-25' }),
      // ],
    }),
    new Exercise({
      name: 'Wide Push-ups',
      description:
        'Place hands wide outside of shoulders while in plank position and push up.',
      category: CATEGORY.chest,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '15-25' }),
      // ],
    }),
    new Exercise({
      name: 'Pike Push-ups',
      description:
        'Push up and down with the arms while in downward dog position.',
      category: CATEGORY.chest,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '10-20' }),
      // ],
    }),
    new Exercise({
      name: 'Laying Overhead Straight Arms',
      description:
        'Extend weight behind head and bring back above head in arc motion while laying upper back on a bench.',
      category: CATEGORY.chest,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '2-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '12+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Chest Side Pulls',
      description:
        'Stand and pull weight to stomach while keeping elbow locked to your side.',
      category: CATEGORY.chest,
      equipment: EQUIPMENT.cableMachine,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '2-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '12+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Overhead Press',
      description: 'Press weight above head while seated or standing.',
      category: CATEGORY.shoulders,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '45+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Overhead Press',
      description: 'Press weight above head while seated or standing.',
      category: CATEGORY.shoulders,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '20+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Diagonal Arm Raises',
      description: 'Raise straight arms up at an angle from your body.',
      category: CATEGORY.shoulders,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '2-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '5+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Side Arm Raises',
      description: 'Raise straight arms up from the sides of your body.',
      category: CATEGORY.shoulders,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '2-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '5+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Front Arm Raises',
      description: 'Raise straight arms up in front of your body.',
      category: CATEGORY.shoulders,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '2-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '5+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Shrugs',
      description:
        'Brace your core. Lift with your shoulders while standing with arms extended.',
      category: CATEGORY.shoulders,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '100+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Shrugs',
      description:
        'Lift with your shoulders while standing with arms extended.',
      category: CATEGORY.shoulders,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '30+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Tricep Kickbacks',
      description: 'Bend at waist while standing and extend arms backward.',
      category: CATEGORY.triceps,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '10+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Tricep Pulldowns',
      description: 'Pull cables directly down and hold briefly while standing.',
      category: CATEGORY.triceps,
      equipment: EQUIPMENT.cableMachine,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '20+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Tricep Overhead Extentions',
      description: 'Face away from cable machine and pull weight overhead.',
      category: CATEGORY.triceps,
      equipment: EQUIPMENT.cableMachine,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '15+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Laying Tricep Extension',
      description:
        'Hold weight above head while laying down and bend elbows to lower weight behind head.',
      category: CATEGORY.triceps,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '15+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Dips',
      description:
        'Hold body up by arms on an elavated surface and lower yourself down and back up.',
      category: CATEGORY.triceps,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '15+' }),
      // ],
    }),
    new Exercise({
      name: 'Bent Over Back Flyes',
      description:
        'Lean over with arms hanging down and pull arms up and slightly wider while bringing your shoulder blades together.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '2-4' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '12+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Bent Over Rows',
      description:
        'Bend over with chest above weight and arms fully extended. Pull weight up to bottom of ribcage.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '65+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Bent Over Rows',
      description:
        'Bend over with chest above weight and arms fully extended. Pull weight up to bottom of ribcage.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '20+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Stiff Leg Deadlift',
      description:
        'Brace your core. Stand slightly away from weight and lift with your back while keeping your legs nearly straight.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '100+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Stiff Leg Deadlift',
      description:
        'Lift with your back while keeping your legs nearly straight and the weights in front of your legs.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '30+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Deadlift',
      description:
        'Brace your core. Stand slightly away from weight and lift while keeping your knees behind your toes.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '100+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Deadlift',
      description:
        'With weights in front of you lift while keeping your knees behind your toes.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '30+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Standard Pull-ups',
      description: 'Shoulder width overhand grip. Get your chin above the bar.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.pullupBar,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '0' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Wide Overhand Pull-ups',
      description: 'Wide overhand grip. Get your chin above the bar.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.pullupBar,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '0' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Chin-ups',
      description: 'Close underhand grip. Get your chin above the bar.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.pullupBar,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '0' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Hammer Grip Pull-ups',
      description: 'Close hammer grip. Get your chin above the bar.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.pullupBar,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '0' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Face Pulls',
      description: 'Pull directly towards your face.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.cableMachine,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '15+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'T-Rows',
      description:
        'Brace your core. Lift with weight in front of you with your arms and elbows higher than it. Bring the weight up to your neck.',
      category: CATEGORY.back,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '45+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Overhand Bicep Curls',
      description: 'Bicep curl with overhand grip.',
      category: CATEGORY.biceps,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '10+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Underhand Bicep Curls',
      description: 'Standard bicep curl.',
      category: CATEGORY.biceps,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '15+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Hammer Bicep Curls',
      description: 'Bicep curl with hammer grip.',
      category: CATEGORY.biceps,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '15+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Squats',
      description:
        'Brace your core. Hold weight on your upper back and squat down.',
      category: CATEGORY.legs,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '100+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Squats',
      description: 'Hold weights on your sides or shoulders and squat down.',
      category: CATEGORY.legs,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '25+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Air Squats',
      description: 'Quick air squats.',
      category: CATEGORY.legs,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '50-100' }),
      // ],
    }),
    new Exercise({
      name: 'Leg Curls',
      description: 'Lay stomach down on bench and curl legs up.',
      category: CATEGORY.legs,
      equipment: EQUIPMENT.weightMachine,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '25+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Leg Extensions',
      description: 'Lay back down on bench and extend legs out. ',
      category: CATEGORY.legs,
      equipment: EQUIPMENT.weightMachine,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '25+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Calf Raises',
      description:
        'Hold the weight and pull as you lift onto the balls of your feet and back down again.',
      category: CATEGORY.legs,
      equipment: EQUIPMENT.cableMachine,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '25+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Calf Raises',
      description:
        'Hold a weight at your side or on your shoudler and lift onto the balls of your feet and back down again.',
      category: CATEGORY.legs,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '25+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Hip Thrusters',
      description:
        'Brace your core. Prop your upper back on a bench while holding the weight at your waist. Thrust upward to tabletop position.',
      category: CATEGORY.legs,
      equipment: EQUIPMENT.barbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '45+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '5-8' }),
      // ],
    }),
    new Exercise({
      name: 'Hip Thrusters',
      description:
        'Prop your upper back on a bench while holding the weight at your waist. Thrust upward to tabletop position.',
      category: CATEGORY.legs,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '3-5' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '30+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '8-12' }),
      // ],
    }),
    new Exercise({
      name: 'Plank',
      description: 'Standard plank position.',
      category: CATEGORY.core,
      inputs: new ExerciseInputs({ hasDuration: true }),
      // hints: [new ExerciseInput({ name: INPUT.duration, hints: '1+' })],
    }),
    new Exercise({
      name: 'Oblique Side Bends',
      description:
        'Hold weight at your side with arms extended. Lean down and back up with the weight.',
      category: CATEGORY.core,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '2-4' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '30+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '20-30' }),
      // ],
    }),
    new Exercise({
      name: 'Abdominal Crunch',
      description: 'Standard ab crunch while laying down.',
      category: CATEGORY.core,
      inputs: new ExerciseInputs({
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [new ExerciseInput({ name: INPUT.reps, hint: '25-50' })],
    }),
    new Exercise({
      name: 'Abdominal Crunch',
      description:
        'Kneel facing away from machine and crunch to pull the weight.',
      category: CATEGORY.core,
      equipment: EQUIPMENT.cableMachine,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '30+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '20-30' }),
      // ],
    }),
    new Exercise({
      name: 'Alternating Torso Twist',
      description:
        'Hold cable handle with both hands and twist away from machine like you are swinging a baseball bat.',
      category: CATEGORY.core,
      equipment: EQUIPMENT.cableMachine,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '20+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '20-30' }),
      // ],
    }),
    new Exercise({
      name: 'Russian Twist',
      description:
        'Sit with feet off the ground while you twist and tap the ground on each side of you.',
      category: CATEGORY.core,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasReps: true,
        hasDuration: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '50-100' }),
      // ],
    }),
    new Exercise({
      name: 'Russian Twist',
      description:
        'Sit with feet off the ground while you twist and tap the ground with the weight on each side of you.',
      category: CATEGORY.core,
      equipment: EQUIPMENT.dumbbell,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '10+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '25-50' }),
      // ],
    }),
    new Exercise({
      name: 'Russian Twist',
      description:
        'Sit with feet off the ground while you twist and tap the ground with the weight on each side of you.',
      category: CATEGORY.core,
      equipment: EQUIPMENT.plate,
      inputs: new ExerciseInputs({
        hasSets: true,
        hasWeight: true,
        hasReps: true,
      }),
      // hints: [
      //   new ExerciseInput({ name: INPUT.sets, hints: '1-3' }),
      //   new ExerciseInput({ name: INPUT.weight, hints: '10+' }),
      //   new ExerciseInput({ name: INPUT.reps, hint: '25-50' }),
      // ],
    }),
  ]
}
