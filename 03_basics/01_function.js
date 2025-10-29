// 29-october-2025

// Functions
// to perform our work more efficient we use functions.


// lets suppose we want to console something again and again
// console.log("C")
// console.log("R")
// console.log("A")
// console.log("Z")
// console.log("Y")

// so here we can se we have to write each thing again and again, what if i do this using a function?

// function printAll() {
//     console.log("C")
//     console.log("R")
//     console.log("A")
//     console.log("Z")
//     console.log("Y")
// }

// let's see more into the function

// function sumTwoNum(num1,num2){
//     console.log(num1+num2);
// }
// sumTwoNum // giving the reference (we will use this very much in react)
// sumTwoNum() // NaN because nothing mentioned 


function sumTwoNum(num1,num2){
    console.log(num1+num2);
}
sumTwoNum // giving the reference again
sumTwoNum(2,3) // 5 
sumTwoNum(2,"3") // 23 as we have seen in data-types section
sumTwoNum(2,"")  // 2
sumTwoNum(2,"a") //2a

// as we can see we are not checking the parameters , its number or others we will see that later

// but something intresting see this now...
const result = sumTwoNum(2,3);
console.log(result)  // will give you undefined ?! why?
// because the function is console.log inside not anything returned from it,


// So now see what actually a function delivers
function addMe(number1,number2){
    let totalSum = number1 + number2;
    return totalSum;
}
// we can see that above function addMe is returning totalSum. so, after executing the function will
// give an output and we will store it in another variable...see below
const resultOne = addMe(2,3);
console.log(resultOne); // now this will not give you undefined value as output




// now see the function with parameters
function greetings(username){
    return `${username}, Hello noobre`
}
// console.log(greetings("crazy"));

// now see the function with default parameters... it will take the default value if argument is not present
function greetings(username = "hehehe"){
    return `${username}, Hello noobre`
}
// console.log(greetings("crazy"));

// now see the function logic little bit in case of if else,
function greetings(username = "hehehe"){
    if(username === undefined){
        console.log("Please,enter your argument");
    }
    return `${username}, Hello noobre`
}
console.log(greetings()); // this will give hehehe, Hello noobre, because we and not getting the return after if statement

// use the return to come out from the if
function greetings(username = "hehehe"){
    if(username === undefined){
        console.log("Please,enter your argument");
        return //nothing to return just end here
    }
    return `${username}, Hello noobre`
}

// note : everything after return syntax can't executed 



///////////////////////////////////////////////////////////////////////////////////////////////////////////
// making shopping cart

function myCart(cart1){
    return cart1;
}
console.log(myCart(50));
console.log(myCart(50,37,500)); // this is the list of item price but output will be just 50

// how to tackle this situations?
// we have to use the spread or REST operater again here. '...'

function finalMyCartItems(...cartFinal){
    return cartFinal;
}
console.log(30,50,33,452); // now output will show all the values

// One more intresting thing people use is this...
function MyCartItems(val1,val2,...cartFinal){
    return cartFinal;
}
console.log(MyCartItems(100,200,48,59,4000)); // [48,59,4000] will give you the array and you can use loops now.



// now lets take objects as the parameter for a function
const myObject = {
    username: "Crazy",
    age: 21
}

function argumentAsObject(anyObject){
    return `${anyObject.username}, i am ${anyObject.age} year old.`
}
console.log(argumentAsObject(myObject)); // will give the return as Crazy, i am 21 year old
// we can also give the whole object directly into the argument of the function.
console.log(argumentAsObject({username:"Crazy",age:21}));  //will give the return as Crazy, i am 21 year old


// now come to the array part, think about the array as parameter.
const myArray = [100,200,300];

function returnSecondElement(anyArray){
    return anyArray[1];
}
console.log(returnSecondElement(myArray)); // get 200
// we can also put whole array as an argument.
console.log(returnSecondElement([100,200,300])); // also get 200