// 8-Nov-2025

// more types of loops

// 'for of'
["","",""]
[{},{},{}]

// for (const element of object) {
    
// }

// by seeing this syntax you will get confused, but the element is like a variable
// and object is like on what you want to iterate?
// there is no need to increment or define anything it will do all by own.

const myStr = "Hello World!";
for (const strIndex of myStr) {
    //console.log(strIndex); // will print all character one by one.
}

// we can also apply this on array;
const myArr = [1,2,3,4,5];
for (const index of myArr) {
    //console.log(index); // will iterate one by one
}

// MAP
// they contains key:value pair, and have uniqueness like dictionary of python.
// if you inject repeated value, it will not show while displaying.

const maps = new Map();
// by using dot '.' you can access various methods 
maps.set('IN',"India")
maps.set('RUS',"Russia")
maps.set('JAP',"Japan")

// now see the values inside the map section
//console.log(maps); // will get an object like data,

// can we iterate on MAP using for of loop?

// we know there is key and value both so we need to change the syntax of variable

// for (const key of maps) {
//     console.log(key); this will not give the values that we need 
// }

for (const [key,value] of maps) {
    console.log(key,value); // will give you proper data 
}


// now lets try this on OBJECT
// can for of loop iterate on Objects?

const myObj = {
    'game': 'GTA-VI',
    'company': 'TCS'
}
// for (const [key,value] of object) {
//     console.log(key,value); // this will show error.
// }

// we can't iterate like this on OBJECTS we will see that later.