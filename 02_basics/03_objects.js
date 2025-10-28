// 28-october-2025

// Two ways to make the objects , singleton (using constructor) and using literals

// singleton means its one single object at all
// Object.create

// using literals

const JsUser = {}; // empty objects.
// as we know array is like index accessing, here we will do key:value pair not the indexing



const JsUserOne = {
    name: "titan",
    age: 21,
    location: "India",
    email: "yoyo@yahoo.com",
    isLoggedIn: false
}
// the keys like name,age, location etc are treated like "name","age"
// above object is the one way to define 

// now try to access the object's key
// console.log(JsUserOne.name);  // this is not the professional way to access the object
// console.log(JsUserOne["name"]);  // why i am showing this way ?




// see Other way now
const JsUserTwo = {
    name: "crazy",
    "full name": "okay-okay", // intresting now --> try to access this using dot ( . )
    age: 21,
    location: "India",
    email: "youyou@google.com",
    isLoggedIn: true
}

// now access this object keys
// console.log(JsUserTwo["full name"]); // only way to access that nothing else
// console.log(JsUserTwo.full name); // you can't do this, impossible



// MAKE a SYMBOL and add it to the object as a key

const mySym = Symbol("key1");
const mySym2 = Symbol("key2");

const JsUserThree = {
    name: "chintu",
    age: 24,
    "full name": "coder-chintu",
    mySym: "myKey1",
    location: "Gujarat",
    isLoggedIn: false
}

// above inserted key for the symbol is not actually the symbol, check the typeof it in console.
// console.log(JsUserThree.mySym)
// console.log(typeof JsUserThree.mySym) // you can see this is string not the symbol



// then how to inset the symbol as key?

const JsUserFour = {
    name: "chintu",
    age: 24,
    [mySym2]: "mykey2",  // see this is what the insertion of symbol look like
    "full name": "coder-chintu",
    location: "Gujarat",
    isLoggedIn: false
}

console.log(JsUserFour[mySym2]);
console.log(JsUserFour); // you will see that the symbol has been there.


// One more thing that keep in mind that let's suppose we don't want to change object further 
// in that case we will use freeze


// JsUserFour.email = "hehe@gmail.com";
// console.log(JsUserFour);
// Object.freeze(JsUserFour);
// by doing this i can't able to change any value of object JsUserFour


// now try to change the objects value again see its possible or not?

// JsUserFour.email = "secondHehe@gmail.com";
// console.log(JsUserFour); // you can see its same object values as previous.



// Now add a function inside an object
// treat the function as a variable in javascript

JsUserFour.greeting = function(){
    console.log("Hello, JsUserFour");
}

// now try to get this from object
console.log(JsUserFour.greeting) // taking the reference of funciton , very INTRESTING
console.log(JsUserFour.greeting()) // executing the function.

// now add another function
JsUserFour.greeting2 = function(){
    console.log(`Hello,${this.name} Welcome to the JS`); // we use 'this' to reference the same object in which we are adding function

}
console.log(JsUserFour.greeting2());
