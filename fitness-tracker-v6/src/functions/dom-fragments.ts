import { Routine } from "../classes/routine";
import { Exercise } from "../classes/exercise";
import { getDateString } from "./helpers";
import { Icon } from "../enums/enums";

/**
 * Constructs DOM nodes containing routine buttons
 * @param routines - Routine[]
 * @returns Node
 */
export function getRoutinesFragment(routines: Routine[]): Node {
  const routinesFragment = document.createDocumentFragment();
  const routinesDiv = document.createElement("div");

  routinesDiv.className = "routines-btns";

  routines.forEach(routine => {
    const routineButton = document.createElement("button");
    routineButton.id = routine.id;
    routineButton.textContent = routine.name;
    routineButton.className = "routine-btn";

    routinesDiv.appendChild(routineButton);
  });

  return routinesFragment.appendChild(routinesDiv);
}

/**
 * Constructs DOM nodes containing header bar for a routine
 * @returns Node
 */
export function getHeaderFragment(): Node {
  const headerFrag = document.createDocumentFragment(),
    header = document.createElement("header"),
    cancel = document.createElement("span"),
    calendar = document.createElement("span"),
    timer = document.createElement("span");

  // Easier to use innerHTML to create these elements
  cancel.innerHTML = `<i class='material-icons' id='cancel-btn'>${Icon.CANCEL}</i>`;
  calendar.innerHTML = `
    <i class="material-icons">${Icon.CALENDAR}</i>
    &nbsp; <span>${getDateString()}</span>
  `;
  timer.innerHTML = `
    <i class="material-icons">${Icon.TIMER}</i>
    &nbsp; <span id="running-timer"></span>
  `;

  header.appendChild(cancel);
  header.appendChild(calendar);
  header.appendChild(timer);

  return headerFrag.appendChild(header);
}

/**
 * Constructs DOM nodes containing an exercise for a routine
 * @param exercise - Object
 * @returns Node
 */
export function getExerciseFragment(exercise: Exercise): Node {
  const exerciseFrag = document.createDocumentFragment(),
    exerciseDiv = document.createElement("div");

  exerciseDiv.id = exercise.id;
  exerciseDiv.className = "exercise";
  exerciseDiv.appendChild(getExerciseHeadingFragment(exercise));
  exerciseDiv.appendChild(getExerciseObjectivesFragment(exercise));
  exerciseDiv.appendChild(getExerciseInputsFragment(exercise));

  return exerciseFrag.appendChild(exerciseDiv);
}

/**
 * Constructs DOM nodes containing the exercise name and category
 * @param exercise - Object
 * @returns Node
 */
function getExerciseHeadingFragment(exercise: Exercise): Node {
  const headingFrag = document.createDocumentFragment(),
    headingDiv = document.createElement("div"),
    nameSpan = document.createElement("span"),
    categorySpan = document.createElement("span");

  headingDiv.className = "exercise-heading";
  nameSpan.className = "exercise-name";
  categorySpan.className = "exercise-category";
  nameSpan.textContent = exercise.name;
  categorySpan.textContent = exercise.category;

  headingDiv.appendChild(nameSpan);
  headingDiv.appendChild(categorySpan);

  return headingFrag.appendChild(headingDiv);
}

/**
 * Constructs DOM nodes containing the exercise objectives
 * @param exercise - Object
 * @returns Node
 */
function getExerciseObjectivesFragment(exercise: Exercise): Node {
  const objectivesFrag = document.createDocumentFragment(),
    objectivesDiv = document.createElement("div");

  objectivesDiv.className = "exercise-objectives";

  exercise.objectives.forEach(objective => {
    const objectiveSpan = document.createElement("span");
    objectiveSpan.className = "objective";
    objectiveSpan.innerHTML = `
      <i class="material-icons ${objective.icon}">${objective.icon}</i>
      <p>${objective.text}</p>
    `;

    objectivesDiv.appendChild(objectiveSpan);
  });

  return objectivesFrag.appendChild(objectivesDiv);
}

/**
 * Constructs DOM nodes containing the exercise inputs
 * @param exercise - Object
 * @returns Node
 */
function getExerciseInputsFragment(exercise: Exercise): Node {
  const inputsFrag = document.createDocumentFragment(),
    inputsDiv = document.createElement("div");

  inputsDiv.className = "exercise-inputs";

  if (exercise.inputs.hasDuration || exercise.inputs.hasDistance) {
    // Duration first for top div - (basing off the first record only - not ideal)
    if (exercise.inputs.hasDuration) {
      const div = document.createElement("div");
      div.className = "inputs-col duration";
      div.innerHTML = `
        <p class='top-text'>Duration</p>
        <input type='number' id='${exercise.id}_duration' placeholder='${exercise.exerciseRecords[0].duration} minutes'>
      `;
      inputsDiv.appendChild(div);
    }

    // Distance second for top div - (basing off the first record only - not ideal)
    if (exercise.inputs.hasDistance) {
      const div = document.createElement("div");
      div.className = "inputs-col distance";
      div.innerHTML = `
        <p class='top-text'>Distance</p>
        <input type='number' id='${exercise.id}_distance' placeholder='${exercise.exerciseRecords[0].distance} miles'>
      `;
      inputsDiv.appendChild(div);
    }
  }

  if (exercise.inputs.hasReps || exercise.inputs.hasWeight) {
    const setNumbersDiv = document.createElement("div"),
      weightsDiv = document.createElement("div"),
      repsDiv = document.createElement("div");

    setNumbersDiv.className = "inputs-col sets";
    weightsDiv.className = "inputs-col weight";
    repsDiv.className = "inputs-col reps";

    exercise.exerciseRecords[0].sets.forEach((oneSet, i) => {
      // Top Text only added once
      if (i === 0) {
        const pNum = document.createElement("p"),
          pWeight = document.createElement("p"),
          pReps = document.createElement("p");

        pNum.className = "top-text";
        pWeight.className = "top-text";
        pReps.className = "top-text";

        pNum.textContent = "Set";
        pWeight.textContent = "Weight";
        pReps.textContent = "Reps";

        setNumbersDiv.appendChild(pNum);
        weightsDiv.appendChild(pWeight);
        repsDiv.appendChild(pReps);
      }

      // Weight and Reps
      const setNumberP = document.createElement("p"),
        weightInput = document.createElement("input"),
        repsInput = document.createElement("input");

      setNumberP.className = "set-number";
      weightInput.className = "weight-input";
      repsInput.className = "rep-input";

      setNumberP.textContent = `${i + 1}`;
      weightInput.id = `${exercise.id}_weight${i}`;
      repsInput.id = `${exercise.id}_rep${i}`;
      weightInput.setAttribute("type", "number");
      repsInput.setAttribute("type", "number");

      weightInput.placeholder = `${oneSet.weight} lbs`;
      repsInput.placeholder = `${oneSet.reps} reps`;

      setNumbersDiv.appendChild(setNumberP);
      weightsDiv.appendChild(weightInput);
      repsDiv.appendChild(repsInput);
    });

    inputsDiv.appendChild(setNumbersDiv);
    inputsDiv.appendChild(weightsDiv);
    inputsDiv.appendChild(repsDiv);
  }

  return inputsFrag.appendChild(inputsDiv);
}

/**
 * Constructs DOM nodes containing the results button and textarea
 * @returns Node
 */
export function getFooter(): Node {
  const footerFrag = document.createDocumentFragment(),
    footerDiv = document.createElement("div"),
    resultsBtn = document.createElement("button"),
    textarea = document.createElement("textarea");

  resultsBtn.textContent = "Submit";
  resultsBtn.id = "results-btn";
  textarea.id = "results-text";

  footerDiv.className = "footer";
  footerDiv.appendChild(resultsBtn);
  footerDiv.appendChild(textarea);

  return footerFrag.appendChild(footerDiv);
}
