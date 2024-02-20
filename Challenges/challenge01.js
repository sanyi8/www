// Task 1
// Write a function expression called reverseString(). It should accept a single argument representing a person's name. It should return a reverse string as shown below:

let reverseString = name => name.split('').reverse().join('');

console.log(reverseString("John"));
console.log(reverseString("Kardos Sandor"));