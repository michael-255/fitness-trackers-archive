import { OPERATION_TYPE } from '../constants/globals.js'

class _Operation {
  constructor(type) {
    this.type = type
  }
}

export class InitOperation extends _Operation {
  constructor({ theseSources = null } = {}) {
    super(OPERATION_TYPE.InitOperation)
    this.theseSources = theseSources
  }
}

export class LoadOperation extends _Operation {
  constructor({ theseSources = null } = {}) {
    super(OPERATION_TYPE.LoadOperation)
    this.theseSources = theseSources
  }
}

export class CreateOperation extends _Operation {
  constructor({ onSource = null, newEntities = null } = {}) {
    super(OPERATION_TYPE.CreateOperation)
    this.onSource = onSource
    this.newEntities = newEntities
  }
}

export class UpdateOperation extends _Operation {
  constructor({ onSource = null, theseEntities = null } = {}) {
    super(OPERATION_TYPE.UpdateOperation)
    this.onSource = onSource
    this.theseEntities = theseEntities
  }
}

export class RemoveOperation extends _Operation {
  constructor({ onSource = null, theseIds = null } = {}) {
    super(OPERATION_TYPE.RemoveOperation)
    this.onSource = onSource
    this.theseIds = theseIds
  }
}

export class ClearOperation extends _Operation {
  constructor({ theseSources = null } = {}) {
    super(OPERATION_TYPE.ClearOperation)
    this.theseSources = theseSources
  }
}
