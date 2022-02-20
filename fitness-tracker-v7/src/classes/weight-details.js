class WeightDetails {
  constructor({
    highest_weight = null,
    highest_weight_date = null,
    record_sets = []
  } = {}) {
    this.highest_weight = highest_weight;
    this.highest_weight_date = highest_weight_date;
    this.record_sets = record_sets;
  }
}

export default WeightDetails;
