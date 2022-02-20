import _IdContainer from './_IdContainer.js'

/**
 * 
 */
export default class _RecordContainer extends _IdContainer {
  constructor({ items = [] } = {}) {
    super({ items })
  }

  findByDate(date) {
    return null
  }

  findNewest() {
    return null
  }

  findOldest() {
    return null
  }

  findBetweenDates(date1, date2) {
    return null
  }
}
