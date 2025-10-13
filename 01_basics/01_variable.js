                                // get to know about the variable and constant //

const accountId = 123444;
// you can't change this value once its assigned


let accountEmail = "titan@ele.com";
// this can be override again and again


var accountPass = "125abc";
// this can also be override, but the issue of using the Var is its 'scope' {}.
// it can override the values at all position where you used this variable.


accountCity = "Vadodara";
// keep in mind, this can also be possible while initialising the variable.

let accountBalance; // this is undefined 

console.log(accountId);
// now try to over-ride the values.
accountEmail = "override@ele.com";
accountPass = "utyei34";
accountCity = "Patna";
// accountId = 122222; // this can't be possible because it's constant defined already.


// let's suppose you want to display all the values in form of table at once 
console.table([accountId,accountEmail,accountPass,accountCity,accountBalance]);


// challenge 3 , 13 october 2025