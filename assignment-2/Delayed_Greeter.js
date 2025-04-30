// Snippet 1
function delayedGreeter(names) {
    for (var i = 0; i < names.length; i++) {
    setTimeout(function() {
        console.log(`Hello, ${names[i]}!`);
        }, i * 1000);
    }
}
delayedGreeter(['Alice', 'Bob', 'Charlie']);


/*
snippet-1 
output:
 Hello undefined!
 Hello undefined!
 Hello undefined!
 reason : var is function-scoped,not block-scoped
  inside the for loop,there is only one i for all iterations
  By the time setTimeOut() runs,i becomes 3 and names[3] = undefined
  
*/

//snippet 2
function delayedGreeterCorrected(names) {
    for (var i = 0; i < names.length; i++) {
    (function(index) { // IIFE creates a new scope for each iteration
        setTimeout(function() {
            console.log(`Hello, ${names[index]}!`);
            }, index * 1000);
        })(i); // Pass the current value of 'i' into the IIFE
    }
}

/*
snippet-2
output:
 Hello Alice!
 Hello Bob!
 Hello Charlie!
 reason : The IIFE(Immediately invoked Function Expression) creates a new function for every iteration and captures the value of i in index
 so each setTimeout() will have the correct value of i as the index
  
*/
delayedGreeterCorrected(['Alice', 'Bob', 'Charlie']);

// Snippet 3
function delayedGreeterLet(names) {
    for (let i = 0; i < names.length; i++) { // Using 'let' 
        setTimeout(function() {
            console.log(`Hello, ${names[i]}!`);
        }, i * 1000);
    }
}
delayedGreeterLet(['Alice', 'Bob','Charlie']);


/*
snippet-3
output:
 Hello Alice!
 Hello Bob!
 Hello Charlie!
 reason : let is block-scoped,
  for each iteraction,a new copy of i is created and setTimeout() captures the value of i at the specific moment
*/