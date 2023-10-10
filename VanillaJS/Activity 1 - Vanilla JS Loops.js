/* Activity 1 - Vanilla JS Loops
Write a JavaScript program that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
Expected Output:
"0 is even"
"1 is odd"
"2 is even"
Important:
Don't forget to comment your code. */

// I am going to use while loop
//set starting i to ending n
let i = 0, n = 15;

// while i not bigger than n 15
while (i <= n) {
  if (i % 2 == 0) {     // we check number for even
    console.log(`${i} is even`);    //write the evens 
  } else {              // everything else remains odds
    console.log(`${i} is odd`);     //write the odds
  }
    i++;                // increase number with one
}