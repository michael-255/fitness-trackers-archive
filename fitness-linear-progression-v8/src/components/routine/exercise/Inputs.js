import React, { useContext } from "react";
import AppContext from "../../../context/appContext";
import Defaults from "../../../modules/defaults";

const Inputs = props => {
  const appContext = useContext(AppContext);
  const { setDuration, setDistance, setWeight, setReps } = appContext;
  const { id, category, duration, distance, sets } = props;

  const onDuration = function(e) {
    setDuration(id, e.target.value);
  };

  const onDistance = function(e) {
    setDistance(id, e.target.value);
  };

  const onWeight = function(e) {
    setWeight(id, Number(e.target.name), e.target.value);
  };

  const onReps = function(e) {
    setReps(id, e.target.name, e.target.value);
  };

  // Conditionals that determine which inputs appear
  if (category === Defaults.Category.MISC) {
    return (
      <div className='misc-inputs'>
        <div className='input-text'>Duration</div>
        <input
          type='number'
          placeholder={`${duration || "-"} minutes`}
          onChange={onDuration}
        />
      </div>
    );
  } else if (category === Defaults.Category.CARDIO) {
    return (
      <div className='cardio-inputs'>
        <div className='input-text'>Duration</div>
        <div className='input-text'>Distance or Steps</div>
        <input
          type='number'
          placeholder={`${duration || "-"} minutes`}
          onChange={onDuration}
        />
        <input
          type='number'
          placeholder={`${distance || "-"} miles/steps`}
          onChange={onDistance}
        />
      </div>
    );
  } else {
    return (
      <div className='weight-inputs'>
        <div className='input-text'>Set</div>
        <div className='input-text'>Weight</div>
        <div className='input-text'>Reps</div>
        <div className='set-text'>1</div>
        <input
          type='number'
          placeholder={`${sets[0].weight || "-"} lbs`}
          name='0'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={`${sets[0].reps || "-"} reps`}
          name='0'
          onChange={onReps}
        />
        <div className='set-text'>2</div>
        <input
          type='number'
          placeholder={`${sets[1].weight || "-"} lbs`}
          name='1'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={`${sets[1].reps || "-"} reps`}
          name='1'
          onChange={onReps}
        />
        <div className='set-text'>3</div>
        <input
          type='number'
          placeholder={`${sets[2].weight || "-"} lbs`}
          name='2'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={`${sets[2].reps || "-"} reps`}
          name='2'
          onChange={onReps}
        />
        <div className='set-text'>4</div>
        <input
          type='number'
          placeholder={`${sets[3].weight || "-"} lbs`}
          name='3'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={`${sets[3].reps || "-"} reps`}
          name='3'
          onChange={onReps}
        />
        <div className='set-text'>5</div>
        <input
          type='number'
          placeholder={`${sets[4].weight || "-"} lbs`}
          name='4'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={`${sets[4].reps || "-"} reps`}
          name='4'
          onChange={onReps}
        />
      </div>
    );
  }
};

export default Inputs;
