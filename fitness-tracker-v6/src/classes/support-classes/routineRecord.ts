/**
 * @todo
 */
export class RoutineRecord {
  readonly createdAt: Date;
  startTime: number;
  endTime: number;

  constructor({ startTime = null, endTime = null } = {}) {
    this.createdAt = new Date();
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
