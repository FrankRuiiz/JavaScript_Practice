

// Declare input array variables
var first_array = [3,-5,15,4];
var second_array = [3,18,-5,-4];


function add_arrays(arr1, arr2) {
    // Check to see if the two input arrays are the same length
    if(arr1.length === arr2.length) {
        var output = [];
        for(var i=0; i < arr1.length; i++) {
            // Add the current value at [i]
            var sum = arr1[i] + arr2[i];
            output.push(sum);
        }
        return output;
    }
    // Display an error message if the arrays are not the same length
    else {
        console.error("Input arrays are not the same length");
    }
}

var result = add_arrays(first_array,  second_array);
console.log(result);



