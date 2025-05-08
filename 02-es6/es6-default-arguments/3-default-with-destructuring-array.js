// Default arguments using array destructuring

function printScores([first = 0, second = 0] = []) {
    console.log(`Scores: ${first}, ${second}`);
  }
  
  printScores([95, 89]);   // Scores: 95, 89
  printScores([70]);       // Scores: 70, 0
  printScores();           // Scores: 0, 0
    printScores([undefined, 85]); // Scores: 0, 85  