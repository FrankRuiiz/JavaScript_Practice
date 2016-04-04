answer.js


// This solution is also known as the Fisher Yates shuffle

var input_array = [5, 3, 2, 5, 1];


// write a function randomize_array that takes an input array parameter
function randomize_array(array) {

    //set a variable named counter to the length of the input array
    var counter = array.length;

    // while there are elements in the array, run the following code
    while(counter > 0) {

        // Declare a var index and set it to a random value that is within the length of the array
        var index = Math.floor(Math.random() * counter);

        // Decrease the counter, this will put us a the last element in the array when we swap below
        counter--;

        /* swap the last element (counter) with the randomized array[index] value */

        // will temporarily hold the array[counter] value for the swap
        var temp = array[counter];
        // sets array[counter] value to the current value of array[index] (random)
        array[counter] = array[index];
        // sets the value of array[index] to the initial value of array[counter], which was stored in the variable temp
        array[index] = temp;
    }

    return array;
}

console.log(randomize_array(input_array));