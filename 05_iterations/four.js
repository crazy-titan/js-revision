// lets iterate on objects now

const myObj = {
    'game': "GTA-VI",
    'company': "TCS"
}

// for iteration on Objects we use 'for in' loop
// for in output the keys, for of output the value

for (const key in myObj) {
    // console.log(key); // will output the keys
}

// can we try this loop on array?

const myArr = ["js","cpp","PHP"];
for (const key in myArr) {
    //console.log(key);  // will output the index of the array because its universal key
}

// can we apply this on MAP?


const maps = new Map();

maps.set('IN',"India")
maps.set('RUS',"Russia")
maps.set('JAP',"Japan")

for (const key in maps) {
    console.log(key);  // no error but also no output
}

// we can't iterate on map using for in loops

