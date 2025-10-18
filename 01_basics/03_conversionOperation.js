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


//  ***************************** Operations *************************************

// Basics operations addition,subtration,multiplication,division,remainder,power

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);

// These are the basics operation, where as % is important used in cryptography

// meme js concepts 
console.log("1"+2);    // 12 because first "" will make everything in string
console.log(1+"2");   // 12 but here first is number and than it will stick it like string

console.log("1"+2+2); // 122 beacuse first is "" so everything will act as string
console.log(1+2+"2"); // 32 beacuse first is number and then it will stick it like string


// more concepts like increament (prefix and postfix) checkout the MDN docs for more understanding
let value = true;
console.log((+true)); // 1 it will take as number
// console.log(true+); // error not possible

let score1 = 100;
console.log(++score1); // 101
console.log(score1); // 

let score2 = 102;
console.log(score2++); // 102
console.log(score2);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// two type of memory Stack(Primitive, only change in copies) and Heap(Non-Primitive, change in reference)

// STACK 
let userOne = "crazy@gmail.com";
let userTwo = userOne;

userTwo = "okay@gmail.com";

// here userTwo will get copies of userOne, so changes will be in copies not in original userOne file
console.log((userOne));   // "crazy@gmail.com"
console.log((userTwo));   // "okay@gamil.com"

// HEAP
let myUserOne = {
    emailID : "hello@gmail.com",
    upi: "user@ybl"
}
let myUserTwo = myUserOne;

// now access the objects propery using . and change the value
myUserTwo.emailID = "hahaha@gmail.com";

console.log(myUserOne);  //"hahaha@gmail.com"
console.log(myUserTwo);  //"hahaha@gmail.com"

// both place the value gets changes because heap gives the reference directly.