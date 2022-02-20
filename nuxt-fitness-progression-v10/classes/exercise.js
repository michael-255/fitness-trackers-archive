import { v4 as uuidv4 } from 'uuid'

export default class Exercise {
  constructor({
    name = null,
    category = null,
    description = null,
    showDesc = true,
    hasConfirmation = true,
    hasSets = true,
    hasDuration = true,
    hasDistance = true,
    hasWeight = true,
    hasReps = true,
    hasNotes = true,
  } = {}) {
    this.id = uuidv4()
    this.name = name
    this.category = category
    this.description = description
    this.showDesc = showDesc
    this.hasConfirmation = hasConfirmation
    this.hasSets = hasSets
    this.hasDuration = hasDuration
    this.hasDistance = hasDistance
    this.hasWeight = hasWeight
    this.hasReps = hasReps
    this.hasNotes = hasNotes
  }
}
