// 9-Nov-2025

// we will now get to know about the reduce method
// you can think about the micro-controller class where an accumulator is the one who add the registors value and then give results.

// we will use reduce method various times
// for example adding the cost of items ordered online like shopping cart

const myArr = [1,2,3];

// myArr.reduce( call back function )

// const outputValue = myArr.reduce(function (acc,currVal){
//     console.log(`accumulator Value: ${acc}, current Value: ${currVal}`); // you can see what's actually happening
//     return acc + currVal;
// },0) // 0 at last is the initial condition
// console.log(outputValue);

// lets see the shopping cart 
const shoppingCart = [{
    itemName: "Js course",
    price: 399
},{
    itemName: "PY course",
    price: 199
},{
    itemName: "CPP course",
    price: 99
},{
    itemName: "JAVA course",
    price: 999
}]

const totalPriceToPay = shoppingCart.reduce((acc,currVal) => (acc + currVal.price),0); // acc initial at 0, and then each 
// currVal is the object so use the property to access its inside properties and add
console.log(totalPriceToPay);