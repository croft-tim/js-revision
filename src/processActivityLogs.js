import { isValidLog, normaliseLog, groupByUser } from './helpers.js'

export function processActivityLogs(logs) {
  // logs === logs array - expects a singular
  // Step 1: validate logs

  const validLogs = []
  const inValidLogs = []

  // loop

  for (let i = 0; i < logs.length; i++)
    if (isValidLog(logs[i])) {
      // if true do this

      validlogs.push(logs[i]) // add to the end of the array
    } else {
      inValidLogs.push(logs[i]) // we have run a valid logs so since we have this information, use DRY and export invalid too (we may want this at some point)
    }
}

// Step 2: normalise data
// Step 3: group by user
// Step 4: calculate per-user stats
// Step 5: calculate global stats
// Step 6: generate insights
// Step 7: return final result object
