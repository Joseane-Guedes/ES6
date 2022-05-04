//Example 1
// let contacts = ["Mary", "Joel", "Danny"];

// //let personalFriends = contacts;
// let personalFriends = [ "David", ...contacts, "Lily" ];
// //[ 'David', 'Mary', 'Joel', 'Danny', 'Lily' ]

// console.log(personalFriends)
// //[ 'Mary', 'Joel', 'Danny' ]

// contacts.push("Joseane");

// console.log(personalFriends)
// //[ 'Mary', 'Joel', 'Danny', 'Joseane' ]

//Example 2
let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}


let employee = { 
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee)

// {
//     name: 'Adam',
//     age: 25,
//     city: 'Manchester',
//     salary: 50000,
//     position: 'Software Developer'
//   }



