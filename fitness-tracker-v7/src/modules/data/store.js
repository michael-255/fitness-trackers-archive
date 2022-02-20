import FitnessDefaults from "./fitness-defaults";
import Exercise from "../../classes/exercise";
import Routine from "../../classes/routine";
import WeightDetails from "../../classes/weight-details";
import CardioDetails from "../../classes/cardio-details";
import RecordSet from "../../classes/record-sets";
import Helpers from "../helpers";

/**
 * Store is responsible for communicating with local storage and initializing
 * the State with exercises and routines. The initialization will use data
 * from local storage and fill in the rest with default fitness data.
 */
const Store = (function() {
  /**
   * Retieves data from local storage to use during default data initialization
   * @returns {Object}
   */
  const loadLocalStorageData = function() {
    let fitnessData;

    if (localStorage.getItem("fitnessData") === null) {
      fitnessData = {
        exercises: [],
        routines: []
      };
    } else {
      fitnessData = JSON.parse(localStorage.getItem("fitnessData"));
    }
    return fitnessData;
  };

  // Load data from local storage - Used to help with seeding initial data
  const localInitData = loadLocalStorageData();

  /**
   * Store new exercise and routine data at the end of a workout
   */
  const storeFitnessData = function(currentExercises, currentRoutine) {
    let fitnessData;

    if (localStorage.getItem("fitnessData") === null) {
      fitnessData = {
        exercises: [],
        routines: []
      };
      // Store new data
      storeNewExercises(fitnessData, currentExercises);
      storeNewRoutine(fitnessData, currentRoutine);
    } else {
      fitnessData = JSON.parse(localStorage.getItem("fitnessData"));
      // Store new data
      storeNewExercises(fitnessData, currentExercises);
      storeNewRoutine(fitnessData, currentRoutine);
    }
  };

  /**
   *
   * @param {Object} newExercises
   * @returns {Object} newExercises
   */
  const calculateHighestWeight = function(newExercises) {
    newExercises.forEach(exercise => {
      let highestWeight = 0;
      if (exercise.details instanceof WeightDetails) {
        exercise.details.record_sets.forEach(record => {
          if (
            record.weight != null &&
            record.reps != null &&
            parseFloat(record.weight) >= highestWeight
          ) {
            highestWeight = record.weight;
          }
        });
        exercise.details.highest_weight = highestWeight;
        exercise.details.highest_weight_date = exercise.last_date;
      }
    });

    return newExercises;
  };

  /**
   * Transfers higher weight records over to the new exercises before they are stored
   * @param {Object} fitnessData
   * @param {Object} newExercises
   */
  const transferHighestWeight = function(fitnessExercises, newExercises) {
    newExercises.forEach(exercise => {
      let fitExer = fitnessExercises.find(fdExer => fdExer.id === exercise.id);
      if (
        fitExer &&
        fitExer.details &&
        fitExer.details.highest_weight != null
      ) {
        if (fitExer.details.highest_weight > exercise.details.highest_weight) {
          exercise.details.highest_weight = fitExer.details.highest_weight;
          exercise.details.highest_weight_date =
            fitExer.details.highest_weight_date;
        }
      }
    });

    return newExercises;
  };

  /**
   * Store or overwrites local storage exercise data with new exercise data
   * @param {Object} fitnessData
   * @param {Object} newRoutine
   */
  const storeNewExercises = function(fitnessData, newExercises) {
    // Calculate highest weights on new exercises, then transfer records over
    newExercises = calculateHighestWeight(newExercises);
    newExercises = transferHighestWeight(fitnessData.exercises, newExercises);

    const exerciseIds = newExercises.map(exercise => exercise.id);
    const updatedExercises = [];

    fitnessData.exercises.forEach(exercise => {
      if (!exerciseIds.includes(exercise.id)) {
        updatedExercises.push(exercise);
      }
    });

    newExercises.forEach(exercise => {
      updatedExercises.push(exercise);
    });

    fitnessData.exercises = updatedExercises;

    // Saves new local storage data
    localStorage.setItem("fitnessData", JSON.stringify(fitnessData));
  };

  /**
   * Store or overwrites local storage routine data with new routine data
   * @param {Object} fitnessData
   * @param {Object} newRoutine
   */
  const storeNewRoutine = function(fitnessData, newRoutine) {
    // Set time for routine
    newRoutine ? (newRoutine.routine_time = Helpers.getTimeString()) : null;

    // Remove old routine if it matches the new routine
    const updatedRoutines = [];

    fitnessData.routines.forEach(routine => {
      if (routine.id != newRoutine.id) {
        updatedRoutines.push(routine);
      }
    });

    updatedRoutines.push(newRoutine);

    fitnessData.routines = updatedRoutines;

    // Saves new local storage data
    localStorage.setItem("fitnessData", JSON.stringify(fitnessData));
  };

  /**
   * Initializes an Exercise from the default data and any local storage data
   * @param {Object} exerciseDefault
   * @returns {Exercise}
   */
  const initExercise = function(exerciseDefault) {
    if (exerciseDefault.category === FitnessDefaults.Category.MISC) {
      return new Exercise({
        id: exerciseDefault.id,
        name: exerciseDefault.name,
        category: exerciseDefault.category,
        notes: exerciseDefault.notes,
        details: null
      });
    } else if (exerciseDefault.category === FitnessDefaults.Category.CARDIO) {
      return new Exercise({
        id: exerciseDefault.id,
        name: exerciseDefault.name,
        category: exerciseDefault.category,
        notes: exerciseDefault.notes,
        last_date: exerciseDefault.last_date,
        details: new CardioDetails()
      });
    } else {
      return new Exercise({
        id: exerciseDefault.id,
        name: exerciseDefault.name,
        category: exerciseDefault.category,
        notes: exerciseDefault.notes,
        last_date: exerciseDefault.last_date,
        details: new WeightDetails({
          record_sets: [
            new RecordSet(),
            new RecordSet(),
            new RecordSet(),
            new RecordSet(),
            new RecordSet()
          ]
        })
      });
    }
  };

  /**
   * Initializes a Routine from the default data and any local storage data
   * @param {Object} routineDefault
   * @returns {Routine}
   */
  const initRoutine = function(routineDefault) {
    return new Routine({
      id: routineDefault.id,
      name: routineDefault.name,
      routine_date: null,
      routine_time: null,
      exercise_ids: routineDefault.exercise_ids
    });
  };

  /**
   * Initializes all exercises
   * @returns {Array} of Exercises
   */
  const initAllExercises = function() {
    const exercises = [];

    Object.keys(FitnessDefaults.Exercise).map(key => {
      exercises.push(initExercise(FitnessDefaults.Exercise[key]));
    });

    // Replace initial data with any updated data from local storage
    localInitData.exercises.forEach(localExer => {
      exercises.forEach(initExer => {
        if (initExer.id === localExer.id) {
          initExer.last_date = localExer.last_date;
          if (initExer.details instanceof CardioDetails) {
            initExer.details.duration = localExer.details.duration;
            initExer.details.dist_steps = localExer.details.dist_steps;
          } else if (initExer.details instanceof WeightDetails) {
            initExer.details.highest_weight = localExer.details.highest_weight;
            initExer.details.highest_weight_date =
              localExer.details.highest_weight_date;
            initExer.details.record_sets = localExer.details.record_sets;
          }
        }
      });
    });

    return exercises;
  };

  /**
   * Initializes all routines
   * @returns {Array} of Routines
   */
  const initAllRoutines = function() {
    const routines = [];

    Object.keys(FitnessDefaults.Routine).map(key => {
      routines.push(initRoutine(FitnessDefaults.Routine[key]));
    });

    // Replace initial routine data with any updated data from local storage
    localInitData.routines.forEach(localRout => {
      routines.forEach(initRout => {
        if (initRout.id === localRout.id) {
          initRout.routine_date = localRout.routine_date;
          initRout.routine_time = localRout.routine_time;
        }
      });
    });

    return routines;
  };

  return {
    storeFitnessData,
    initAllExercises,
    initAllRoutines
  };
})();

export default Store;
