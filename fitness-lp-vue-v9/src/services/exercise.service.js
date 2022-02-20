import { DefaultExercises } from "../constants";

const ExerciseService = {
  /**
   * Initializes default exercises - overwrites existing data!
   * @returns {Promise<Array>} Default exercises
   * @example
   */
  initDefaults() {
    return new Promise(resolve => {
      console.log("Getting default exercises...");
      localStorage.setItem(
        "exercises",
        JSON.stringify(DefaultExercises.exercises)
      );
      resolve(DefaultExercises.exercises); // Dont need to JSON parse this
    });
  },

  /**
   * Get exercises from storage
   * @returns {Promise<Array>} Exercises
   */
  get() {
    return new Promise(resolve => {
      console.log("Getting available exercises...");
      resolve(JSON.parse(localStorage.getItem("exercises")));
    });
  },

  /**
   * Update exercises in storage
   * @returns {Promise<string>} true
   */
  update(data) {
    return new Promise(resolve => {
      console.log("@todo: Updated exercises:", data);
      resolve(true);
    });
  },

  /**
   * Delete exercises from storage
   * @returns {Promise<boolean>} true
   */
  delete() {
    return new Promise(resolve => {
      console.log("Deleting available exercises...");
      localStorage.removeItem("exercises");
      resolve(true);
    });
  }
};

export default ExerciseService;
