// 30-october-2025

// let score = 20;
// const newScore = 4;
// var oldScore = 76;

// console.log(score);
// console.log(newScore);
// console.log(oldScore);

// everything output is giving same than why we are using all 3 different terms?
//

// because of scope {} , it comes with function


// take the above case senerio inside a function

var oldScore = 400;

if(true){
    let score = 20;
    const newScore = 4;
    var oldScore = 76; // or oldScore = 76
}
console.log(score); // nothing
console.log(newScore); // nothing
console.log(oldScore); // print 76, this is mess , global 400 skip 

// now we can see the importance of scope, block scope and global scope.
// helps from various programming bug
// don't use var at-all


// global scope is different in browers and different in node 
// remember this line we will use it later
