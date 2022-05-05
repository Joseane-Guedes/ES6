//function declaration
function breakfastMenu() {
    return 'I`m going to scrambled eggs for breakfast'
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch"
}

// const dinnerMenu = (food) => {
//     return `I'm going to eat a ${food} for dinner`
// }

// with a parameter
//const dinnerMenu = food => `I'm going to eat a ${food} for dinner`

//with 2 parameters
const dinnerMenu = (food, drink) => `I'm going to have a ${food} and ${drink} for dinner`


console.log(dinnerMenu('salad', 'soda'));