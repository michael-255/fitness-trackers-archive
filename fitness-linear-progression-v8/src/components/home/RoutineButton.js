import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const RoutineButton = props => {
  const { rid, name, date, duration } = props;

  /**
   * Returns a time string formatted as - 1h 45m 25s
   * @returns {string}
   */
  const getTimeString = function(duration) {
    const secsPerDay = 60 * 60 * 1000 * 24;
    const secsPerHour = 60 * 60 * 1000;

    const hours = Math.floor(((duration % secsPerDay) / secsPerHour) * 1);
    const mins = Math.floor(
      (((duration % secsPerDay) % secsPerHour) / (60 * 1000)) * 1
    );
    const secs = Math.floor(
      ((((duration % secsPerDay) % secsPerHour) % (60 * 1000)) / 1000) * 1
    );

    const strHours = hours.toString() !== "0" ? `${hours.toString()}h ` : "";
    const strMins = mins.toString() !== "0" ? `${mins.toString()}m ` : "";
    const strSecs = secs.toString() !== "0" ? `${secs.toString()}s` : "";

    return `${strHours}${strMins}${strSecs}`;
  };

  const durationTime = getTimeString(duration);

  return (
    <li>
      <Link to={`/routine/${rid}`}>
        <div className='btn'>
          <div>{name}</div>
          <div className='small-text'>
            {(date && (
              <Fragment>
                {date} ({durationTime})
              </Fragment>
            )) ||
              "No previous record"}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RoutineButton;
