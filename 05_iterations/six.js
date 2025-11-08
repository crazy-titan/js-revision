// 8-Nov-2025

// lets explore filter and map, and know more about the 'for each' loop

const myArr = ["cpp","PHP","js","Python"];

// for each loop don't return anything, check this...

const output = myArr.forEach((item) => {
    console.log(item); // will print the items of myArr.
    return item; // will not return anything
});
console.log(output); // undefined , because nothing gets returned by using for each loop


// see another example

// const myNums = [1,2,3,4,5,6,7,8,9];
// const allNum = myNums.filter((items) => (items > 4)); // implicit form

// console.log(allNum); // will output all the array's elements


// we can do same by some changes

// const myNums = [1,2,3,4,5,6,7,8,9];
// const allNum = myNums.filter((items) => {return items > 4}); // Explicit form

// console.log(allNum);

// one more technique is
const myNums = [1,2,3,4,5,6,7,8,9];
const allNum = myNums.filter((items) => {
    if(items > 4){
        return items;
    }
});

console.log(allNum);


// so we can conclude that , filter will return the items of an array but foreach loop can't return anything


// now take another example of arrays of objects....

const books = [{
    title: "book-one",publishYear: 2000,subject: "history",edition: "4th"
},{
    title: "book-two",publishYear: 2002,subject: "science",edition: "3rd"
},{
    title: "book-three",publishYear: 1990,subject: "Mathematics",edition: "1th"
},{
    title: "book-four",publishYear: 1999,subject: "history",edition: "4th"
},{
    title: "book-five",publishYear: 2010,subject: "Geography",edition: "4th"
},{
    title: "book-six",publishYear: 2006,subject: "Mathematics",edition: "4th"
}]

const myBooks = books.filter((bk) => (bk.publishYear > 2000 && bk.subject === "Mathematics"));
console.log(myBooks);
// so we can acess the objects as per its properties using the filter functions