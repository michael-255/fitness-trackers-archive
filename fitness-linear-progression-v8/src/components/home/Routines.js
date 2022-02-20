import React, { useContext } from "react";
import RoutineButton from "../home/RoutineButton";
import AppContext from "../../context/appContext";

const Routines = () => {
  const appContext = useContext(AppContext);
  const { routines } = appContext.previous;

  routines.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else if (a.id < b.id) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <ul className='container'>
      {routines.map(routine => {
        return (
          <RoutineButton
            key={`rKey_${routine.id}`}
            rid={routine.id}
            name={routine.name}
            date={routine.date}
            duration={routine.duration}
          />
        );
      })}
    </ul>
  );
};

export default Routines;
