

var myString = "Hello my name is Stu";


function pigLatinIfy(string) {
    var strArr = string.split(' '),  // creates an array out of the input string 
        pigla = 'ay',    
        output = [];  

    for( var i=0; i<strArr.length; i++ ) {  // loop through the strArr
        var word = strArr[i],
            first = word.slice(0, 1),   // returns the first letter of each word
            last = word.slice(1),       // returns the remainder of the word, not including the first
            newWord = last + first + pigla;  // concats first, last and pigla to form our new word 

            output.push(newWord);  // new words are pushed to the output array
    }

    output = output.join(' ');   // ouput array is changed back into a string using join()
    return output;  // return the new string
}

var newString = pigLatinIfy(myString);
console.log(newString);

// TODO: Add additional features for vowels and other pig latin rules