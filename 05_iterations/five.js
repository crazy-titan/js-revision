// we will now see the 'for each' loop

const myCoding = ["JS","CPP","PY","PHP"];

// myCoding.forEach(callBack function here)
// call back function don't have any name

// Method I
myCoding.forEach(function (item){
    //console.log(item);
})

// Method II(in terms of Arrow function)
myCoding.forEach((item) => {
    // console.log(item);
})

// Method III (give a reference function)

function printME(item){
    // console.log(item);
}
myCoding.forEach(printME); // this is how you give the reference




// but For our knowledge, 'for each' contains 3 important things
myCoding.forEach((item,index,arrray) => {
    console.log(item,index,arrray)
})
// will output 3 things item, index of item and complete array



// NOW Come to the object part that we were discussing in three.js file

// [{},{},{}] // most of the time we get array of objects from database

const myData = [

    {
        'ProgrammingLanguage': "javaScript",
        'ShortForm': "js"
    },
    {
        'ProgrammingLanguage': "C++",
        'ShortForm': "CPP"
    },
    {
        'ProgrammingLanguage': "Python",
        'ShortForm': "PY"
    }      
]

myData.forEach(function (item){
    console.log(item.ProgrammingLanguage);
})

// here we have seen earlier item will point to an object and then by using the
// dot , we can access the properties of particular object.

