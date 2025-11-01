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


// 1-November-2025

// CLOSERS

function one(){
    const userName = "Chintu"
    
    function two(){
        const userLastName = "Chor"
        console.log(userName);  // child function 'two' can acess parent function 'one'
    }
    // console.log(userLastName);   // parent scope can't acess child scope's data => will give error
    two();    // execute function two 
}
one();   // execute function one

// we will get to know in depth about the closers when we reached at that point of understanding

// let's take an example of 'if' block

if(true){
    const username = "Crazy";
    if(username === "Crazy"){
        const lastname = " Billa";
        console.log(username + lastname);
    }
    console.log(lastname); // acessing beyond the scope gives error
}
// console.log(username); // acessing beyond the scope gives error



// ++++++++++++++++++++++++++++ Interesting Concept ++++++++++++++++++++++++++++++ //

// see the two different way to define the functions

function addTwo(num){
    return num + 1
}
addTwo(5); 
// we know this will not print the value, just return the value.
// what if you take 78 number line on the top of the function 'addTwo'?
// it will execute without any giving any error.


// Now Hosting technique

const NewSum = function(num){
    return num + 2
}
NewSum(5); 
// we know this will not print the value, just return the value.
// what if you take the 89 number line on the top of the function assigned to 'NewSum'?
// it will not execute, throws error.