import _Record from './_Record.js'

/**
 *
 */
export default class MeasurementRecord extends _Record {
  constructor({
    id = null,
    createdAt = null,
    note = null,
    bodyWeight = null,
    bodyFat = null,
    neck = null,
    shoulders = null,
    chest = null,
    biceps = null,
    forearms = null,
    waist = null,
    thighs = null,
    calves = null,
  } = {}) {
    super({ id, createdAt, note })
    this._bodyWeight = bodyWeight
    this._bodyFat = bodyFat
    this._neck = neck
    this._shoulders = shoulders
    this._chest = chest
    this._biceps = biceps
    this._forearms = forearms
    this._waist = waist
    this._thighs = thighs
    this._calves = calves
  }

  get bodyWeight() {
    return this._bodyWeight
  }

  get bodyFat() {
    return this._bodyWeight
  }

  get neck() {
    return this._neck
  }

  get shoulders() {
    return this._shoulders
  }

  get chest() {
    return this._chest
  }

  get biceps() {
    return this._biceps
  }

  get forearms() {
    return this._forearms
  }

  get waist() {
    return this._waist
  }

  get thighs() {
    return this._thighs
  }

  get calves() {
    return this._calves
  }

  set bodyWeight(bodyWeight) {
    this._bodyWeight = bodyWeight
  }

  set bodyFat(bodyFat) {
    this._bodyWeight = bodyFat
  }

  set neck(neck) {
    this._neck = neck
  }

  set shoulders(shoulders) {
    this._shoulders = shoulders
  }

  set chest(chest) {
    this._chest = chest
  }

  set biceps(biceps) {
    this._biceps = biceps
  }

  set forearms(forearms) {
    this._forearms = forearms
  }

  set waist(waist) {
    this._waist = waist
  }

  set thighs(thighs) {
    this._thighs = thighs
  }

  set calves(calves) {
    this._calves = calves
  }
}
