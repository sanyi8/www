/* Activity 1 - Vanilla JS Loops
Write a JavaScript program that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
Expected Output:
"0 is even"
"1 is odd"
"2 is even"
Important:
Don't forget to comment your code. */

/* // I use switch
let a = 0;
switch(a) {
    case "1":
        a = 1;
        break;
    case 1:
        a = " is odd";
        break;
    case 2:
        a = " is even";
        break;
    case 3:
        a = " is odd";
        break;
    case 4:
        a = " is even";
        break;
    case 5:
        a = " is odd";
        break;
    case 6:
        a = " is even";
        break;
    case 7:
        a = " is odd";
        break;
    case 8:
        a = " is even";
        break;
    
    default:
        a = "not found";
        break;
}
console.log(`The value is ${a}`); */

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

