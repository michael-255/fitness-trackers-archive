import Vue from "vue";
import Vuex from "vuex";
import * as modal from "./modules/modal";
import * as selected from "./modules/selected";
import * as workoutRecord from "./modules/workout-record";
import * as exerciseRecord from "./modules/exercise-record";
import * as measurementRecord from "./modules/measurement-record";
import * as workout from "./modules/workout";
import * as exercise from "./modules/exercise";
import * as active from "./modules/active";
import ExerciseService from "../services/exercise.service";
import WorkoutService from "../services/workout.service";
import ActiveService from "../services/active.service";
import WorkoutRecordService from "../services/workout-record.service";
import ExerciseRecordService from "../services/exercise-record.service";
import MeasurementRecordService from "../services/measurement-record.service";

// const testStuff = {
//   doThis: () => console.log("Testing stuff...")
// }

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDrawerActive: false // Nav Drawer
  },

  mutations: {
    DRAWER_TRUE(state) {
      state.isDrawerActive = true;
    },
    DRAWER_FALSE(state) {
      state.isDrawerActive = false;
    }
  },

  actions: {
    // testing: ({ dispatch }, deps) => {
    //   // testStuff.doThis()
    //   dispatch("setDrawerActive");
    //   console.log("---testing deps thing...");
    // },

    async initApp({ dispatch }) {
      console.log("Initializing App Data...");

      const servMeasureRecs = MeasurementRecordService.get();
      const servExerRecs = ExerciseRecordService.get();
      const servWorkRecs = WorkoutRecordService.get();
      const servExercises = ExerciseService.get();
      const servWorkouts = WorkoutService.get();
      const servActiveWorkout = ActiveService.get();

      // Promise all with async / await
      const measureRecs = await servMeasureRecs;
      const exerRecs = await servExerRecs;
      const workRecs = await servWorkRecs;
      const exercises = await servExercises;
      const workouts = await servWorkouts;
      const activeWorkout = await servActiveWorkout;

      dispatch("measurementRecord/initMeasurements", measureRecs);
      dispatch("exerciseRecord/initExercises", exerRecs);
      dispatch("workoutRecord/initWorkouts", workRecs);
      dispatch("exercise/init", exercises);
      dispatch("workout/init", workouts);
      dispatch("active/init", activeWorkout);
    },

    initDefaults({ dispatch }) {
      dispatch("exercise/defaults");
      dispatch("workout/defaults");
    },

    deleteStorage({ dispatch }) {
      dispatch("exercise/delete");
      dispatch("workout/delete");
      dispatch("active/delete");
      dispatch("measurementRecord/delete");
      dispatch("exerciseRecord/delete");
      dispatch("workoutRecord/delete");
    },

    setDrawerActive({ commit }, bool) {
      if (bool) {
        commit("DRAWER_TRUE");
      } else {
        commit("DRAWER_FALSE");
      }
    },

    toggleDrawer({ state, commit }) {
      if (state.isDrawerActive) {
        commit("DRAWER_FALSE");
      } else {
        commit("DRAWER_TRUE");
      }
    }
  },

  getters: {},

  modules: {
    modal,
    selected,
    exercise,
    workout,
    workoutRecord,
    exerciseRecord,
    measurementRecord,
    active
  }
});
