import { arrayWrap } from './common.js'
import { DATA_VERSION } from '../constants/globals.js'

const LocalStorage = {
  /**
   * Initialize local storage key(s) with default value.
   */
  initByKeys(keys, initValue = []) {
    arrayWrap(keys).forEach((key) => {
      const existingData = getLocalStorage(key)

      if (!existingData) {
        setLocalStorage(key, initValue)
      }
    })
  },

  /**
   * Clear local storage key(s) with default value.
   */
  clearByKeys(keys, clearValue = []) {
    arrayWrap(keys).forEach((key) => setLocalStorage(key, clearValue))
  },

  set(key, value) {
    setLocalStorage(key, value)
  },

  get(key) {
    return getLocalStorage(key)
  },
}

function setLocalStorage(key, value) {
  const json = JSON.stringify(value)
  localStorage.setItem(transformItem(key), json)
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(transformItem(key)))
}

function transformItem(key) {
  return `${DATA_VERSION}-${key}`
}

export default LocalStorage
