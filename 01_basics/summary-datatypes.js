// 17 october 2025

// On the basis of storing and accessing the data inside the memory
// two types of data-types

// Primitive (call by value)
// String,null,undefined,Number,Boolean,bigINT,symbol

// dynamically type language
const score = 100; // i can also assign it to any string
const myScoreOne = 123455475892392829n    // n represents the bigInt
let myScore = null;

// how to make a symbol
let myId = Symbol("123");
let myNewId = Symbol("123");

// both syntax is looking same but they are different because its symbol

console.log(myId === myNewId); // false 

// use the typeof function to check the type of the variables.
console.log(typeof myId);



// Non-Primitive (call by reference)
// Array,objects and fucntions

let myArray = ["hello","shaktiman","chhota-Bheem"];

// Objects
// represented by curly brackets, and consists of key:value pairs

let myObj = {
    Name: "Crazy",
    Age: 22
}

// Functions

let myFun = function(){
    console.log("Hello World");
}

// check the typeof objects and function also and all other variable that are there in this file.