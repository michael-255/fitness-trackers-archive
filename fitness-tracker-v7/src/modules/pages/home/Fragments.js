import State from "../../data/state";

/**
 * Component fragments for the Home Page
 */
const HomeFragments = (function() {
  /**
   * Top navbar
   * @returns {Node}
   * @todo Implement!
   */
  const getNavbar = function() {
    const frag = document.createDocumentFragment();

    const navbar = document.createElement("navbar");
    navbar.className = "home-navbar";
    navbar.innerHTML = "<p></p>";

    frag.appendChild(navbar);
    return frag;
  };

  /**
   * Title div
   * @returns {Node}
   */
  const getTitle = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "home-title";
    div.innerHTML = "<h1>Fitness Linear Progression</h1>";

    frag.appendChild(div);
    return frag;
  };

  /**
   * Routine buttons
   * @returns {Node}
   */
  const getRoutines = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "routines";

    State.getLoadedRoutines().forEach(routine => {
      div.appendChild(getRoutineButton(routine));
    });

    frag.appendChild(div);
    return frag;
  };

  /**
   * Single Routine button
   * @returns {Node}
   */
  const getRoutineButton = function(routineData) {
    const frag = document.createDocumentFragment();

    const lastDate = State.getLoadedRoutineById(routineData.id).routine_date;
    const lastTime = State.getLoadedRoutineById(routineData.id).routine_time;
    const dateTime = lastDate
      ? `${lastDate} (${lastTime})`
      : "No previous record";

    const routineBtn = document.createElement("button");
    routineBtn.className = "routine-btn";
    routineBtn.id = routineData.id;
    routineBtn.innerHTML = `
      <div class="click-through mini-text">${routineData.name}</div>
      <div class="click-through mini-text">${dateTime}</div>
    `;

    frag.appendChild(routineBtn);
    return frag;
  };

  /**
   * Footer byline (may get moved to an about page later)
   * @returns {Node}
   */
  const getFooter = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "home-footer";
    div.innerHTML = "<p>Fitness Linear Progression ~ Michael J.</p>";

    frag.appendChild(div);
    return frag;
  };

  return {
    getNavbar,
    getTitle,
    getRoutines,
    getFooter
  };
})();

export default HomeFragments;
