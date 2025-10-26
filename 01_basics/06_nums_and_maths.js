const score = 400;
console. log (score); // just number

const balance = new Number (100)
console. log (balance);  // this is object special mentioned as number

console. log (balance.toString ().length);
console. log (balance. toFixed (1)) ;  // for getting digits after decimal ... eg 100.0

// for precision we can use toPrecise
const newBalance = new Number(23.456)
console.log(newBalance.toPrecision(3)); //23.5

// to represent the values in more better way
let newScore = 1000000;
console.log(newScore.toLocaleString()); // defaul as US based
console.log(newScore.toLocaleString('en-IN')); // changed as India based

// There is also MAX_value and MIN_value you can do the console and check its value how much js can store



//  +++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++  //

// Math library comes defaul within javascript.

console.log(Math); // write on console to know better, here it will just give you object having various methods

console.log(Math.abs(-4)); // will output as 4 , abs will make -ve value as +ve value vice-versa is not true.
console.log(Math.abs(4)); // will output same as 4

console.log(Math.round(4.4)); // will output as 4
console.log(Math.round(4.6)); // will output as 5
// we will use this round most of the time

// we also have ceil and floor for more desire results

console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.6)); // 5


// THE MOST IMPORTANT METHOD THAT WE MOST OF THE TIME USE IS random()

console.log(Math.random()); // will output the value between 0 and 1 on each execution

// lets suppose i am solving the dice problem where i want value 1 to 6 in that case what we will do?

console.log((Math.random()*10)+1); // multiply by 10 to get value more that 0 to 1 , and +1 for the not getting 0


// TRICKS TO REMEMBER
const max = 20;
const min = 10;
// get value between 10 to 20?

console.log((Math.random()*(max - min + 1)) + min); // always add the min value at last to get it include.

// now you can use other funciton to make it single digit or multiple all depends on you.

// 27 - October - 2025

