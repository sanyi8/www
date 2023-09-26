/* Activity 1 - Vanilla JS Basics 
Write a JavaScript program to print the result of the following operations.
Test Data:
a. -5 + 8 * 6 
b. (55+9) % 9 
c. 20 + -3*5 / 8 
d. 5 + 15 / 3 * 2 - 8 % 3

Expected Output:
43 
1 
18.125 
13.0

Important:
Don't forget to comment your code. */

// Ask User for Input and store data in userInput

const userInput = prompt("Enter a mathematical expression");

// Try-Catch Block for Error Handling
try {
  // Code try part to calculate the result
  const result = eval(userInput);

  if (isNaN(result)) {
    console.log("Invalid expression");
  } else {
    console.log("Result:", result);
  }
} catch (error) {
  // Code to handle errors
  console.log("An error occurred:", error);
}


// https://codepen.io/kod3ks/pen/poqLXYy