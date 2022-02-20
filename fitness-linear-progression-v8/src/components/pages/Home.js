import React, { Fragment } from "react";
// import Navbar from "../home/Navbar";
import Routines from "../home/Routines";

const Home = () => {
  const appTitle = "Fitness Progression";

  const clearLocalStorage = function() {
    if (window.confirm("Clear routine records from Local Storage?")) {
      localStorage.clear();
    }
  };

  return (
    <Fragment>
      {/* <Navbar /> */}
      <h1 className='title'>{appTitle}</h1>
      <Routines />
      <button className='btn clear' onClick={clearLocalStorage}>
        Clear Local Storage
      </button>
    </Fragment>
  );
};

export default Home;
