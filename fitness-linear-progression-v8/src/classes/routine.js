class Routine {
  constructor({
    id = null,
    name = null,
    date = null,
    duration = null,
    exercise_ids = []
  } = {}) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.duration = duration;
    this.exercise_ids = exercise_ids;
  }
}

export default Routine;
