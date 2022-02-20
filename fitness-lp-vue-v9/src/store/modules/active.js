import ActiveService from "../../services/active.service";
import WorkoutRecordService from "../../services/workout-record.service";
import ExerciseRecordService from "../../services/exercise-record.service";
import { isObjectWithData } from "../../helpers";
import { DateTime } from "luxon";

/**
 * Active Workout Module
 */

export const namespaced = true;

export const state = {
  id: null,
  name: null,
  step: null,
  begin: null,
  exercises: null, // Data for the workout exercises
  previous: null, // Previous exercise records for this workout
  records: null // Any new exercise records for the active workout
};

export const mutations = {
  SET(state, active) {
    state.id = active.id;
    state.name = active.name;
    state.step = active.step;
    state.begin = active.begin;
    state.exercises = active.exercises;
    state.previous = active.previous;
    state.records = active.records;
  },
  CLEAR(state) {
    state.id = "";
    state.name = "";
    state.step = 1; // 1 is the lowest valid step for steppers
    state.begin = null;
    state.exercises = [];
    state.previous = [];
    state.records = [];
  },
  SET_STEP(state, step) {
    state.step = step;
  }
};

export const actions = {
  init({ commit }, active) {
    if (isObjectWithData(active)) {
      commit("SET", {
        id: active.id,
        name: active.name,
        step: active.step,
        begin: active.begin,
        exercises: active.exercises,
        previous: active.previous,
        records: active.records
      });
    } else {
      commit("CLEAR");
    }
  },

  start({ commit, rootGetters }, { id, name, exerciseIds }) {
    const startState = {
      id,
      name,
      step: 1,
      begin: DateTime.local().toISO(),
      exercises: rootGetters["exercise/getExercisesByIds"](exerciseIds),
      previous: [],
      records: []
    };

    commit("SET", startState);
    ActiveService.update(startState); // Don't need to await
  },

  cancel({ dispatch }) {
    dispatch("delete");
  },

  async submit({ state, dispatch }) {
    WorkoutRecordService.create({
      workoutId: state.id,
      begin: state.begin
    });

    /**
     * @todo Save new exercise records in storage (Q: Link exercise records to a workout Id???)
     */
    ExerciseRecordService.create(null);

    // Update state with newly submitted record
    const servExerRecs = ExerciseRecordService.get();
    const servWorkRecs = WorkoutRecordService.get();
    const exerRecs = await servExerRecs;
    const workRecs = await servWorkRecs;

    dispatch("exerciseRecord/initExercises", exerRecs, { root: true });
    dispatch("workoutRecord/initWorkouts", workRecs, { root: true });
    dispatch("delete");
  },

  delete({ commit }) {
    commit("CLEAR");
    ActiveService.delete(); // Don't need to await
  },

  setStep({ state, commit }, step) {
    commit("SET_STEP", step);
    ActiveService.update(state); // Don't need to await
  }
};

export const getters = {};
