

var input_array =
    [
        {name: 'John', age:42, gender:'M'},
        {name: 'Jack', age:34, gender:'M'},
        {name: 'Michael',age:40, gender: 'M'},
        {name: 'Kendra',age:48, gender:'F'}
    ];


function sort_object_list_by_name(array) {

    array.sort(function(a, b) { // compare function 
        if ( a.name > b.name) {
            return 1;
        }
        if ( a.name < b.name ) {
            return -1;
        }
        return 0; // a must be equal to b
    });

    return array;
}

var result = sort_object_list_by_name(input_array);
console.log(result);