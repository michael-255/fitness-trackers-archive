/**
 * @todo
 */
export class OneSet {
  weight: number;
  reps: number;

  constructor({ weight = null, reps = null } = {}) {
    this.weight = weight;
    this.reps = reps;
  }
}
