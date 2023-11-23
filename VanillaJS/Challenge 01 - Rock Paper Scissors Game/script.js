// labeling all buttons
const userButtons = document.getElementsByClassName("btn");

// Function to generate computer's choice
function computerTurn() {
  // use random generator 1-3 which are connected with the choices
  const randNum = Math.floor(Math.random() * 3) + 1;
  let computer;

  switch (randNum) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }

  return computer;
}

// Add event listener to each button when clicked
for (let i = 0; i < userButtons.length; i++) {
  userButtons[i].addEventListener("click", function () {
    // Get user's choice
    const userValue = this.id;

    // Generate computer's choice
    const computerValue = computerTurn();

    // Check the winner
    let winner;
    if (userValue === computerValue) {
      winner = "It's a tie!";
    } else if (
      (userValue === "rock" && computerValue === "scissors") ||
      (userValue === "paper" && computerValue === "rock") ||
      (userValue === "scissors" && computerValue === "paper")
    ) {
      winner = "User wins";
    } else {
      winner = "Computer wins";
    }

    // Display the result
    const result = document.getElementById("result");
    result.innerHTML = `User: ${userValue} <br> Computer: ${computerValue} <br> Winner: ${winner}`;
  });
}
