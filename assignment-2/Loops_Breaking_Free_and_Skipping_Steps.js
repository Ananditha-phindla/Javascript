for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    if (i === 7) {
        break;
    }
    console.log(i);
}
/* Task - 1 
    continue skips the current iteration and jumps to the next iteration of the loop
*/
/* Task - 2
    break statement terminates the entire loop
*/

// Task - 3
for(let i = 1; i <= 20; i++){
    if(i % 5 == 0)
        continue;
    if(i == 15)
        break;
    console.log(i);
}
//output : 1 2 3 4 6 7 8 9 11 12 13 14

let a = [10, 5, 8, 20, 3, 15, 25];
for(let i of a){
    if(i > 12){
        console.log("Found a larger number");
        break;
    }
    else if(i == 5){
        console.log("Skipping 5");
        continue;
    }
    else
        console.log(i);
}

/* 
   output :
    10
    Skipping 5
    8
    Found a larger number
*/