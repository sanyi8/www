/* Activity 1 - Control Statements
Write a JavaScript program that accepts three numbers and prints "All numbers are equal" if all three numbers are equal, "All numbers are different" if all three numbers are different and "Neither all are equal or different" otherwise.

Test Data:

Input first number: 2
Input second number: 3
Input third number: 4

Expected Output :

All numbers are different.

Important:
Don't forget to comment your code. */

// store 3 numbers
const number1 = prompt("Input First number:");
const number2 = prompt("Input Second number:");
const number3 = prompt("Input Third number:");

// now I can evaluate if they are equal or not or different
// I use if else if statement
// Check if number 1 = number2 = number3
if (number1 == number2 && number2 == number3){
    console.log("All numbers are equal");
    // check if all numbers are NOT equal to each other
} else if (number1 != number2 && number2 != number3 && number3 != number1){
    console.log("All numbers are different");
    // in else I wanted to make the third condition and spent some hard time on, but then I recognised "Neither" condition will happen in all the "else" situations. I think it was tricky rather than difficult :)
} else {
    console.log("Neither all are equal or different")
}