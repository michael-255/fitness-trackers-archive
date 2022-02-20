import { isArrayWithData, ExerciseRecord } from "../helpers";

const ExerciseRecordService = {
  /**
   * Get exercise records from storage
   * @returns {Promise<Array>} Exercise records
   */
  get() {
    return new Promise(resolve => {
      console.log("Getting exercise records...");
      resolve(JSON.parse(localStorage.getItem("exerciseRecords")));
    });
  },

  /**
   * Create exercise record in storage
   * @returns {Promise<string>} true
   */
  create(data) {
    return new Promise(resolve => {
      /**
       * @todo need proper record data setup and function params...
       *
       * May need to import ASet from helpers as well...
       *
       * exerciseId = null,
       * notes = "",
       * isConfirmed = null,
       * sets = []
       */
      const newExerciseRecord = new ExerciseRecord(data);
      let exerciseRecords = JSON.parse(localStorage.getItem("exerciseRecords"));

      if (isArrayWithData(exerciseRecords)) {
        // Storage already has data
        exerciseRecords.push(newExerciseRecord);
        localStorage.setItem(
          "exerciseRecords",
          JSON.stringify(exerciseRecords)
        );
      } else {
        // Empty or no valid data
        exerciseRecords = [];
        exerciseRecords.push(newExerciseRecord);
        localStorage.setItem(
          "exerciseRecords",
          JSON.stringify(exerciseRecords)
        );
      }

      resolve(true);
    });
  },

  /**
   * Delete exercise records from storage
   * @returns {Promise<string>} true
   */
  delete() {
    return new Promise(resolve => {
      console.log("Deleting exercise records...");
      localStorage.removeItem("exerciseRecords");
      resolve(true);
    });
  }
};

export default ExerciseRecordService;
