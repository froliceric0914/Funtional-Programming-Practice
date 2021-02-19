// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two

const addTwo = (callback) => {
    return callback + 2
}

const doubleNumber = (n) => n * 2

console.log('double: ', addTwo(doubleNumber(2)))
// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
    return `${title} ${first_name} ${last_name}`
}

const greetSomeone = (callback) => `hello ${callback}`
// you might notice that this function is less than ideal - that's great! We'll talk about why next
console.log('greet: ', greetSomeone(createFullName('eric', 'zhao', 'Mr')))
