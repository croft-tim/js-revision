// Helper functions go here
// Keep each function small and focused

export function isValidLog(log) {
  //if (typeof log.user === 'string') return true
  //we really only want the false statement because all the others are true
  if (typeof log.user !== 'string') return false
  //here we want to check that the string is greater than 0
  if (log.user.trim() === 0) return false
  // here we want to see if time isn't a number return false
  if (typeof log.time !== 'number') return false
  // here we want to see if time is less than 0 then return false
  if (log.time < 0) return false
  // here we want to see if the log action does not equal these things then it is false
  if (
    log.action !== 'login' &&
    log.action !== 'click' &&
    log.action !== 'logout'
  )
    return false
  return true
}

export function normaliseLog(log) {
  // return a new, cleaned log object
}

export function groupByUser(logs) {
  // return an object keyed by username
}
