// 7-Nov-2025

// while loop and do while loop
let score = 0;
while (score <= 10) {
    //console.log(`Hey! You have scored ${score} runs.`);
    score++;
}

let myArr = ['ok','chintu','chor'];
let index = 0;
while(index < myArr.length){
    //console.log(`Array values are: ${myArr[index]}`);
    index = index + 1;
}
// while loop will go like, first condition and then increment.


// do-while loop
// this will first do the work and then check the conditions

let count = 11;
do {
    console.log(`Hey! print ${count}`); // interesting gives 11 as answer
    // because its 'do' first then check while condtions.
    count = count + 2;
} while (count < 10);