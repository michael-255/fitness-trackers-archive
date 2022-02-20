export const LocalStorage = {
  init(entity, payload) {
    const existingData = getLocalStorage(entity)
    if (existingData === null || existingData === undefined) {
      this.clear(entity, payload)
    }
  },

  overwrite(entity, payload) {
    setLocalStorage(entity, payload)
  },

  clear(entity, payload) {
    setLocalStorage(entity, payload)
  },

  get(entity) {
    return getLocalStorage(entity)
  },
}

function setLocalStorage(item, data) {
  const json = JSON.stringify(data)
  localStorage.setItem(item, json)
}

function getLocalStorage(item) {
  return JSON.parse(localStorage.getItem(item))
}
