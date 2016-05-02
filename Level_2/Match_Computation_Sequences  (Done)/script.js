

function math_comp_sequence(num1, num2) {
    var output = [],
        ops = ['+', '-', '*', '/'],
        compute = null,
        i = 0;

    for(i; i < ops.length; i += 1) {
        var current_op = ops[i]

        switch (current_op) {
            case '+':
                compute = num1 + num2;
                break;
            case '-':
                compute = num1 - num2;
                break;
            case '*':
                compute = num1 * num2;
                break;
            case '/':
                compute = num1 / num2;
        }
        output.push('' + num1 + current_op + num2 + '=' + compute);
    }
    return output;
}

var result = math_comp_sequence(2, 5);
console.log(result);
