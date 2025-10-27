// 27-October-2025

// Arrays

// how to define,declare?

const myArr = [2,3,4,5,6]; // square brackets
// array in js can hold any data-type not just of one type.

// other ways to make array.
const myArr2 = new Array(1,3,5,7); // small brackets 
console.log(myArr2)

// METHODS

console.log(myArr.push(4)); // it will add 4 at the last of the array
console.log(myArr)

console.log(myArr.pop()); // will remove the last element from the array
console.log(myArr)

console.log(myArr.unshift(3)); // it will add 3 on first position and shift all 
console.log(myArr)

console.log(myArr.shift()); // shift the values to the left replacing/removing the first
console.log(myArr)


// INTERVIEW 
// slice and splice
// slice don't change the reference where as splice change the reference.

const myNewArr = [1,2,3,4,5];
console.log("A ",myNewArr);

console.log(myNewArr.slice(1,3)); // start from 1 index and don't include the 3rd index
console.log("B ",myNewArr);

console.log(myNewArr.splice(1,3)); // it's nothing like it include the 3rd index, this is where most student fail.
// print the array to see what's happening.

console.log("C ", myNewArr); // you can see our reference array got changed...