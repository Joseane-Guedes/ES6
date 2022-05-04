function addressMaker(address) {
  const {city, state} = address

  const newAddress = {
    city: city,
    state: state,
    country: "USA",
  };
  console.log(`${newAddress.city} , ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({ city: "Austin", state: "Texas" });
