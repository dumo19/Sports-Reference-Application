# Sports Reference Internship Application
## Why do I want to intern with Sports Reference, and why should you hire me?

I want to intern with Sports Reference because it brings together two things I'm very passionate about: sports and building software. I’ve played baseball and basketball my whole life, and sports have always been a big part of my day-to-day life. I was the captain of my high school varsity baseball team, which taught me a lot about leadership, responsibility, and working toward a common goal. Outside of playing, I enjoy watching football, soccer, and hockey, and I often find myself on Sports Reference looking up stats, performances, and trends, as well as playing Immaculate Grid across different sports.

I’m a computer science student at the University of Minnesota with experience developing full stack web applications. I’m comfortable working with TypeScript, JavaScript, and SQL, and I’ve built projects using React, React Native, Node.js, and Firebase that emphasize structured data, usability, and correctness. My coursework in algorithms, data structures, and software engineering has helped me develop a strong foundation for working in existing codebases and solving problems carefully and thoroughly.

You should hire me because I’m detail-oriented, reliable, and excited to contribute to an engineering team whose work has real impact. I’m motivated to help build tools that allow users to better enjoy, understand, and share the sports they love.

## Engineering Internship Prompt

I implemented two solutions for processing and displaying the win-loss data provided. Each solution is in its own folder:

- **print-data**: A Node.js script that processes the data and prints a win-loss matrix to the terminal, matching the table format provided in the prompt.

- **html-mockup**: A simple HTML mockup that dynamically processes and displayes the same data in a grid layout. I included this version because I am interested in front-end development and UI/UX design as well.

### print-data

#### Data setup

I started by creating a JSON file containing the provided data and importing it into my JavaScript file as `data`

```js
import data from './data.json' with { type: "json" }
```

From this, I generated a list of all the teams by extracting the top-level keys of the object:

```js
const TEAMS = Object.keys(data);
```
#### Building the header

I constructed the table header by iterating through the `TEAMS` array and concatenating each team abbriviation in the order shown in the prompt.

```js
let header = "|  Tm |";

TEAMS.forEach(team => {
  header += ` ${team} |`
})

console.log(header)
```

#### Building the win-loss matrix
To generate the body of the table, I used a nested for loop:
- The outer loop represents the current team (row)
- The inner loop represents the opponent (column)

For each row, I initialized a string startng with the team abbreviation to match the provided table format.

```js
for (let i = 0; i < TEAMS.length; i++) {
  const team = TEAMS[i]
  let row = `| ${team} |`
  ...
}
```

Inside the inner loop, I used a ternary operatio to handle two cases:
- If a team is compared against itself, `--` is displayed
- Otherwise, the number of wins the team has against the opponent is pulled from the data

Because the algorithm uses a nested loop over the list of teams, it runs in `O(n²)` time, where `n` is the number of teams. This is appropriate here since the problem inherently requires comparing every team against every other team to build the full matrix.

I also padded the win values to ensure that the table is properly aligned in the terminal.

```js
for (let i = 0; i < TEAMS.length; i++) {
  const team = TEAMS[i]
  let row = `| ${team} |`

  for (let j = 0 ; j < TEAMS.length; j++) {
    const opp = TEAMS[j] 

    team == opp ? 
      row += "  -- |" : 
      row += ` ${String(data[team][opp]["W"]).padStart(3, " ")} |`
  }

  console.log(row)
}
```

Finally, I printed the header again at the bottom to match the format shown in the prompt.

```js
console.log(header)
```

### html-mockup

For the HTML solution, I created a simple mockup that dynamically builds and displays the same win-loss matrix in a grid layout when the page loads.

#### HTML structure
The `<body>` contains only two elements:
- An empty `<div>` that acts as the table container
- A `<script>` that processes the data and populates the table

```html
<body>
  <div id="table"></div>
  <script type="module">
    ...
  </script>
</body>
```

#### Script logic

Because this was a simple mockup, I hardcoded the data directly in the script rather than setting up a server.

I first stored a reference to the table container:

```js
const TABLE = document.getElementById("table")
```

I then implemented an asynchronous `loadTable()` function, which is called when the page loads and is responsible for building the table.

```js
async function loadTable() {
  ...
}
```

This function follows the same logical structure as the terminal version, but instead of building strings, it creates `<div>` elements for each cell.

Each cell is created using a helper function, `createDiv`, which takes:
- `text` - the content of the cell
- `className` - the CSS class to apply

`createDiv` creates a `<div>`, assigns the class and text content, and appends it to the table container.

When th epage finished loading, `loadTable()` is called and the full grid is rendered dynamically.





