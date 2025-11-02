// 2-Nov-2025


// we will get to know about the 'this' and arrow functions

const user = {
    userName: "Chintu",
    price: 239,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to my website.`) // this is used for giving current context
        // console.log(this); // see what its showing the current status.
    }
}

user.welcomeMessage();  // same as defined
user.userName = "Crazy";
user.welcomeMessage(); // userName changes to Crazy

// see how the output is coming.

console.log(this); // this will give you {} , because we are working on node environment
// but you will get window as an output when you run this on web console.



// now use 'this' inside a function to see what it output

// function helloOne(){
//     console.log(this); 
// }
// helloOne();   // will output various things , we will see at DOM manipulation


// // ALSO

// function helloTwo(){
//     let userName = "chor";
//     console.log(this.userName); // will output as UNDEFINED 
// }
// helloTwo();   // undefined in output , we will see in DOM 


// const letMe = function (){
//     let userName = "chor";
//     console.log(this.userName); // will output as UNDEFINED 
// }
// letMe();   // undefined in output , we will see in DOM 

// /// so from here we can say , 'this' don't act same inside the function.




/// NOW DEFINE THE FUNCTION IN TERMS OF Arrow function
// for that you need to remove the 'function' term and put an '=>' in between () and {}

const letMe = () => {
    let userName = "chor";
    console.log(this.userName); 
    console.log(this); //again shows as empty {}
};
letMe(); // again we can see its shows output as undefined


// NOW discuss ARROW Function porperly.

// () => {} // this is the general representation of Arrow function
// we can hold this to any variable also


// const addTwo = (num1,num2) => {
//     return num1 + num2; 
// }
// console.log(addTwo(3,4));
// above function we are using the return, this also called explicit function.


// we can also write the above function into implicit form
// const addTwo = (num1,num2) => num1 + num2; // when we just have one line syntax
// console.log(addTwo(3,4));


// one more important method which we will use mostly in react is..
const addTwo = (num1,num2) => (num1 + num2); // proper implicit form ' USE Parenthesis () '
console.log(addTwo(3,4)); // all above will also give the same output '7'


// see how we are outputting the objects
// const addOne = (num1,num2) => {username:"ChintuOne"};
// console.log(addOne(3,4)) // Will give undefined value because we didn't used the () around the {}objects

const addOne = (num1,num2) => ({username:"ChintuOne"}); // now wrap this object into ()
console.log(addOne()); // now you will get the object 

// so these are the things that we come across in the react



// we will discuss some more interesting things when we see the loops