class Routine {
  constructor({
    id = null,
    name = null,
    routine_date = null,
    routine_time = null,
    exercise_ids = []
  } = {}) {
    this.id = id;
    this.name = name;
    this.routine_date = routine_date;
    this.routine_time = routine_time;
    this.exercise_ids = exercise_ids;
  }
}

export default Routine;
