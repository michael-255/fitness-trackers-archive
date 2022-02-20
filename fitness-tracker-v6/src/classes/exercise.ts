import { CategoryType, ExerciseType } from "../enums/enums";
import { Inputs } from "./support-classes/inputs";
import { Objective } from "./support-classes/objective";
import { ExerciseRecord } from "./support-classes/exerciseRecord";
import uuid from "uuid";

/**
 * @todo
 */
export class Exercise {
  readonly id: string;
  name: ExerciseType;
  category: CategoryType;
  inputs: Inputs;
  objectives: Objective[];
  exerciseRecords: ExerciseRecord[];

  constructor({
    name = null,
    category = null,
    inputs = null,
    objectives = [],
    exerciseRecords = []
  } = {}) {
    this.id = uuid.v4();
    this.name = name;
    this.category = category;
    this.inputs = inputs;
    this.objectives = objectives;
    this.exerciseRecords = exerciseRecords;
  }
}
