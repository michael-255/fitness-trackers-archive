# fitness-lp

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your unit tests

```bash
npm run test:unit
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Fitness-LP

TEST

A good exploration of how the data would be structured in the app below.

May want to consider classes for some data items. However, how would I handle it when it's being pulled back from the database and is just JSON without the class methods?

## Using TypeScript

```typescript
// CONSTANTS

export enum Category {
  arms = 'Arms',
  back = 'Back',
  cardio = 'Cardio',
  chest = 'Chest',
  compound = 'Compound',
  core = 'Core',
  legs = 'Legs',
  shoulders = 'Shoulders',
  misc = 'Miscellaneous',
  event = 'Event',
  upperBody = 'Upper Body',
  lowerBody = 'Lower Body',
  fullBody = 'Full Body',
}

export enum Equipment {
  barbell = 'Barbell',
  dumbbell = 'Dumbbell',
  kettlebell = 'Kettlebell',
  plate = 'Plate',
  pullupBar = 'Pull-up Bar',
  cardioMachine = 'Cardio Machine',
  cableMachine = 'Cable Machine',
  weightMachine = 'Weight Machine',
  weightVest = 'Weight Vest',
  bands = 'Resistance Bands',
  chains = 'Chains',
}

export enum UnitPreference {
  imperial = 'Imperial',
  metric = 'Metric',
}

export enum DistanceConversion {
  kilometersToMiles = 0.621371,
  MilesToKilometers = 1.609344,
}

export enum WeightConversion {
  kilogramsToPounds = 2.204623,
  poundsToKilograms = 0.453592,
}

export enum HeightConversion {
  centimetersToInches = 0.393701,
  inchesToCentimeters = 2.54,
}

export enum Regex {
  email = '', // Use simple email regexes
}

export enum AppLimits {
  maxWorkoutExercises = 100,
  maxSets = 100,
  maxRounds = 100,
  maxNameLength = 50,
  maxDescriptionLength = 300,
  maxNoteLength = 300,
}

export enum AppStorage {
  session,
  local,
  cloud,
}

export enum AppEntity {
  exercises = 'exercises',
  workouts = 'workouts',
  exerciseRecords = 'exerciseRecords',
  workoutRecords = 'workoutRecords',
  activeExerciseRecords = 'activeExerciseRecords',
  activeWorkoutRecords = 'activeWorkoutRecords',
  measurementRecords = 'measurementRecords',
}

const layout = 'Layout'

export enum Layout {
  default = 'Default' + layout,
  activeWorkout = 'ActiveWorkout' + layout,
}

const view = 'View'

export enum View {
  notFound = 'NotFound' + view,
  login = 'Login' + view,
  dashboard = 'Dashboard' + view,
  activeWorkout = 'ActiveWorkout' + view,
}
```

```typescript
// -------------------------------------------------------------------------------------------------
// Interal data interfaces

export interface IEntity {
  id: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string,
  isDeleted: boolean,
}

export interface INote {
  note: string,
}

export interface IUser extends IEntity {
  email: string,
  birthMonth: number,
  birthYear: number,
  height: IHeight,
}

export interface IDescriptors {
  name: string,
  description: string,
  previousRecord: string,
}

export interface IExercise extends IEntity, IDescriptors {
  category: Category,
  equipment: Equipment[],
  hasSets: boolean,
  // hasRounds: boolean,
  hasWeight: boolean,
  hasReps: boolean,
  hasDuration: boolean,
  hasDistance: boolean,
}

export interface IWorkout extends IEntity, IDescriptors {
  exerciseIds: string[],
}

export interface IExerciseRecord extends IEntity, INote {
  exerciseId: string,
  sets: IExerciseSet[],
}

// export interface IExerciseRound {
//   exerciseIds: string[]
// }

export interface IExerciseSet {
  weight: IWeight,
  reps: number,
  duration: number,
  distance: IDistance,
}

export interface IWorkoutRecord extends IEntity, INote {
  duration: number,
  workoutId: string,
}

export interface IMeasurementRecord extends IEntity, INote {
  bodyWeight: number,
  bodyFat: number,
  neck: number,
  shoulders: number,
  chest: number,
  biceps: number,
  forearms: number,
  waist: number,
  thighs: number,
  calves: number,
}

export interface IWeight {
  kilograms: number,
  pounds: number,
}

export interface IDistance {
  kilometers: number,
  miles: number,
}

export interface IHeight {
  centimeters: number,
  inches: number,
}

// -------------------------------------------------------------------------------------------------
```

```typescript
// Dependency Injection

interface IMyComponentDependencies {
  databaseService: IDatabaseService
  storeService: IStoreService
}

// Figure out how all this has to work!
const dependencies = {
  databaseService: databaseThing(),
  storeService: storeThing(),
}

const myComponent({ dependencies: IMyComponentDependencies }) {
  dependencies.databaseService.doSomething()
  dependencies.storeService.doSomething()
}
```

```typescript
// Interfaces using functions!?

interface IDatabase {
  getExercises(): Exercise[],
  getWorkouts(): Workout[],
  getActiveExercises(): ExerciseRecord[],
  getActiveWorkouts(): WorkoutRecord[],
  getMeasurementRecords(): MeasurementRecord[],
  updateExercises(): null,
  updateWorkouts(): null,
  updateActiveExercises(): null,
  updateActiveWorkouts(): null,
  updateMeasurementRecords(): null,
  deleteExercises(): null,
  deleteWorkouts(): null,
  deleteActiveExercises(): null,
  deleteActiveWorkouts(): null,
  deleteMeasurementRecords(): null,
}
```
