/**
 *
 */
export default class Distance {
  constructor({ distance = null, unitPref = null } = {}) {
    this._km = distance
    this._mi = distance
  }
}
