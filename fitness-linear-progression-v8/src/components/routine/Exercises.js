import React from "react";
import Exercise from "./exercise/Exercise";

const Exercises = props => {
  const { eids } = props;

  return (
    <div className='container'>
      {eids.map(exerId => {
        return <Exercise key={`eKey_${exerId}`} id={exerId} />;
      })}
    </div>
  );
};

export default Exercises;
