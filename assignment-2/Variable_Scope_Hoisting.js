console.log(mysteryVariable);
var mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
    console.log("Inside revealMystery", mysteryVariable);
    var mysteryVariable = 20;
    console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);

/*
    the output of the code is 
    undefined
    10
    undefined
    Inside revealMystery (after declaration): 20
    After revealMystery: 10
    Task-1
  Rewrite the code above using let instead of var for all declarations. Predict the
output. Run the code to verify your prediction and explain the difference in
behavior.
*/

console.log(mysteryVariable);
let mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
    console.log("Inside revealMystery", mysteryVariable);
    let mysteryVariable = 20;
    console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);

/* The output will be Cannot access 'mysteryVariable' before initialization
  when a variable is declared with let keyword,it will be in the temporal dead zone until it is intialized,and causes reference error if accessed.
*/

/* 
    task-2
    var - var variables are hoisted to the top and intialized with undefined
    let and const - when a variable is declared with let or const keywords,it will be in the temporal dead zone until it is intialized,and causes reference error if accessed.
*/