import State from "./data/state";

/**
 * Helper functions to help simplify and shorten code in other parts of app
 */
const Helpers = (function() {
  let timerId = null;

  const startTimer = function(elementId) {
    // Clear timer before setting a new one just in case
    clearTimer();
    timerId = setInterval(() => continueTimerOnElement(elementId));
  };

  const continueTimerOnElement = function(elementId) {
    document.getElementById(elementId).innerHTML = getTimeString();
  };

  const clearTimer = function() {
    clearInterval(timerId);
  };

  /**
   * Returns a readable date string formatted as - Mon Jan 1 2020
   * @returns {string}
   */
  const getDateString = function() {
    const date = new Date();
    return date.toDateString();
  };

  /**
   * Returns a time string formatted as - 1h 45m 25s
   * @returns {string}
   */
  const getTimeString = function() {
    const startTime = State.getRoutineStartTime();
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - startTime;

    const secsPerDay = 60 * 60 * 1000 * 24;
    const secsPerHour = 60 * 60 * 1000;

    const hours = Math.floor(((timeDiff % secsPerDay) / secsPerHour) * 1);
    const mins = Math.floor(
      (((timeDiff % secsPerDay) % secsPerHour) / (60 * 1000)) * 1
    );
    const secs = Math.floor(
      ((((timeDiff % secsPerDay) % secsPerHour) % (60 * 1000)) / 1000) * 1
    );

    const strHours = hours.toString() != "0" ? `${hours.toString()}h ` : "";
    const strMins = mins.toString() != "0" ? `${mins.toString()}m ` : "";
    const strSecs = secs.toString() != "0" ? `${secs.toString()}s` : "";

    return `${strHours}${strMins}${strSecs}`;
  };

  return {
    getDateString,
    getTimeString,
    startTimer,
    clearTimer
  };
})();

export default Helpers;
