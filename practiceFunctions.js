/* //Sum two numbers
// The function is declared with two parameters a and b.
function add(a, b) {
console.log(a + b);
}
// calling function with two arguments
add(2,5);
// calling "add" function multiple times with different arguments
add(3,9);
 */

/* //Sum of Two Numbers
// declare function with 2 variables
function add(a, b) {
  return a + b;
}
// get 2 numbers from user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

//to get "result"s value we calling function and using given parameters: number1 and ...2
let result = add(number1, number2);

// we write out (alert) the "result" which calling the "add" function passing the arguments as a and b
alert("The sum is: " + result); */

// Functions defined as Expressions

// x is a variable which includes a anonymous function which has a parameter
let x = function (num) {
  // we multiply the parameter in here with itself
  return num * num;
};

//console.log x variable (expression) with argument 4
console.log(x(4));

//we use x variable in another variable to do the same job with different argument 3
let y = x(3);
console.log(y);
