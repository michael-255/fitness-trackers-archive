import Defaults from "./defaults";
import Exercise from "../classes/exercise";
import Routine from "../classes/routine";
import Best from "../classes/best";
import ASet from "../classes/aset"; // todo

const Initializer = (function() {
  /**
   * Init the exercise using default and local storage data
   * @param {Object} exercise
   * @returns {Object}
   * @todo local storage check
   * @todo handle set data
   */
  const initExercise = function(exercise) {
    return new Exercise({
      id: exercise.id,
      name: exercise.name,
      category: exercise.category,
      notes: exercise.notes,
      date: exercise.date,
      duration: exercise.duration,
      distance: exercise.distance,
      sets: [new ASet(), new ASet(), new ASet(), new ASet(), new ASet()]
    });
  };

  /**
   * Init the exercise using default and local storage data
   * @param {Object} routine
   * @returns {Object}
   * @todo local storage check
   */
  const initRoutine = function(routine) {
    return new Routine({
      id: routine.id,
      name: routine.name,
      date: routine.date,
      duration: routine.duration,
      exercise_ids: routine.exercise_ids
    });
  };

  /**
   * Init the exercise using default and local storage data
   * @param {Object} best
   * @returns {Object}
   * @todo local storage check
   */
  const initBest = function(best) {
    return new Best({
      exercise_id: best.id,
      date: null,
      duration: null,
      distance: null,
      weight: null
    });
  };

  /**
   * Builds the exercises array
   * @returns {Array}
   */
  const initAllExercises = function() {
    let exercises = [];

    Object.keys(Defaults.Exercise).forEach(key => {
      exercises.push(initExercise(Defaults.Exercise[key]));
    });

    if (localStorage.getItem("data") === null) {
      Object.keys(Defaults.Exercise).forEach(key => {
        exercises.push(initExercise(Defaults.Exercise[key]));
      });
    } else {
      const data = JSON.parse(localStorage.getItem("data"));
      exercises = [...data.exercises];
    }

    return exercises;
  };

  /**
   * Builds the routines array
   * @returns {Array}
   */
  const initAllRoutines = function() {
    let routines = [];

    if (localStorage.getItem("data") === null) {
      Object.keys(Defaults.Routine).forEach(key => {
        routines.push(initRoutine(Defaults.Routine[key]));
      });
    } else {
      const data = JSON.parse(localStorage.getItem("data"));
      routines = [...data.routines];
    }

    return routines;
  };

  /**
   * Builds the best array
   * @returns {Array}
   */
  const initAllBest = function() {
    const best = [];

    Object.keys(Defaults.Exercise).forEach(key => {
      best.push(initBest(Defaults.Exercise[key]));
    });

    return best;
  };

  // @TODO - methods that pull from local storage for the initialization

  return {
    initAllExercises,
    initAllRoutines,
    initAllBest
  };
})();

export default Initializer;
