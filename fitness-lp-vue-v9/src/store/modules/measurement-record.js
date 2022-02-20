import MeasurementRecordService from "../../services/measurement-record.service";
import { isArrayWithData } from "../../helpers";

/**
 * Measurement Records Module
 */

export const namespaced = true;

export const state = {
  measurements: null
};

export const mutations = {
  SET(state, measurementRecords) {
    state.measurements = measurementRecords;
  },
  CLEAR(state) {
    state.workouts = [];
  }
};

export const actions = {
  initMeasurements({ commit }, measurementRecords) {
    if (isArrayWithData(measurementRecords)) {
      commit("SET", measurementRecords);
    } else {
      commit("CLEAR");
    }
  },

  delete({ commit }) {
    commit("CLEAR");
    MeasurementRecordService.delete(); // Don't need to await
  }
};

export const getters = {
  getMostRecentById: state => id => {
    console.log("state:", state);
    console.log("id:", id);
    return "Measurement Records Getter Test!";
  }
};
