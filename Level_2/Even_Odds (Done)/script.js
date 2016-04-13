/**
 * Created by FrankyR on 4/11/2016.
 */

var test_array = [2,5,1,6,8,2,20,'cat',13,3];

function even_odd(array) {
    var output = {  // will hold our filtered even and odd numbers and will be returned at the end
        odd: [],
        even: []
    };
    var i;

    for(i=0; i<array.length; i++) {
        // Check to see if the value is a number
        if(!isNaN(array[i])) {
            // if it is, and is divisible by 2 then it is even
            if(array[i] % 2 === 0) {
                output.even.push(array[i]);
            }
            else {
                output.odd.push(array[i]);
            }
        }
        else {
            // items that are not numbers will be logged out as the function encounters them
            console.log(array[i] + ' is not a number');
        }
    }
    return output;
}

result = even_odd(test_array);

console.log(result);

