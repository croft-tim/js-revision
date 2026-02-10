// Helper functions go here
// Keep each function small and focused

import { use } from 'react'

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
  // here we want to return all the true ones as these have passed through
  return true
}

export function normaliseLog(log) {
  // return a new, cleaned log object (i.e. make everything lowerCase)
  return {
    user: log.user.toLowerCase(),
    action: log.action,
    time: log.time,
  }
}

export function groupByUser(logs) {
  // return an object keyed by username
  const groups = {}
  for (i = 0; i < logs.length; i++) {
    const log = logs[i]
    const user = log.user

    if (!groups[user]) {
      groups[user] = []
    }

    groups[user].push(log)
  }
  return groups
}
