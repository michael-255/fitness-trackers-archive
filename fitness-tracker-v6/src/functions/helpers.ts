import { User } from "../classes/user";
import { constructHomePage, constructRoutinePage } from "./dom-constructing";
import { ExerciseRecord } from "../classes/support-classes/exerciseRecord";

/**
 * Fetches JSON exercise and routine data for initial data seeding
 * @param url - string
 * @returns promise
 * @todo convert this to an async function
 */
export function getSeedData(url: string): Promise<any> {
  return fetch(url, {
    method: "GET"
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.error(`Problem fetching JSON data: ${err}`);
    });
}

/**
 * Returns date string formatted as MM/DD/YYYY
 * @returns string
 */
export function getDateString(): string {
  const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();
  return month + "/" + day + "/" + year;
}

/**
 * Adds delegated event listeners to the #app
 * @param user - Object
 */
export function loadEventListeners(user: User): void {
  const app = document.getElementById("app");

  // Routine buttons
  app.addEventListener("mousedown", e => {
    const routineIds = [];

    // Load routine Ids into an array for comparision
    user.routines.forEach(routine => {
      routineIds.push(routine.id);
    });

    // Start routine with Id of clicked element if its in the routines array
    if (routineIds.includes((e.target as HTMLElement).id)) {
      startRoutineById((e.target as HTMLElement).id, user);
    }
  });

  // Results button
  app.addEventListener("mousedown", e => {
    if ((e.target as HTMLElement).id === "results-btn") {
      getRoutineSummary(user);
    }
  });

  // Cancel button
  app.addEventListener("mousedown", e => {
    if ((e.target as HTMLElement).id === "cancel-btn") {
      cancelRoutine(user);
    }
  });
}

function startRoutineById(routineId: string, user: User): void {
  constructRoutinePage(routineId, user);
}

function cancelRoutine(user: User): void {
  if (confirm("Cancel this routine?")) {
    stopRoutineTimer.call(window);
    document.getElementById("routine-page").remove();
    constructHomePage(user.routines);
  }
}

// Global - not ideal
var timeId: number;

// Tracks time for current activity
export function routineTimer(startTime: number): void {
  const now = new Date().getTime();
  const timeDiff = now - startTime;
  const secsPerDay = 60 * 60 * 1000 * 24;
  const secsPerHour = 60 * 60 * 1000;

  const hours = Math.floor(((timeDiff % secsPerDay) / secsPerHour) * 1);
  const mins = Math.floor(
    (((timeDiff % secsPerDay) % secsPerHour) / (60 * 1000)) * 1
  );
  const secs = Math.floor(
    ((((timeDiff % secsPerDay) % secsPerHour) % (60 * 1000)) / 1000) * 1
  );

  const sHours = hours.toString().padStart(2, "0");
  const sMins = mins.toString().padStart(2, "0");
  const sSecs = secs.toString().padStart(2, "0");

  document.querySelector(
    "#running-timer"
  ).innerHTML = `${sHours}:${sMins}:${sSecs}`;

  clearTimeout(timeId);

  timeId = setTimeout(() => (this.routineTimer(startTime), 1000));
}

function stopRoutineTimer() {
  clearTimeout(timeId);
}

function getRoutineSummary(user: User): void {
  user.results = []; // empty results array
  user.results.push(getDateString());
  user.results.push(
    `Total Time: ${document.querySelector("#running-timer").textContent}`
  );
  user.results.push(""); // empty space

  // Get exercise Ids for current routine
  const exerciseIds: string[] = [];
  document.querySelectorAll(".exercise").forEach(exerciseNode => {
    exerciseIds.push(exerciseNode.id);
  });

  exerciseIds.forEach(exerId => {
    // Find each exercise from the Ids array
    const curExercise = user.exercises.find(exercise => exercise.id === exerId);

    // Exercise had duration and distance inputs
    if (curExercise.inputs.hasDuration && curExercise.inputs.hasDistance) {
      const duration = (document.getElementById(
        `${curExercise.id}_duration`
      ) as HTMLInputElement).value;

      const distance = (document.getElementById(
        `${curExercise.id}_distance`
      ) as HTMLInputElement).value;

      user.results.push(`-----${curExercise.name}-----
          new ExerciseRecord({
          duration: ${duration === "" ? "0" : duration},
          distance: ${distance === "" ? "0" : distance},
          sets: []
        })
      `);

      // Exercise has duration input only
    } else if (curExercise.inputs.hasDuration) {
      const duration = (document.getElementById(
        `${curExercise.id}_duration`
      ) as HTMLInputElement).value;

      user.results.push(`-----${curExercise.name}-----
          new ExerciseRecord({
          duration: ${duration === "" ? "0" : duration},
          distance: null,
          sets: []
        })
      `);

      // Exercise has weight and reps inputs
    } else if (curExercise.inputs.hasWeight && curExercise.inputs.hasReps) {
      let wipRecord = `-----${curExercise.name}-----
        new ExerciseRecord({
          duration: null,
          distance: null,
          sets: [`;

      // Look at previous record for number of sets
      curExercise.exerciseRecords[0].sets.forEach((oneSet, i) => {
        const weight = (document.getElementById(
          `${curExercise.id}_weight${i}`
        ) as HTMLInputElement).value;

        const reps = (document.getElementById(
          `${curExercise.id}_rep${i}`
        ) as HTMLInputElement).value;

        wipRecord += `
          new OneSet({
            weight: ${weight === "" ? "0" : weight},
            reps: ${reps === "" ? "0" : reps}
          }),`;
      });
      // trim off trailing ','
      wipRecord = wipRecord.slice(0, -1);

      // Close wip record
      wipRecord += `
        ]})
      `;

      user.results.push(wipRecord);
    }
  });

  // Paste formatted data to textarea
  // any is not ideal
  const textarea: any = document.getElementById("results-text");
  textarea.textContent = "";

  user.results.forEach(entry => {
    textarea.textContent += entry + "\n";
  });

  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy text!", err);
  }
}
