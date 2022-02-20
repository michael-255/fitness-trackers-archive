class Exercise {
  constructor({
    id = null,
    name = null,
    category = null,
    notes = null,
    last_date = null,
    details = null
  } = {}) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.notes = notes;
    this.last_date = last_date;
    this.details = details;
  }
}

export default Exercise;
