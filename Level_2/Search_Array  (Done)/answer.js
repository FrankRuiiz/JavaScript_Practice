var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn'];

function search_array(haystack, needle) {

    var output = [];

    for(var i=0; i<haystack.length; i++) { //goes through haystack
        for(var j=0; j<needle.length; j++) { // goes through needle
            if(needle[j] === haystack[i]) { // if the current needle equals current haystack,
                output.push(needle[j]);   // push to output array
            }
        }
    }
    return output;
}

var result = search_array(haystack, needle);
console.log(result);