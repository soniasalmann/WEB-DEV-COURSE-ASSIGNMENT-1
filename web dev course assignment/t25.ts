// Passing version
let alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Player just earned 5 points!");
}

// Failing version (no output)
alien_color = 'red';
if (alien_color === 'green') {
  console.log("Player just earned 5 points!");
}
