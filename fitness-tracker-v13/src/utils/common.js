/**
 * Forces any non-array value into an array.
 */
export function arrayWrap(value) {
  if (!Array.isArray(value)) {
    value = [value]
  }
  return value
}

export function isArrayReady(value) {
  return (
    value !== null &&
    value !== undefined &&
    Array.isArray(value) &&
    value.length !== 0
  )
}

export function isObjectReady(value) {
  return (
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value !== null &&
    Object.keys(value).length !== 0
  )
}

export function createId() {
  const part1 = Math.random()
    .toString(36)
    .substring(2, 5)
  const part2 = Math.random()
    .toString(36)
    .substring(2, 5)
  const part3 = Math.random()
    .toString(36)
    .substring(2, 5)
  const id = `${part1}-${part2}-${part3}`.toUpperCase()
  return id
}

export function downloadFile(filename, textInput) {
  let tempElement = document.createElement('a')
  tempElement.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(textInput)
  )
  tempElement.setAttribute('download', filename)
  document.body.appendChild(tempElement)
  tempElement.click()
  document.body.removeChild(tempElement)
}
