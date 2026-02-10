import { activityLogs } from './data.js'
import { processActivityLogs } from './processActivityLogs.js'

console.clear()
console.log('Running Big JavaScript Kata Exercise...')

const result = processActivityLogs(activityLogs)

console.log('Final Result:')
console.log(result)
