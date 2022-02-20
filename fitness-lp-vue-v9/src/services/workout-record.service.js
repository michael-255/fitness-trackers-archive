import { isArrayWithData, WorkoutRecord } from "../helpers";
import { DateTime, Interval } from "luxon";

const WorkoutRecordService = {
  /**
   * Get workout records from storage
   * @returns {Promise<Array>} Workout records
   */
  get() {
    return new Promise(resolve => {
      console.log("Getting workout records...");
      resolve(JSON.parse(localStorage.getItem("workoutRecords")));
    });
  },

  /**
   * Create workout record in storage - Will default the begin or end times to
   * the current local time as an ISO and calculate the duration from them
   * @param {string} begin ISO formatted date
   * @param {string} end ISO formatted date
   * @returns {Promise<string>} true
   */
  create({
    workoutId = null,
    begin = DateTime.local().toISO(),
    end = DateTime.local().toISO()
  }) {
    return new Promise(resolve => {
      // Calculate the duration for the workout record
      const beginDT = DateTime.fromISO(begin);
      const endDT = DateTime.fromISO(end);

      const duration = Interval.fromDateTimes(beginDT, endDT)
        .toDuration(["hours", "minutes", "seconds"])
        .toObject();

      const newWorkoutRecord = new WorkoutRecord({ workoutId, duration });
      let workoutRecords = JSON.parse(localStorage.getItem("workoutRecords"));

      if (isArrayWithData(workoutRecords)) {
        // Storage already has data
        workoutRecords.push(newWorkoutRecord);
        localStorage.setItem("workoutRecords", JSON.stringify(workoutRecords));
      } else {
        // Empty or no valid data
        workoutRecords = [];
        workoutRecords.push(newWorkoutRecord);
        localStorage.setItem("workoutRecords", JSON.stringify(workoutRecords));
      }

      resolve(true);
    });
  },

  /**
   * Delete workout records from storage
   * @returns {Promise<string>} true
   */
  delete() {
    return new Promise(resolve => {
      console.log("Deleting workout records...");
      localStorage.removeItem("workoutRecords");
      resolve(true);
    });
  }
};

export default WorkoutRecordService;
