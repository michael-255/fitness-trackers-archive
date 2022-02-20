import { ACTION_TYPE, RECORD_TYPE } from '../constants/globals.js'
import { createId } from '../utils/common.js'

class _Entity {
  constructor({ id = createId(), type = null } = {}) {
    this.id = id
    this.type = type
  }
}

class _Action extends _Entity {
  constructor({ id, type, name = null } = {}) {
    super({ id, type })
    this.name = name
  }
}

export class Measurement extends _Action {
  constructor({ id, name = 'My Measurement' } = {}) {
    super({ id, type: ACTION_TYPE.Measurement, name })
  }
}

export class Exercise extends _Action {
  constructor({ id, name = 'My Exercise', inputs = {} } = {}) {
    super({ id, type: ACTION_TYPE.Exercise, name })
    this.inputs = inputs
  }
}

export class Workout extends _Action {
  constructor({ id, name = 'My Workout', exerciseIds = [] } = {}) {
    super({ id, type: ACTION_TYPE.Workout, name })
    this.exerciseIds = exerciseIds
  }
}

class _Record extends _Entity {
  constructor({
    id,
    type,
    createdAt = new Date().getTime(),
    date = new Date().toDateString(),
    actionId = null,
    actionName = null,
  } = {}) {
    super({ id, type })
    this.createdAt = createdAt
    this.date = date
    this.actionId = actionId
    this.actionName = actionName
  }
}

export class MeasurementRecord extends _Record {
  constructor({
    id,
    createdAt,
    date,
    actionId,
    actionName,
    value = null,
  } = {}) {
    super({
      id,
      type: RECORD_TYPE.MeasurementRecord,
      createdAt,
      date,
      actionId,
      actionName,
    })
    this.value = value
  }
}

export class ExerciseRecord extends _Record {
  constructor({ id, createdAt, date, actionId, actionName, data = {} } = {}) {
    super({
      id,
      type: RECORD_TYPE.ExerciseRecord,
      createdAt,
      date,
      actionId,
      actionName,
    })
    this.data = data
  }
}

export class WorkoutRecord extends _Record {
  constructor({
    id,
    createdAt,
    date,
    actionId,
    actionName,
    endedAt = null,
    duration = null,
  } = {}) {
    super({
      id,
      type: RECORD_TYPE.WorkoutRecord,
      createdAt,
      date,
      actionId,
      actionName,
    })
    this.endedAt = endedAt
    this.duration = duration
  }
}
