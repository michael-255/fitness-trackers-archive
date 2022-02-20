import React from "react";

const Heading = props => {
  const { name, category } = props;

  return (
    <div className='heading'>
      <span className='name'>{name}</span>
      <span className='category'>{category}</span>
    </div>
  );
};

export default Heading;
