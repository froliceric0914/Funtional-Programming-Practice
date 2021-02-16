// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------

function printGreet() {
    const time = new Date().getHours();
    return time >= 0 && time <= 12 ? 'good morning' : 'good afternoon';
}

console.log(printGreet());

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and
//       returns an array of items counting down from that number to
//       zero.
// -----------------------------------------------------------------

// this one has side effect cuz it edit the countArr outside of the function
// let countArr = [];
// function countDown(num) {
//     if (num > 0) {
//         countArr.push(num);
//         num--;
//         console.log('countArr', num, countArr);
//         return countDown(num);
//     } else {
//         return countArr;
//     }
// }

function countDown(num) {
    let countArr = [];
    for (let i = num; i > 0; i--) {
        countArr.push(i);
    }
    return countArr;
}

console.log(countDown(5));
