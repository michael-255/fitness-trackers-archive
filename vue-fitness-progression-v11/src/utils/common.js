export const isArrayWithData = (items) => {
  return !!(Array.isArray(items) && items.length > 0)
}

export const isUndef = (value) => {
  return value === undefined || value === null
}

export const isDef = (value) => {
  return value !== undefined && value !== null
}

export const isPrimitive = (value) => {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

export const isTrue = (value) => {
  return value === true
}

export const isFalse = (value) => {
  return value === false
}

export const isObject = (obj) => {
  return obj !== null && typeof obj === 'object'
}
