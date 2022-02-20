import {
  START_ROUTINE,
  SET_DURATION,
  SET_DISTANCE,
  SET_WEIGHT,
  SET_REPS,
  FINALIZE_STATE,
  STORE_UPDATED_STATE
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case START_ROUTINE:
      return {
        ...state,
        current: {
          exercises: [...action.payload.exercises],
          routine: {
            ...action.payload.routine
          },
          startedAt: action.payload.startedAt
        }
      };
    case SET_DURATION:
      const durationState = { ...state };

      durationState.current.exercises.map(exercise => {
        if (exercise.id === action.payload.id) {
          exercise.duration = action.payload.value;
          return exercise;
        } else {
          return exercise;
        }
      });

      return { ...durationState };
    case SET_DISTANCE:
      const distanceState = { ...state };

      distanceState.current.exercises.map(exercise => {
        if (exercise.id === action.payload.id) {
          exercise.distance = action.payload.value;
          return exercise;
        } else {
          return exercise;
        }
      });

      return { ...distanceState };
    case SET_WEIGHT:
      const weightState = { ...state };

      weightState.current.exercises.map(exercise => {
        if (exercise.id === action.payload.id) {
          exercise.sets[action.payload.index].weight = action.payload.value;
          return exercise;
        } else {
          return exercise;
        }
      });

      return { ...weightState };
    case SET_REPS:
      const repsState = { ...state };

      repsState.current.exercises.map(exercise => {
        if (exercise.id === action.payload.id) {
          exercise.sets[action.payload.index].reps = action.payload.value;
          return exercise;
        } else {
          return exercise;
        }
      });

      return { ...repsState };
    case FINALIZE_STATE:
      let workingState = { ...state };

      // Calculate routine time
      workingState.current.routine.duration =
        new Date().getTime() - workingState.current.startedAt;

      // Filter out the current routine
      workingState.previous.routines = workingState.previous.routines.filter(
        routine => routine.id !== workingState.current.routine.id
      );
      // Push current routine into previous state
      workingState.previous.routines.push(workingState.current.routine);

      // Filter out the current exercises
      workingState.previous.exercises = workingState.previous.exercises.filter(
        exercise => {
          if (
            !workingState.current.routine.exercise_ids.includes(exercise.id)
          ) {
            return exercise;
          }
        }
      );
      // Push current exercises into previous state
      workingState.current.exercises.forEach(exercise => {
        workingState.previous.exercises.push(exercise);
      });

      return { ...workingState };
    case STORE_UPDATED_STATE:
      const data = {
        exercises: [...state.previous.exercises],
        routines: [...state.previous.routines]
      };

      // Saves new local storage data
      localStorage.setItem("data", JSON.stringify(data));
      return { ...state };
    default:
      return state;
  }
};
