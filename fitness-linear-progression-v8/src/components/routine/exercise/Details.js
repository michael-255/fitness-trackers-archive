import React from "react";

const Details = props => {
  const { notes } = props;

  return (
    <div className='details'>
      <div className='notes'>{notes}</div>
    </div>
  );
};

export default Details;
