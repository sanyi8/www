/* Activity 2 - Vanilla JS Functions
Write a JavaScript function to calculate the factorial of a number (a non-negative integer n ). The function accepts the number as an argument.

Note:
The factorial of a number is the product of all the integers from 1 to that number and it is represented by n!

For example, the factorial of 6! is 1*2*3*4*5*6 = 720. 

The factorial is not defined for negative numbers, and the factorial of zero is one, 0! = 1.

Important:
Don't forget to comment your code.
 */


// create a variable for number
let n;
// create a function for factorial
function factorial(n) {
  // create if statement to check the right number to work with
    if(n == 0){
        console.log("Factorial on zero is one 0! = 1")
      // do this if n is bigger than 0
    } else if (n > 0){

        // set finalNumber = 1
        finalNumber = 1;
        // use for loop until we reach the number n
        for (let i = 1; i <= n; i++) {
          
          // multiply finalNumber by i
          finalNumber *= i;      
      
      };
      console.log("Factorial is the number: " + finalNumber)
    }
  // do this if n non of the aboves
  else {
        console.log("Use positive number only!");
    };
};


factorial(-1);