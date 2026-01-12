/**
 * Solution to the Engineering Internship Prompt
 * 
 * Author: Aidan DuMond
 */

import data from './data.json' with { type: "json" }

// Get all the teams provided in the data
const TEAMS = Object.keys(data);

// Print table header
let header = "|  Tm |";

TEAMS.forEach(team => {
  header += ` ${team} |`
})

console.log(header)

// iterate through all the teams
for (let i = 0; i < TEAMS.length; i++) {
  const team = TEAMS[i]
  let row = `| ${team} |`

  // iterate through the possible opponents and find the # of wins if applicable
  for (let j = 0 ; j < TEAMS.length; j++) {
    const opp = TEAMS[j] 

    
    // If team == opp, then skip as they cannot play each other. This is represented as "--" in the matirx
    // Otherwise, get the number of wins that team has against opp
    team == opp ? 
      row += "  -- |" : 
      row += ` ${String(data[team][opp]["W"]).padStart(3, " ")} |`
  }

  console.log(row)
}

console.log(header)