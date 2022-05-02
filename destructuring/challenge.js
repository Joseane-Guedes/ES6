const student = {
    name: "kyle",
    age: 25,
    projects: {
        diceGame: "Two player dice game using javascript"
    }
}

const { name, age, projects: {diceGame} } = student;

console.log(`${name} is ${age} and ${diceGame}`)