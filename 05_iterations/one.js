// 7-Nov-2025

// we are seeing the working of for loop


// Generalise form of 'FOR' loop

//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element); // counting 0 to 9
}

for (let index = 0; index < 5; index++) {
    const element = index;
    for (let i = 0; i < 10; i++) {
        const element = i;
        console.log(index + '*' + element + '='+index*element);
        // printing the table from 0 to 10;
    } 
}

// break and continue keywords
// break is to just come out of the loop ignore further values
// whereas continues is like give a chance by skipping that one value