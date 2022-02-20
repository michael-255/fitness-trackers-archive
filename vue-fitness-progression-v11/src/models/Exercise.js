import _Activity from './_Activity.js'
import ExerciseInputs from './ExerciseInputs.js'
import { CATEGORY } from '../constants/globals.js'

export default class Exercise extends _Activity {
  constructor({
    id,
    name,
    description,
    previousRecord,
    category = CATEGORY.misc,
    equipment = '',
    inputs = new ExerciseInputs(),
  } = {}) {
    super({ id, name, description, previousRecord })
    this.category = category
    this.equipment = equipment
    this.inputs = inputs
  }
}
