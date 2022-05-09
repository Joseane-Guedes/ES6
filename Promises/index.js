//Promises

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 2000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );


  


