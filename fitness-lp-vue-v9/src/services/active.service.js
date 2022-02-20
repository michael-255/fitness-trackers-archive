const ActiveService = {
  /**
   * Get active workout from storage
   * @returns {Promise<Array>} Active workout
   */
  get() {
    return new Promise(resolve => {
      console.log("Getting active workout...");
      resolve(JSON.parse(localStorage.getItem("active")));
    });
  },

  /**
   * Update active workout in storage
   * @returns {Promise<string>} true
   */
  update(data) {
    return new Promise(resolve => {
      localStorage.setItem("active", JSON.stringify(data));
      console.log("Updated active:", data);
      resolve(true);
    });
  },

  /**
   * Delete active workout from storage
   * @returns {Promise<string>} true
   */
  delete() {
    return new Promise(resolve => {
      console.log("Deleting active workout...");
      localStorage.removeItem("active");
      resolve(true);
    });
  }
};

export default ActiveService;
