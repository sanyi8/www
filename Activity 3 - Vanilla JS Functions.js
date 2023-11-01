/* Activity 3 - Vanilla JS Functions - PRIME NUMBERS
Write a JavaScript function that takes a number as a parameter and check the number is prime or not. 

Note: 

Prime numbers are the numbers that are only divisible by themselves and 1, in other words, if we try to divide them by another number, the result is not a whole number. 

So, if we divide the number by anything other than 1 or itself, we will get a remainder that is not zero. 

Negative numbers can not be prime.

Important:
Don't forget to comment your code. */

// create a variable
let n;

function prime(n) {
    // write an if statement for check it is dividable by 1 or itself |
    if(n <= 1){      
      // n must be bigger than 1
      console.log(n + " is Not a prime number");
      // in else I check if p dividable by itself AND dividable with 1 without remaining number
    } else (n % 2 == 0 && n > 2){
      console.log(n + " is a PRIME number");
    }
};

prime(16);