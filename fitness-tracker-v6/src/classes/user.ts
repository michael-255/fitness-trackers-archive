import { UnitPrefType } from "../enums/enums";
import { Exercise } from "../classes/exercise";
import { Routine } from "../classes/routine";
import { Measurement } from "../classes/measurement";

/**
 * @todo
 */
export class User {
  units: UnitPrefType;
  exercises: Exercise[];
  routines: Routine[];
  measurements: Measurement[];
  results: string[];

  constructor({
    units = UnitPrefType.IMPERIAL,
    exercises = [],
    routines = [],
    measurements = [],
    results = []
  } = {}) {
    this.units = units;
    this.exercises = exercises;
    this.routines = routines;
    this.measurements = measurements;
    this.results = results;
  }
}
