import React from "react";
import { Link } from "react-router-dom";

const NavButton = props => {
  const { icon, location } = props;

  return (
    <li>
      <Link to={`/${location}`}>
        <i className='material-icons'>{icon}</i>
      </Link>
    </li>
  );
};

export default NavButton;
