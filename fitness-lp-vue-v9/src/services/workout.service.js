import { DefaultWorkouts } from "../constants";

const WorkoutService = {
  /**
   * Initializes default workouts - overwrites existing data!
   * @returns {Promise<Array>} Default workouts
   */
  initDefaults() {
    return new Promise(resolve => {
      console.log("Getting default workouts...");
      localStorage.setItem(
        "workouts",
        JSON.stringify(DefaultWorkouts.workouts)
      );
      resolve(DefaultWorkouts.workouts); // Don't need to JSON parse this
    });
  },

  /**
   * Get workouts from storage
   * @returns {Promise<Array>} Workouts
   */
  get() {
    return new Promise(resolve => {
      console.log("Getting available workouts...");
      resolve(JSON.parse(localStorage.getItem("workouts")));
    });
  },

  /**
   * Update workouts in storage
   * @returns {Promise<string>} true
   */
  update(data) {
    return new Promise(resolve => {
      console.error("@todo: Updated workouts:", data);
      resolve(true);
    });
  },

  /**
   * Delete workouts from storage
   * @returns {Promise<string>} true
   */
  delete() {
    return new Promise(resolve => {
      console.log("Deleting available workouts...");
      localStorage.removeItem("workouts");
      resolve(true);
    });
  }
};

export default WorkoutService;
