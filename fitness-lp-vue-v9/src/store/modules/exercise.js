import ExerciseService from "../../services/exercise.service";
import { isArrayWithData } from "../../helpers";

/**
 * Available Exercises Module
 */

export const namespaced = true;

export const state = {
  exercises: null
};

export const mutations = {
  SET(state, exercises) {
    state.exercises = exercises;
  },
  CLEAR(state) {
    state.exercises = [];
  }
};

export const actions = {
  async defaults({ commit }) {
    const exercises = await ExerciseService.initDefaults();
    commit("SET", exercises);
  },

  init({ commit }, exercises) {
    if (isArrayWithData(exercises)) {
      commit("SET", exercises);
    } else {
      commit("CLEAR");
    }
  },

  delete({ commit }) {
    commit("CLEAR");
    ExerciseService.delete(); // Don't need to await
  }
};

export const getters = {
  getExerciseById: state => id => {
    return state.exercises.find(exercise => exercise.id === id);
  },

  getExercisesByIds: state => ids => {
    let exercises = [];

    if (isArrayWithData(ids)) {
      exercises = ids.map(id => {
        return state.exercises.find(exercise => exercise.id === id);
      });
    }

    return exercises;
  }
};
