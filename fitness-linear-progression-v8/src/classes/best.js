class Best {
  constructor({
    exercise_id = null,
    date = null,
    duration = null,
    distance = null,
    weight = null
  } = {}) {
    this.exercise_id = exercise_id;
    this.date = date;
    this.duration = duration;
    this.distance = distance;
    this.weight = weight;
  }
}

export default Best;
