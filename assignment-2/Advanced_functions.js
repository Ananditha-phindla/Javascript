function flexibleFunction(a, b, ...rest) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("rest : ", rest);
    }
    flexibleFunction(1);
    flexibleFunction(1, 2);
    flexibleFunction(1, 2, 3, 4, 5);

/*
    Task-1
        How JavaScript handles function calls with a different number of arguments than parameters:
        if there are less arguments than parameters,the missing parameters are assigned to undefined.
        if there are more arguments than parameters,and there is rest in the function declaration it accepts indefinite number of arguments as an array.
*/

/*
    Task-2:
        syntax : ...rest
        Rest Parameter: The rest parameter (...rest) allows a function to accept an
            indefinite number of arguments as an array. It must be the last parameter in
            the function definition.
*/

// Task - 3
function sumAll(...rest){
    let sum = 0;
    for(let i of rest){
        sum += i;
    }
    return sum;
}

console.log(sumAll(1,2,3,4,8));

// Task - 4
function ProcessArguments(multiply,...rest){
    return multiply(...rest);
}
function multiply(...rest){
    let mul = 1;
    for(let i of rest){
        mul *= i;
    }
    return mul;
}
console.log(ProcessArguments(multiply,2,4,6));