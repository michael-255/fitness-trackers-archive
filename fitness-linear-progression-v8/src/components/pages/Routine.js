import React, { Fragment, useContext, useEffect } from "react";
import AppContext from "../../context/appContext";
import Header from "../routine/Header";
import Exercises from "../routine/Exercises";
import { useHistory } from "react-router-dom";

const Routine = props => {
  const appContext = useContext(AppContext);
  const { previous, startRoutine, finalizeState } = appContext;
  const { routineId } = props.match.params;
  const history = useHistory();

  // Get rountine name using the routine id
  const routineName = previous.routines.find(
    routine => routine.id === routineId
  ).name;

  // Get all exercise ids for routine using the routine id
  const exerciseIds = previous.routines.find(
    routine => routine.id === routineId
  ).exercise_ids;

  // Get data for this routines exercises using the exercise ids
  const exercises = exerciseIds.map(exerId => {
    return previous.exercises.find(exercise => exercise.id === exerId);
  });

  // Get the routine object using the routine id
  const routine = previous.routines.find(routine => routine.id === routineId);

  useEffect(() => {
    startRoutine(exercises, routine, new Date().getTime());
    // eslint-disable-next-line
  }, []);

  const finishWorkout = function() {
    if (window.confirm("Finish this workout?")) {
      finalizeState();
      history.push("/");
    }
  };

  return (
    <Fragment>
      <Header name={routineName} />
      <div className='top-spacer'></div>
      <Exercises eids={exerciseIds} />
      <button onClick={finishWorkout}>
        <h3>Submit Workout</h3>
      </button>
    </Fragment>
  );
};

export default Routine;
