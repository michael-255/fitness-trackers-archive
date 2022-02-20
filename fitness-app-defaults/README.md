# Fitness App Defaults

Helps generate default data for the main fitness app. Also used as a testing ground.

---

## Todos

### Standard Tasks

- Finish export methods for classes
  - Will need utility functions isSomething(x) to check the instanceof
  - Top level classes must call export() on classes they contain
  - Make export() methods private in classes as it will be called by exportJson() in Exporter
  - Export can be done async (once all loaded into big object, JSON stringify it)
  - Exporter can't be Node, it must run on a website
  - DefaultsGenerator initialize setup
    - Init containers (or is this done by the Exporter?)
    - Fill exercises, workouts, and exportSummary with an auto init method in constructor
- Determine best defaults for class params
  - Even if it's something like an empty string?

---

- Move all code to the Nuxt Fitness App and Test launch it
- Adapter/Wrapper pattern for data (storage)
- Migration code for stored data when switching Adapters/Wrappers
- Classes for the defaults repo
  - Importer (JSON)
  - Exporter (JSON)
  - Report (breakdown)

    ```javascript
    {
      exportSummary: {
        appVersion: Number,
        exporterVersion: Number,
        createdAt: Date,
        totalCategories: Number,
        totalEquipment: Number,
        totalWorkouts: Number,
        totalWorkoutRecords: Number,
        totalExercises: Number,
        totalExerciseRecords: Number,
        totalMeasurementRecords: Number,
      },
      categories: [],
      equipment: [],
      workouts: [],
      workoutRecords: [],
      exercises: [],
      exerciseRecords: [],
      measurementRecords: [],
    }
    ```

- UI Classes for later
  - Timer class
  - WorkoutTimer class (for app later)
  - StaticTime class (for app later)
  - WorkoutSummary class (for app later)

### Slowly research and setup each

- Add basic UI for testing (html, css, js)
  - Tailwind CSS
- Local VSCode snippets, extensions, settings
- Generate defaults for fitness app (exercises & workouts)
- Markdownlint
- Stylelint
- Prettier
- ESLint
- Babel
- Husky
- Jest
- TypeScript
- Webpack
- Mock fitness app UX

---

## Data Storage Locations

### Database (Firebase, IndexedDB, Local Storage, etc.)

- users
- exercises
- workouts
- measurementRecords
- exerciseRecords
- workoutRecords

### Active Data (Local Storage)

- activeWorkout
- activeExerciseRecords

### App Store (Vuex, Redux, etc.)

- Combination of Database and Active Data
- Only load data into store as needed

---

## Class Outline

- ExercisePlan
- `_Id`
  - User
  - ExerciseSet
  - `_Record`
    - WorkoutRecord
    - ExerciseRecord
    - MeasurementRecord
  - `_Descriptors`
    - Exercise
    - Workout
- `_IdContainer`
  - ExerciseSetContainer
  - `_RecordContainer`
    - WorkoutRecordContainer
    - ExerciseRecordContainer
    - MeasurementRecordContainer
  - `_DescriptorsContainer`
    - ExerciseContainer
    - WorkoutContainer

---

## Unrelated Tasks

- Build a Vue CLI project and eject it to see how Webpack is setup
- Build a Hygen test project
- Build a TypeScript test project
- Build a boilerplate project for you to expand on
