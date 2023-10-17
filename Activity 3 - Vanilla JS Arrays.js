/* Write a JavaScript program to find the maximum and minimum value of an array.
Test Data:

Sample Array:

[25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Expected Output:

Original Array: [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Maximum value for the above array = 77

Minimum value for the above array = 14

Important:
Don't forget to comment your code. */
// I create the minmax array
const minmax = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];
// I loop thro the array, for - I do not need for loop
// for (let i = 0; i <= minmax.length; i++){
// I write the original array here
    console.log("Original array " + minmax);
// I sort into ascending order the minmax elements
    minmax.sort();
// crete and store into "min"  the minmax array first element
    let min = minmax[0];
// create and store into "max" the minmax array last element
    let max = minmax[minmax.length - 1];
// }
// I console.log all the required last and first elements with user friendly text.
console.log("Maximum value for the above array = " + minmax[minmax.length - 1]);
console.log("Minimum value for the above array = "+ minmax[0])
