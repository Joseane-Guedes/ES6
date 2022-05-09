/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const userData = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;
            
            if( error ) {
                reject("500 level error")
            } else {
                resolve({
                    firstName: 'Joseane',
                    age: 100,
                    email: 'joseane_23@hotmail.com'
                });
            }
        }, 1000)
    })
}

userData()
.then( (data) => console.log(data))
.catch( (error) => console.log(error) );


  

