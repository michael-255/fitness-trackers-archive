import { RoutineRecord } from "./support-classes/routineRecord";
import uuid from "uuid";

/**
 * @todo
 */
export class Routine {
  readonly id: string;
  name: string;
  exerciseIds: string[];
  routineRecords: RoutineRecord[];

  constructor({ name = null, exerciseIds = [], routineRecords = [] } = {}) {
    this.id = uuid.v4();
    this.name = name;
    this.exerciseIds = exerciseIds;
    this.routineRecords = routineRecords;
  }
}
