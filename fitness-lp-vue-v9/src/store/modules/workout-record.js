import WorkoutRecordService from "../../services/workout-record.service";
import { isArrayWithData } from "../../helpers";
import { DateTime } from "luxon";

/**
 * Workout Records Module
 */

export const namespaced = true;

export const state = {
  workouts: null
};

export const mutations = {
  SET(state, workoutRecords) {
    state.workouts = workoutRecords;
  },
  CLEAR(state) {
    state.workouts = [];
  }
};

export const actions = {
  initWorkouts({ commit }, workoutRecords) {
    if (isArrayWithData(workoutRecords)) {
      commit("SET", workoutRecords);
    } else {
      commit("CLEAR");
    }
  },

  delete({ commit }) {
    commit("CLEAR");
    WorkoutRecordService.delete(); // Don't need to await
  }
};

export const getters = {
  /**
   * Get the most recent workout record by workout id
   * @example
   * let ex = this.$store.getters["workoutRecord/getMostRecentById"](id);
   */
  getMostRecentById: state => id => {
    // Find workouts with matching id
    const filteredWorkouts = state.workouts.filter(
      workout => workout.workoutId === id
    );

    if (isArrayWithData(filteredWorkouts)) {
      if (filteredWorkouts.length > 1) {
        // Get createdAt dates as DateTimes from filtered workouts
        const workoutDates = filteredWorkouts.map(fws =>
          DateTime.fromISO(fws.createdAt).toMillis()
        );

        // Find the most recent time from workout dates
        const mostRecentTime = Math.max(...workoutDates);

        // Find the most recent workout from the most recent time
        const mostRecentWorkout = filteredWorkouts.filter(workout => {
          const workoutTime = DateTime.fromISO(workout.createdAt).toMillis();
          return workoutTime === mostRecentTime;
        })[0]; // Return first record only

        return mostRecentWorkout;
      } else {
        // Return the only workout that was found
        return filteredWorkouts[0];
      }
    } else {
      // No records for that workout id
      return null;
    }
  }
};
