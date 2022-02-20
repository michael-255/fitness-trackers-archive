import { isArrayWithData, MeasurementRecord } from "../helpers";

const MeasurementRecordService = {
  /**
   * Get measurement records from storage
   * @returns {Promise<Array>} Measurement records
   */
  get() {
    return new Promise(resolve => {
      console.log("Getting measurement records...");
      resolve(JSON.parse(localStorage.getItem("measurementRecords")));
    });
  },

  /**
   * Create measurement record in storage
   * @returns {Promise<string>} true
   */
  create(data) {
    return new Promise(resolve => {
      /**
       * @todo need proper record data setup and function params...
       *
       * bodyWeight = null,
       * bodyFat = null
       */
      const newMeasurementRecord = new MeasurementRecord(data);
      let measurementRecords = JSON.parse(
        localStorage.getItem("measurementRecords")
      );

      if (isArrayWithData(measurementRecords)) {
        // Storage already has data
        measurementRecords.push(newMeasurementRecord);
        localStorage.setItem(
          "measurementRecords",
          JSON.stringify(measurementRecords)
        );
      } else {
        // Empty or no valid data
        measurementRecords = [];
        measurementRecords.push(newMeasurementRecord);
        localStorage.setItem(
          "measurementRecords",
          JSON.stringify(measurementRecords)
        );
      }

      resolve(true);
    });
  },

  /**
   * Delete measurement records from storage
   * @returns {Promise<string>} true
   */
  delete() {
    return new Promise(resolve => {
      console.log("Deleting measurement records...");
      localStorage.removeItem("measurementRecords");
      resolve(true);
    });
  }
};

export default MeasurementRecordService;
