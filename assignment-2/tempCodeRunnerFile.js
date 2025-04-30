function setupCounter(initialValue) {
//     let count = initialValue;
//     function increment() {
//       count++;
//       return count;
//     }
//     function decrement() {
//       count--;
//       return count;
//     }
//     return {
//       increment,
//       decrement
//     };
// }
  
//     const counterOne = setupCounter(5); // count = 5
//     console.log(counterOne.increment()); // 6
//     console.log(counterOne.increment()); // 7
//     const counterTwo = setupCounter(10); // count = 10
//     console.log(counterTwo.decrement()); // 9

// /* 
//    Task-1:
//     closures : it is a feature in javascript where an inner function has access to the output function variables,even after the outer function has finished executing
//     counterOne and counterTwo has two separate memory locations,they have the specific count variable 
//  */

//  // Task-2
// function createGreeting(greeting){
//     return function(n){
//         console.log(`${greeting} ${n}`)
//     }
// }
// Hello = createGreeting("Hello");
// Hello("world!");

// // Task-3
// function createSecretHolder(secretValue){
//     function getSecret(){
//         return secretValue;
//     }
//     function setSecretValue(val){
//         secretValue = val;
//     }
//     return {
//         getSecret,
//         setSecretValue
//     };
// }
// createSecretValue = createSecretHolder(5);
// console.log(createSecretValue.getSecret());
// createSecretValue.setSecretValue(7);
// console.log(createSecretValue.getSecret());
