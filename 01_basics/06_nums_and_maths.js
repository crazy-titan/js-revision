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


