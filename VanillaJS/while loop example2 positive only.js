// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;
let number = parseInt(prompt("Enter a number:"));

//chek for + positive numbers so we already excluding 0 and negatives
while (number >= 0) {
  sum += number;    //increment sum with number user provided

  // in the loop get another number from user and start over with check
  number = parseInt(prompt("Enter a number"));
}

// display the sum
alert(`The sum is ${sum}.`);
