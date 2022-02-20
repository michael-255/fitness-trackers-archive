class Exercise {
  constructor({
    id = null,
    name = null,
    category = null,
    notes = null,
    date = null,
    duration = null,
    distance = null,
    sets = []
  } = {}) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.notes = notes;
    this.date = date;
    this.duration = duration;
    this.distance = distance;
    this.sets = sets;
  }
}

export default Exercise;
