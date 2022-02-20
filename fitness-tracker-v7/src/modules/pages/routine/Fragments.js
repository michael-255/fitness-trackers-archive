import State from "../../data/state";
import Helpers from "../../helpers";
import WeightDetails from "../../../classes/weight-details";
import CardioDetails from "../../../classes/cardio-details";

/**
 * Component fragments for the Home Page
 */
const RoutineFragments = (function() {
  /**
   * Top navbar
   * @returns {Node}
   */
  const getNavbar = function() {
    const frag = document.createDocumentFragment();
    const navbar = document.createElement("navbar");

    navbar.innerHTML = `
      <navbar class="routine-navbar">
        <span>
          <i class="material-icons" id="cancel-btn">cancel</i>
        </span>
        <span>
          <i class="material-icons">calendar_today</i> &nbsp;
          <span>${Helpers.getDateString()}</span>
        </span>
        <span>
          <i class="material-icons">timer</i> &nbsp;
          <span id="routine-timer">${Helpers.getTimeString()}</span>
        </span>
      </navbar>
    `;

    frag.appendChild(navbar);
    return frag;
  };

  /**
   * Title
   * @returns {Node}
   */
  const getTitle = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "routine-title";
    div.id = State.getCurrentRoutine().id;
    div.innerHTML = State.getCurrentRoutine().name;

    frag.appendChild(div);
    return frag;
  };

  /**
   * Exercises
   * @returns {Node}
   */
  const getExercises = function() {
    const frag = document.createDocumentFragment();

    State.getCurrentExercises().forEach(exercise => {
      const div = document.createElement("div");
      div.className = "exercise";
      div.id = exercise.id;

      div.appendChild(getHeader(exercise));
      div.appendChild(getNotes(exercise));
      div.appendChild(getDetails(exercise));

      frag.appendChild(div);
    });

    return frag;
  };

  /**
   * Exercise Header
   * @returns {Node}
   */
  const getHeader = function(exercise) {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "exercise-header";
    div.innerHTML = `
      <span class="exercise-name">${exercise.name}</span>
      <span class="exercise-category">${exercise.category}</span>
    `;

    frag.appendChild(div);
    return frag;
  };

  /**
   * Exercise Notes
   * @returns {Node}
   */
  const getNotes = function(exercise) {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "exercise-notes";
    div.innerHTML = `
      <div>${exercise.notes}</div>     
    `;

    // Display additional info based on details type
    if (exercise.details instanceof WeightDetails) {
      const weightData = State.getLoadedExerciseById(exercise.id).details;
      div.innerHTML += weightData.highest_weight
        ? `<div class="note-highlight">Highest Weight: ${weightData.highest_weight} (${weightData.highest_weight_date})</div>`
        : `<div class="note-highlight">Highest Weight: No previous record</div>`;
    }

    frag.appendChild(div);
    return frag;
  };

  /**
   * Exercise Details
   * @returns {Node}
   */
  const getDetails = function(exercise) {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "exercise-details";

    // Display inputs based on details type
    if (exercise.details instanceof CardioDetails) {
      const divInputs = document.createElement("div");
      divInputs.className = "cardio-inputs";
      divInputs.innerHTML = `
        <div>Duration</div>
        <div>Distance or Steps</div>
      `;

      divInputs.appendChild(getInput(exercise.id, "duration", null));
      divInputs.appendChild(getInput(exercise.id, "dist_steps", null));

      div.appendChild(divInputs);
    } else if (exercise.details instanceof WeightDetails) {
      const divInputs = document.createElement("div");
      divInputs.className = "weight-inputs";
      divInputs.innerHTML = `
        <div>Set</div>
        <div>Weight</div>
        <div>Reps</div>
      `;
      divInputs.appendChild(getSetNumber(1));
      divInputs.appendChild(getInput(exercise.id, "weight", 0));
      divInputs.appendChild(getInput(exercise.id, "reps", 0));
      divInputs.appendChild(getSetNumber(2));
      divInputs.appendChild(getInput(exercise.id, "weight", 1));
      divInputs.appendChild(getInput(exercise.id, "reps", 1));
      divInputs.appendChild(getSetNumber(3));
      divInputs.appendChild(getInput(exercise.id, "weight", 2));
      divInputs.appendChild(getInput(exercise.id, "reps", 2));
      divInputs.appendChild(getSetNumber(4));
      divInputs.appendChild(getInput(exercise.id, "weight", 3));
      divInputs.appendChild(getInput(exercise.id, "reps", 3));
      divInputs.appendChild(getSetNumber(5));
      divInputs.appendChild(getInput(exercise.id, "weight", 4));
      divInputs.appendChild(getInput(exercise.id, "reps", 4));

      div.appendChild(divInputs);
    }

    frag.appendChild(div);
    return frag;
  };

  /**
   * Set Number
   * @returns {Node}
   */
  const getSetNumber = function(setNumber) {
    const frag = document.createDocumentFragment();
    const div = document.createElement("div");
    div.innerHTML = setNumber;

    frag.appendChild(div);
    return frag;
  };

  /**
   * Input
   * @returns {Node}
   */
  const getInput = function(exerciseId, fieldName, index) {
    const frag = document.createDocumentFragment();

    const input = document.createElement("input");
    input.type = "number";

    input.addEventListener("input", e => {
      State.setExerciseState(exerciseId, fieldName, index, e.target.value);
    });

    frag.appendChild(input);
    return frag;
  };

  /**
   * Footer
   * @returns {Node}
   */
  const getFooter = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "routine-footer";
    div.innerHTML = "<button id='finish-btn'>Finish Workout</button>";

    frag.appendChild(div);
    return frag;
  };

  return {
    getNavbar,
    getTitle,
    getExercises,
    getFooter
  };
})();

export default RoutineFragments;
