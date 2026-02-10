# Big JavaScript Kata: Teacher Solution Instructions

This document provides step-by-step instructions for the solution of the Big JavaScript Kata.  
It guides you through processing user activity logs using **ES modules**, helper functions, and a modular approach.

---

## Goal
Process messy user activity logs and produce a **structured summary**.  

Focus on:  
- Loops  
- Conditionals  
- Array methods  
- Functions & helpers  
- Problem decomposition  

---

## Step 0: Understand the project structure
**Files**:
- `index.html` → Loads `main.js` as a module  
- `styles.css` → Optional styling  
- `src/data.js` → Raw activity logs (do NOT modify)  
- `src/helpers.js` → Small helper functions  
- `src/processActivityLogs.js` → Main function coordinating helpers  
- `src/main.js` → Entry point to run the exercise  

**Explanation:** Everything is modular, so `main.js` is the entry point, and all logic should use imports/exports.

---

## Step 1: Explore the data
- Open `src/data.js`  
- Look at `activityLogs` array  
- Identify valid/invalid entries and unexpected values  
- Sketch the expected final output shape  

**Explanation:** Understanding the data helps prevent mistakes later.

---

## Step 2: Filter valid logs
- Implement `isValidLog` in `helpers.js`  
- Ensure `user` is a non-empty string  
- Ensure `time` is a number >= 0  
- Ensure `action` is valid (`login`, `click`, `logout`)  

**Explanation:** Cleaning data first prevents downstream errors.

---

## Step 3: Normalize logs
- Implement `normaliseLog` in `helpers.js`  
- Convert usernames to lowercase  
- Return **new objects**, don’t mutate originals  

**Explanation:** Consistency simplifies grouping and counting later.

---

## Step 4: Group logs by user
- Implement `groupByUser` in `helpers.js`  
- Return an object with keys = usernames, values = arrays of logs  

**Explanation:** Allows easy per-user statistics without repeatedly filtering the main array.

---

## Step 5: Calculate per-user statistics
- For each user:
  - Count total actions  
  - Count clicks  
  - Calculate first and last time  
  - Compute session duration (`lastTime - firstTime`)  
- Use helper functions like `countAction` or `getTimeRange`  

**Explanation:** Breaking down into small calculations keeps code clean and reusable.

---

## Step 6: Calculate global statistics
- Determine:
  - Total users  
  - Total actions  
  - Most active user  
  - Average session duration  
  - Users who never clicked  
- Use `Object.keys()`, `Object.values()`, `reduce()`, and `sort()`  

**Explanation:** Provides a global view and insights from the dataset.

---

## Step 7: Generate derived insights
- Sort users by activity  
- Identify users with multiple logins  
- Calculate total time range across all logs  
- Count occurrences of each action  

**Explanation:** Practice metrics and aggregations.

---

## Step 8: Assemble the final result
- Return an object with sections:
```js
{
  "users": { ...per-user stats... },
  "global": { ...global stats... },
  "insights": { ...derived insights... }
}
