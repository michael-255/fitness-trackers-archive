import HomePage from "../home/Home";
import Helpers from "../../helpers";
import State from "../../data/state";
import Store from "../../data/store";

/**
 * Adds all event listeners to the delegated DOM element
 */
const RoutineListeners = (function() {
  const loadEventListenersOnElement = function(elementId) {
    const routinePage = document.getElementById(elementId);

    // Cancel button
    routinePage.addEventListener("mousedown", e => {
      if (e.target.id === "cancel-btn") {
        if (confirm("Cancel this routine?")) {
          document.getElementById("app").innerHTML = "";
          Helpers.clearTimer();
          HomePage.constructHomePage();
        }
      }
    });

    // Results button
    routinePage.addEventListener("mousedown", e => {
      if (e.target.id === "finish-btn") {
        if (confirm("Finish and save this workout?")) {
          Store.storeFitnessData(
            State.getCurrentExercises(),
            State.getCurrentRoutine()
          );
          State.refreshState();
          document.getElementById("app").innerHTML = "";
          Helpers.clearTimer();
          HomePage.constructHomePage();
          State.DEBUG_STATE(); // TEMP
        }
      }
    });
  };

  return { loadEventListenersOnElement };
})();

export default RoutineListeners;
