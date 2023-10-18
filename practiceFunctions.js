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

//Sum of Two Numbers
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
alert("The sum is: " + result);
