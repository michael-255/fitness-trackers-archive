import ExerciseRecordService from "../../services/exercise-record.service";
import { isArrayWithData } from "../../helpers";

/**
 * Exercise Records Module
 */

export const namespaced = true;

export const state = {
  exercises: null
};

export const mutations = {
  SET(state, exerciseRecords) {
    state.exercises = exerciseRecords;
  },
  CLEAR(state) {
    state.workouts = [];
  }
};

export const actions = {
  initExercises({ commit }, exerciseRecords) {
    if (isArrayWithData(exerciseRecords)) {
      commit("SET", exerciseRecords);
    } else {
      commit("CLEAR");
    }
  },

  delete({ commit }) {
    commit("CLEAR");
    ExerciseRecordService.delete(); // Don't need to await
  }
};

export const getters = {
  getMostRecentById: state => id => {
    console.log("state:", state);
    console.log("id:", id);
    return "Exercise Records Getter Test!";
  }
};
