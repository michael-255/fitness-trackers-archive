import RoutineFragments from "./Fragments";
import RoutineListeners from "./Listeners";
import Helpers from "../../helpers";

/**
 * Responsible for assembling the DOM elements for the Routine Page
 */
const RoutinePage = (function() {
  const constructRoutinePage = function() {
    const app = document.getElementById("app");
    const frag = document.createDocumentFragment();

    const routinePage = document.createElement("section");
    routinePage.id = "routine-page";

    routinePage.appendChild(RoutineFragments.getNavbar());
    routinePage.appendChild(RoutineFragments.getTitle());
    routinePage.appendChild(RoutineFragments.getExercises());
    routinePage.appendChild(RoutineFragments.getFooter());

    frag.appendChild(routinePage);

    // Clear App then attach Routine Page
    document.getElementById("app").innerHTML = "";
    app.appendChild(frag);

    // Load Routine Page event listeners
    RoutineListeners.loadEventListenersOnElement(routinePage.id);

    // Start the routine timer
    Helpers.startTimer("routine-timer");
  };

  return { constructRoutinePage };
})();

export default RoutinePage;
