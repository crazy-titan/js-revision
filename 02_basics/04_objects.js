// 28-october-2025

const myObj = new Object(); // making singleton
const myObj2 = {} // no singleton

// console.log(myObj); 
// console.log(myObj2);
// both will give a empty object.

// add some property(key:value)
myObj2.id = "123abc"
myObj2.name = "crazy"
myObj2.password = "ok123"
console.log(myObj2);


// lets talk about the nested objects

const newObject = {
    id: "github",
    fullName: {
        userfullName: {
            firstName: "crazy",
            lastName: "owl"
        }
    }
}

// how to access them?
// just use the dot and keep on penitrating...

console.log(newObject);
console.log(newObject.fullName);
console.log(newObject.fullName.userfullName);
console.log(newObject.fullName.userfullName.firstName);

// by above methods you can access the nested objects


// now how you can join two objects?

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = Object.assign(obj1,obj2); // obj1 is target and obj3 is equall to target.
// MEANS??

// Object.assign will return an object 
// the best practice is too put any empty object in place of target

const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);


// but we will again use the SPREAD method same as array to make a complete new array
const obj4 = {...obj1,...obj2};
// console.log(obj4); perfect


// TALK about the database
// we get the array of Objects there

const myDatabase = [
    {
        id: "hellow234",
        name: "bhak"
    },
    {

    },
    {

    },
]

// now access the array first and then the object placed on that index
console.log(myDatabase[0].id)

// but let go more in depth, lets suppose you want to make an array fromt the keys of an object
// take the first example form this file 'myObj2'

console.log(Object.keys(myObj2));   // very intresting and future use KIM
console.log(Object.values(myObj2));

// we can also make an array from one pair of key:value
console.log(Object.entries(myObj2));

// we can also check which is present in an object using ownproperty

console.log(Object.hasOwnProperty("name"));  // will give boolean values --> true
console.log(Object.hasOwnProperty("xyz"));  // will give boolean values --> false