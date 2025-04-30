// Snippet 1
const user = {
    name: "Alice",
    greetDelayed: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};
user.greetDelayed(); // Expected: Hello, Alice! (after 1 second), Actual: ?

// Snippet 2
const userCorrectedTraditional = {
    name: "Alice",
    greetDelayed: function() {
        const self = this; // Store a reference to 'this' 
        setTimeout(function() {
            console.log(`Hello, ${self.name}!`);
        }, 1000);
    }
};
userCorrectedTraditional.greetDelayed(); // Now works as expected

// Snippet 3
const userCorrectedArrow = {
    name: "Bob",
    greetDelayed: function() {
        setTimeout(() => { // Arrow function here
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};
userCorrectedArrow.greetDelayed(); // Works perfectly!

/*
    snippet-1
        In the setTimeOut() callback the value of this is pointed to global object or undefined
    snippet-2
        here we are storing the reference of the object in self,if we access self.name it access the name in the object
    snippet-3
        Arrow function follows Lexical bind(does not have there own this,they take the value from the surrounding)
*/

/* task-4 */
const Ananditha = {
    name : "Ananditha",
    showname : () =>{
        console.log("the name of the bus is",this.name);
    }
};
Ananditha.showname();
