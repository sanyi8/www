/* Activity 2 - Vanilla JS Basics
Write a JavaScript program to divide two numbers, using the input from the user, and print the result on the screen.

Expected Output :

Input the first number: 6
Input the second number: 2
The division of the first number and the second number is: 3

Important:
Don't forget to comment your code. */

// create two variable

const number1 = parseFloat(prompt("Enter your first number: "));
const number2 = parseFloat(prompt("Enter your second number: "));

if (number2 !== 0) {
  // Perform division
  const result = number1 / number2;

  // Display the result as an alert message
  alert(`The result of ${number1} divided by ${number2} is: ${result}`);
} else {
  // Display an error message if division by zero is attempted
  alert('Error: Division by zero');
}
