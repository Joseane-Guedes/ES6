import fetch from "node-fetch";
/**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
//* GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
//  fetch('https://jsonplaceholder.typicode.com/comments/1')
//      .then((response) => response.json())
//      .then((data) => console.log(data))

//  POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.

fetch('https://jsonplaceholder.typicode.com/comments',{
    method: 'POST',
    body: JSON.stringify({
        name: 'Comment 105',
        email: 'joseane_23@hotmail.com',
        body:"Wtf is going on here?",
        postId:1
    })
})
    .then((response) => response.json())
  .then((data) => console.log(data))
    