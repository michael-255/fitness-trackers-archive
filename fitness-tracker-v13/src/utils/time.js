const MILLISECONDS = Object.freeze({
  perDay: 86400000,
  perHour: 3600000,
  perMinute: 60000,
  perSecond: 1000,
})

/**
 * Returns formatted duration string from milliseconds.
 */
export function getDurationFromMilliseconds(milliseconds) {
  let ms = parseInt(milliseconds)

  if (!ms || ms < 1000) {
    return '-'
  }

  let seconds = Math.floor((ms / MILLISECONDS.perSecond) % 60)
  let minutes = Math.floor((ms / MILLISECONDS.perMinute) % 60)
  let hours = Math.floor((ms / MILLISECONDS.perHour) % 24)

  hours = hours > 0 ? `${hours}h ` : ''
  minutes = minutes > 0 ? `${minutes}m ` : ''
  seconds = seconds > 0 ? `${seconds}s` : ''

  return `${hours}${minutes}${seconds}`
}

/**
 * Returns formatted number of days since a date
 */
export function getDaysSinceFromDate(date) {
  const passedDate = new Date(date)

  if (!isValidDate(passedDate)) {
    return null
  }

  const now = new Date().getTime()

  const diffInTime = now - passedDate.getTime()
  const diffInDays = diffInTime / MILLISECONDS.perDay

  if (diffInDays < 1) {
    return 'today'
  } else {
    return `${Math.floor(diffInDays)} days ago`
  }
}

function isValidDate(date) {
  return date instanceof Date && !isNaN(date)
}
