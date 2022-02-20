
import _Descriptors from './_Descriptors.js'
import { DEFAULT_CATEGORY, DEFAULT_EQUIPMENT } from '../constants/defaults.js'

/**
 * 
 */
export default class Exercise extends _Descriptors {
  constructor({
    id = null,
    name = null,
    description = null,
    previousRecord = null,
    category = DEFAULT_CATEGORY.misc,
    equipment = DEFAULT_EQUIPMENT.none,
    inputs = [],
  } = {}) {
    super({ id, name, description, previousRecord })
    this._category = category
    this._equipment = equipment
    this._inputs = inputs
  }

  get category() {
    return this._category
  }

  get equipment() {
    return this._equipment
  }

  get inputs() {
    return this._inputs
  }

  set category(category) {
    this._category = category
  }

  set equipment(equipment) {
    this._equipment = equipment
  }

  set inputs(inputs) {
    this._inputs = inputs
  }

  longName() {
    if (this._equipment && this._equipment !== DEFAULT_EQUIPMENT.none) {
      return `${this._name}, ${this._equipment}`
    }
    return this._name
  }
}
