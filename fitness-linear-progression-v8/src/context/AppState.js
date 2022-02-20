import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import Initializer from "../modules/initializer";
import {
  START_ROUTINE,
  SET_DURATION,
  SET_DISTANCE,
  SET_WEIGHT,
  SET_REPS,
  FINALIZE_STATE,
  STORE_UPDATED_STATE
} from "./types";

const AppState = props => {
  const initialState = {
    previous: {
      exercises: Initializer.initAllExercises(),
      routines: Initializer.initAllRoutines(),
      best: Initializer.initAllBest()
    },
    current: {
      exercises: [],
      routine: null,
      startedAt: null
    }
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const startRoutine = function(exercises, routine, startedAt) {
    // Scrub previous performance data before setting current
    exercises = exercises.map(exercise => {
      return {
        ...exercise,
        date: new Date().toDateString(),
        duration: null,
        distance: null,
        sets: [
          { weight: null, reps: null },
          { weight: null, reps: null },
          { weight: null, reps: null },
          { weight: null, reps: null },
          { weight: null, reps: null }
        ]
      };
    });

    routine = {
      ...routine,
      date: new Date().toDateString()
    };

    dispatch({
      type: START_ROUTINE,
      payload: { exercises, routine, startedAt }
    });
  };

  const setDuration = function(id, value) {
    dispatch({
      type: SET_DURATION,
      payload: { id, value }
    });
  };

  const setDistance = function(id, value) {
    dispatch({
      type: SET_DISTANCE,
      payload: { id, value }
    });
  };

  const setWeight = function(id, index, value) {
    dispatch({
      type: SET_WEIGHT,
      payload: { id, index, value }
    });
  };

  const setReps = function(id, index, value) {
    dispatch({
      type: SET_REPS,
      payload: { id, index, value }
    });
  };

  const finalizeState = function() {
    dispatch({ type: FINALIZE_STATE });
    dispatch({ type: STORE_UPDATED_STATE });
  };

  const logState = () => {
    console.log(state);
  };

  //----------------------------------------------------------------------------
  return (
    <AppContext.Provider
      value={{
        previous: {
          exercises: initialState.previous.exercises,
          routines: initialState.previous.routines,
          best: initialState.previous.best
        },
        current: {
          exercises: [],
          routine: null,
          startedAt: null
        },
        logState,
        startRoutine,
        setDuration,
        setDistance,
        setWeight,
        setReps,
        finalizeState
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
