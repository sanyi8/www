/* Activity 1 - Vanilla JS Functions
    Write 2 JavaScript functions to:
    show the array content.
    find the max value in the array.
    Sample Array : [10, 2, 3, 4, 7]
    Expected Output :
    The content of the array is: [10, 2, 3, 4, 7]
    The max value in the array is: 10
    Important:
    Don't forget to comment code. */

// create array
numbers = [10, 2, 3, 4, 7];
// create function to return array with the text
funciton itemsOf(array){
    // console.log original array in the format required
    console.log("The content of the array is: [" + array + "]");

    // sort the array with below code as .sort would do only alphabetical sort so treat numbers as strings
    let sortedArray = array.sort((x, y) => x - y);

    // console.log largest (last) element
    //console.log(sortedArray[sortedArray.length-1]);
    
    // save it into largestElement
    let largestElement = sortedArray[sortedArray.length-1];

    return "The max value in the array is: " + largestElement;
    

}

console.log(itemsOf(numbers));