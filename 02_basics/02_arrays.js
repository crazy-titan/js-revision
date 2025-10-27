// more about array
// 27-october-2025

const marval_heros = ["ironman","thor","spiderman"];
const dc_heros = ["superman","flash","batman"];

// we want to add them together.

// marval_heros.push(dc_heros); // this will not make something logical, its worse
// // it will also prove that the arrays in js can hold any data-type
// console.log(marval_heros); // we can see there is array inside array.

// how to solve ?
// use concat
// but it will give new array, so we need to store it 

const all_heros = marval_heros.concat(dc_heros);
console.log(all_heros);
// this will give the perfect array that we are looking for.


// but most of the time we will use the SPREAD, using ' ... '
const all_new_heros = [...marval_heros, ...dc_heros];  
console.log(all_new_heros); // this will also give same response as concat, but if we have more that 2 array, we can simply use
// comma, in spread to perform that task.




// now lets take some other case 
const myArray = [1,2,3,[4,5],6,7,[2,[4,5]]]; 
// as we can see here its array inside array inside array and its max depth is 3.
// to get the values in single terms in organised mannar we will use 'flat'

const my_real_Array = myArray.flat(Infinity);
console.log(my_real_Array);
// we will write the depth in place of infinity, but if we want to just check all the depth that the case have
// then use the infinity term in there.



// Now consider another case scenerio
// we are getting some data from somewhere and i want to make the array of it

console.log(Array.isArray("Crazy")); // give boolean type response, false-because its string
console.log(Array.from("Crazy")); // will make an array using the character of the given string

// take the case when you have to make form the objects(key:value pair)
console.log(Array.from({name:"TITAN"}));
// above console will give the empty array because you didn't mentioned form which key or value u want to make the array.
// INTERESTING


// make array form set of elements
let scoreOne = 100;
let scoreTwo = 200;
let scoreThree = 300;

console.log(Array.of(scoreOne,scoreTwo,scoreThree)); // will give array with 100,200 and 300 as elements.
