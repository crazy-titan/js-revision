// 16 october 2025

// always try to compare same data-types and variable.

console.log(2 > 2); // false
console.log(2>1); // true

// now take different data-types

console.log("2" == 2);  // true
console.log("02" > 2);  // false

console.log(null > 0);  // converting to number and answer is false
console.log(null ==  0); // converting to number and answer is false
console.log(null >= 0); // here its true,

// == and <=,>= , < ,> are treated differently , in last part it will convert in number.

// but we don't think that much while working , that's why we don't use different datatype for comparing

console.log(undefined < 0); // false
console.log(undefined <= 0); // false
console.log(undefined == 0); // false


// STRICT CHECK

// use === to check the number and data-type to

console.log("2" === 2); // false check 3rd console.log()
