/* Activity 1 - Vanilla JS Arrays
Write a JavaScript program to sum values of an array.
Test Data:
Sample Array:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Expected Output:
The sum is 55.
Important:
Don't forget to comment your code. */


// i create values array
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

/* to sum its value I use a for loop which counts from 1st position in array to the .length end and than for loop
terminates and gives the sum of the indexed values */

/* for (let values[i] = 0; i < values.length; i++){
    console.log(i)
}
 */
// It did not work as it gave me the elements numbers not their values
// I need somewhere to store value lets call it sum


//I use the index values until the end and increase the index to get the new value
/* for (let i = 0; i < values.length; i++){
    // I use sum variable to increase the value of it by the next index's value
    sum = sum + values[i]
} */
// I had to use index i as it is and reach the maximum index of the values array, than increase the value of the i by 1
for (let i = 0; i < values.length; i++) {
  //add the index value to the sum variable.
    sum = sum + values[i];
}

// console log
console.log("Average value of the array elements is: "+ sum);