import WorkoutService from "../../services/workout.service";
import { isArrayWithData } from "../../helpers";

/**
 * Available Workouts Module
 */

export const namespaced = true;

export const state = {
  workouts: null
};

export const mutations = {
  SET(state, workouts) {
    state.workouts = workouts;
  },
  CLEAR(state) {
    state.workouts = [];
  }
};

export const actions = {
  async defaults({ commit }) {
    const workouts = await WorkoutService.initDefaults();
    commit("SET", workouts);
  },

  init({ commit }, workouts) {
    if (isArrayWithData(workouts)) {
      commit("SET", workouts);
    } else {
      commit("CLEAR");
    }
  },

  delete({ commit }) {
    commit("CLEAR");
    WorkoutService.delete(); // Don't need to await
  }
};

export const getters = {
  getWorkoutById: state => id => {
    return state.workouts.find(workout => workout.id === id);
  }
};
