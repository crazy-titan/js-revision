// Temporal API proposal to make this global as Math library, but right now just go with traditional method

let date = new Date(); // make the object 
console.log(date) // giving you something which is not understandable and readable

// use the various methods of DATE to know more 

console.log(date.toString());  // make it more understandable
console.log(date.toDateString()); // make less info
console.log(date.toLocaleDateString())

// the typeof Date is object, interview question
console.log(typeof date); // object

let myCreatedDate = new Date(2025,0,23) // js use array indexing , so 0 is jan actually
console.log(myCreatedDate);
console.log(myCreatedDate.toString());

// we can also use the string in above myCreateDate like '2025-01-23' ,its jan. here no array indexing follow
// we can also use indian standard as mm-dd-yy inside the string.


let myTimeStamp = Date.now();
console.log(myTimeStamp); // get value in milliseconds
console.log(myCreatedDate.getTime()) // gives anothere milliseconds value 

// now we can compare both the values


// IMPORTANT THINGS TO TRY
const newDate = new Date();
console.log(newDate.getDate()); // to get only date
console.log(newDate.getMonth()); // to get only month

// now you can again use the back-tik to write something creative
console.log(`Hey this is js Revision series ${newDate.getDate()} and here we go`)



// VERY IMPORTANT NOW
// here we can control the parameter in desire way, we will use this later, 

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    month: '2-digit'
}))
