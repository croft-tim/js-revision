// Helper functions go here
// Keep each function small and focused

export function isValidLog(log) {
  //if (typeof log.user === 'string') return true
  if (typeof log.user !== 'string') return false
}

export function normaliseLog(log) {
  // return a new, cleaned log object
}

export function groupByUser(logs) {
  // return an object keyed by username
}
