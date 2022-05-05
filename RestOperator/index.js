
// function add(...nums) {

//     // console.log(nums); //[ 4, 5, 7, 8, 12 ]
//     //console.log(arguments) //[Arguments] { '0': 4, '1': 5, '2': 7, '3': 8, '4': 12 }
// }

// add(4,5,7,8,12)

function list (first, second, ...others) {
    console.log(`My list: ${first}, ${second}. and still my list: ${others.join(', ')}.`)
  }

  list('Pedro', 'Maria', 'João', 'Marcus', 'Tiago')
  //  Pedro, Maria. Os demais são: João, Marcus, Tiago.