// 14-Oct-2025

let score = undefined;

console.log(typeof score);
console.log(typeof (score)); // function method

let valueInNumber = Number(score); // to convert the score into Number, we can also use String, Boolean, etc

console.log(typeof valueInNumber);
console.log(valueInNumber);

// if we change the score as "33"
// output will be string , string , number , 33

// if we change the score as "33abc"
// output will be string, string, number , NaN

// if we change the score as null
// output will be object , object , number , 0  ==> null is converted into 0 

// if we change the score as undefined
// output will be undefined, undefined, number , NaN

let isLoggedIn = 1;

let valueInBoolean = Boolean(isLoggedIn);

console.log(typeof valueInBoolean);
console.log(valueInBoolean);

// output will be boolean and true. so we can say 1 is treated as True and 0 is treated as false.
