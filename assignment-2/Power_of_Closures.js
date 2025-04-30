function setupCounter(initialValue) {
    let count = initialValue;
    function increment() {
      count++;
      return count;
    }
    function decrement() {
      count--;
      return count;
    }
    return {
      increment,
      decrement
    };
}
  
    const counterOne = setupCounter(5); // count = 5
    console.log(counterOne.increment()); // 6
    console.log(counterOne.increment()); // 7
    const counterTwo = setupCounter(10); // count = 10
    console.log(counterTwo.decrement()); // 9

/* 
   Task-1:
    closures : it is a feature in javascript where an inner function has access to the outer function variables,even after the outer function has finished executing
    counterOne and counterTwo has two separate memory locations,they have the specific count variable 
 */

 // Task-2
 function createGreeting(setup) {
    const initialGreet = setup;

    function greet(name) {
        console.log(initialGreet+name);
    }

    return {greet};
}

const h1 = createGreeting("Hello, ");
h1.greet("Ananditha");

const h2 = createGreeting("Hey, ");
h2.greet("Ananditha");

// Task-3
function createSecretHolder(secretValue){
    function getSecret(){
        return secretValue;
    }
    function setSecretValue(val){
        secretValue = val;
    }
    return {
        getSecret,
        setSecretValue
    };
}
// Task - 4
createSecretValue1 = createSecretHolder(5);
console.log(createSecretValue1.getSecret());
createSecretValue1.setSecretValue(7);
console.log(createSecretValue1.getSecret());
createSecretValue2 = createSecretHolder(10);
console.log(createSecretValue2.getSecret());
createSecretValue2.setSecretValue(14);
console.log(createSecretValue2.getSecret());


