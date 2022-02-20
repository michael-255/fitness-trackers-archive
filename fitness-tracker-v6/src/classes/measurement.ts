/**
 * @todo
 */
export class Measurement {
  readonly createdAt: Date;
  bodyWeight: number;
  bodyFat: number;

  constructor({ bodyWeight = null, bodyFat = null } = {}) {
    this.createdAt = new Date();
    this.bodyWeight = bodyWeight;
    this.bodyFat = bodyFat;
  }
}
