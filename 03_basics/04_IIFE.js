// IIFE (Immediately Invoked Function Expression)

// these are the functions that are executed imediately
// these are used to avoid the pollution coming from global scope.

// how to make an iife function?

function user(){
    console.log(`Welcome! to my github Codebase...`);
}
user();

// this will execute the funciton immediately

// write same thing in different way now

// function user(){
//     console.log(`Welcome! to my github Codebase...`);
// }();  // this line is showing error.. how to solve this? use the previous file concept of wraping in ()

(function user(){
    // also known as named IIFE
    console.log(`Welcome! to my github Codebase...too`);
}) (); // this will execute now

// now write in terms of arrow function
(() => {
    // also know as simple IIFE
    console.log(`Welcome! to my github Codebase...three`);
})(); // this will also be executed

// but the IMPORTANT THIS ABOUT THE iife function is that you need to put a semi-colon at the end of execution
// to let it end , other wise it will not laid you to run other iife functions
// you can see i have used a semi-colon after each execution of an IIFE function.
// KIM this in mind -- INTERVIEW QUESTION


// You can also make the parameterise iife 
// ()() this is generalise format of any iife function

((name)=>{
    console.log(`Hello,${name}`);
})(" Chintu");

// just same as taking the argument and execution nothing else