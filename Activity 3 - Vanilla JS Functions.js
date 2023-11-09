/* Activity 3 - Vanilla JS Functions - PRIME NUMBERS
Write a JavaScript function that takes a number as a parameter and check the number is prime or not. 

Note: 

Prime numbers are the numbers that are only divisible by themselves and 1, in other words, if we try to divide them by another number, the result is not a whole number. 

So, if we divide the number by anything other than 1 or itself, we will get a remainder that is not zero. 

Negative numbers can not be prime.

Important:
Don't forget to comment your code. */


// function to check if n is a prime number

function prime(n) {
  // check if n is smaller than 2 as all below is not acceptable
  if (n < 2) {
    console.log(n + " is not a prime number");
    return; // Added return to exit the function if n is less than 2
  }

  // for loop starts from 2, increment is smaller than n and increment by 1 each time.
  for (let i = 2; i < n; i++) {
    // in the loop we check if n modulus equals to 0 as prime must be divisible by themselves
    if (n % i === 0) {
      console.log(n + " is not a prime number");
      return; // Added return to exit the function if n is divisible by any i
    }
  }

  console.log(n + " is a Prime number");
}

prime(6);
