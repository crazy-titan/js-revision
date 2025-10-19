// 19-oct-2025

const name = "crazzzyyy";
const score = 50;

console.log(name + score + ' Value');  // this is not used now its completely old method

// learn new method, to inject the variable
console.log(`Hey! i am ${name} and my account balance is ${score}`);

const gameName = new String("hello-yo-how");  // new way to declare string, above and below are same.
// this is just object method to declare string.

console.log(gameName); // this will give the key:value pair , don't think like array, its object
// now you can apply various function on this

console.log(gameName[0]); // fist char 'h'
console.log(gameName.__proto__); // empty curly bracket


console.log(gameName.length); // give the length of string

console.log(gameName.toUpperCase()); // all display in UPPERCASE , but no change in original string
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));



const newString = gameName.substring(0,4);
console.log(newString);  //// it will take from 0 to 3


const anotherString = gameName.slice(-12,3); // this can take negative values 
console.log(anotherString);

const newStringOne = " crayzzy  "
console.log(newStringOne.trim()); // will remove the extra space from front and back


// some link issue

const url = "https://titan.com/crazy%20chai"
console.log(url.replace('%20','-')); // it will search for %20 and then replace it with -

// for searching in url
console.log((url.includes('crazy'))); // true

 
// convert into array

console.log(gameName.split('-')); // ['hello','yo','how']


// learn and practice more on string you will crack interview easily, and preform best in backend



