import React from "react";
import Constants from "../../modules/constants";
import { useHistory } from "react-router-dom";

const Header = props => {
  const history = useHistory();

  const cancelIcon = Constants.Icon.CLEAR;
  const timerIcon = Constants.Icon.TIMER;

  const onCancel = function() {
    if (window.confirm("Cancel this workout?")) {
      history.push("/");
    }
  };

  return (
    <ul className='routine-header'>
      <li>
        <i onClick={onCancel} className='material-icons'>
          {cancelIcon}
        </i>
      </li>
      <li>
        <h3>{props.name}</h3>
      </li>
      <li>
        <i className='material-icons'>{timerIcon}</i>
      </li>
    </ul>
  );
};

export default Header;
