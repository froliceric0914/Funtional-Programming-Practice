// 1. Take this disjointed sentence and turn it into a single string
const text = [
    'The ships',
    'hung in the sky,',
    'much the way',
    'that bricks don`t',
]

const joinedText = text.reduce((sentence, element) => sentence + `${element} `)

console.log('joinedText', joinedText)
// Your Code Here

// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
    {
        team: 'A',
        score: 20,
    },
    {
        team: 'B',
        score: 17,
    },
    {
        team: 'C',
        score: 23,
    },
    {
        team: 'D',
        score: 13,
    },
]

// Your Code Here

const highestScore = function () {
    let finalTeam = scores.reduce((higherScore, currentScore) => {
        return higherScore.score > currentScore.score
            ? higherScore
            : currentScore
    })
    console.log('finalTeam', finalTeam)
    return finalTeam.team
}

console.log('highestScore', highestScore())

// expected output: "C"

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
    {
        name: 'Serenity',
        speed: '4.2G',
    },
    {
        name: 'Cylon Raider',
        speed: '7.5G',
    },
    {
        name: 'Swordfish II',
        speed: '50G',
    },
    {
        name: 'Tie Fighters',
        speed: '4100G',
    },
]

// Your Code Here
const highSpeed = ships.reduce((faster, current) => {
    let fasterSpeed = parseInt(faster.speed.slice(0, -1))
    let currentSpeed = parseInt(current.speed.slice(0, -1))
    return (faster = fasterSpeed > currentSpeed ? faster : current)
})

console.log('highSpeed', highSpeed.name)

// Expected output: Tie Fighters
