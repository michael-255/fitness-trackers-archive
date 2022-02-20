import State from "../../data/state";
import RoutinePage from "../routine/Routine";

/**
 * Adds all event listeners to the delegated DOM element
 */
const HomeListeners = (function() {
  const loadEventListenersOnElement = function(elementId) {
    const homePage = document.getElementById(elementId);
    const routineIds = State.getLoadedRoutines().map(routine => routine.id);

    // Routine buttons
    homePage.addEventListener("mousedown", e => {
      // Start routine with Id of clicked element if its in the routines array
      if (routineIds.includes(e.target.id)) {
        State.setRoutineState(e.target.id);
        RoutinePage.constructRoutinePage();
        State.DEBUG_STATE(); // TEMP
      }
    });
  };

  return { loadEventListenersOnElement };
})();

export default HomeListeners;
