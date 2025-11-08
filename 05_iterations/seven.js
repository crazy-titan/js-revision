// 8-Nov-2025

// we know about the filter method which output when the condition is TURU

// Now we will see the Map() method which will output all no condition needed to get the output.

const myNums = [1,2,3,4,5,6,7,8,9];

// const myNewNums = myNums.map(this also take the call back function)

// const myNewNums = myNums.map((items) => (items*10)) // lets suppose i want to multiply all elements with 10
// console.log(myNewNums); // output the array 


// Chaining // You can apply multiple methods one-by-one

// const myNewNums = myNums.map((nums) => (nums*10)).map((nums) => (nums+1)) // adding 1 after multiplying with 10
const myNewNums = myNums.map((nums) => (nums*10)).map((nums) => (nums+1)).filter((nums) => {
    if(nums>40){
    return nums;
}
})
console.log(myNewNums); // will now output the values which is true according to condition inside the scope{}
