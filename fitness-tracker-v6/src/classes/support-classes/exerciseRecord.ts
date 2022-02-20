import { OneSet } from "./oneSet";

/**
 * @todo
 */
export class ExerciseRecord {
  readonly createdAt: string;
  duration: number;
  distance: number;
  sets: OneSet[];

  constructor({ duration = null, distance = null, sets = [] } = {}) {
    this.createdAt = new Date().toISOString();
    this.duration = duration;
    this.distance = distance;
    this.sets = sets;
  }
}
