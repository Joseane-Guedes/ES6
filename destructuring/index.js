const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    Address: {
        city: 'Los Angeles'
    }
};


// console.log(player.club)
// console.log(player.Address.city)

const { name, club, Address: {city} } = player;

// console.log(`${name} plays for ${club}`);

console.log(`${name} lives in ${city}`);

