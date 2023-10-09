/* Activity 2 - Control Statements
Write a JavaScript program that accepts three numbers from the user and prints "Increasing order" if the numbers are in the increasing order, "Decreasing order" if the numbers are in the decreasing order, and "c" otherwise.

Test Data:

Input first number: 1524
Input second number: 2345
Input third number: 3321

Expected Output :

Increasing order.

Important:
Don't forget to comment your code. */

//take the 3 numbers from user with a prompt
const num1 = prompt("Input first number:");
const num2 = prompt("Input second number:");
const num3 = prompt("Input third number:");

// here we check if the numbers are increasing decreasing or neither (else)
if (num1 < num2 && number2 < num3){ //I tried to chain condition but did not work.I must use &&
    alert("Increasing order")
} else if (num1 > num2 && number2 > num3){ 
    alert("Decreasing order")
} else {
    alert("Neither increasing or decreasing order")
}