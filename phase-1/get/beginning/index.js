/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/
//fetch: dependent on the web. May or may not be working. if you don't have access it won't work
//returns a promise, not a success, but will give back a succesulf or none sucessful response
//creat = POST
//Read = GET
// Update = PATCH
// Delete = DELETE

// A synchronous request to https://cat-fact.herokuapp.com/facts/random.
fetch("https://cat-fact.herokuapp.com/facts/random")
//fetch is a promise, so we'll use .then() to handle its successful state
// here, we'll convert our JSON response int usable JS
.then(response => response.json())
.then(fact => {
    document.querySelector("#cat").textContent = fact.text;
})

//look up textContent
//fetch is a promise, so we'll use .catch() to handle its unsuccessful state
//would show error if error
.catch(error => console.log(error));
// A synchronous request to https://anapioficeandfire.com/api/books.
fetch("https://anapioficeandfire.com/api/books")
.then(response => response.json())
.then(books => {
        const li = document.createElement("li");
        li.textContent = books[4].name;
        //parent.append
        document.querySelector("#got").append(li)
    });
    // books.forEach(book => {
    //     const li = document.createElement("li");
    //     li.textContent = book.name;
    //     //parent.append
    //     document.querySelector("#got").append(li)
    // });
//});

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name){
   const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const pokemon = await response.json();
    document.querySelector("#pokemon").textContent = pokemon.name;
    //console.log(pokemon);
}
getPokemon("ditto");

// ~ Challenge: Make a GET request to an API of your choice!
fetch ("gtlgGG0Z0VbtqxCuywP05aDUrQyFxr8QHk5wWOrU")
.then (response => response.json())
.then (nasa => {
    document.querySelector("#nasa").textContent = nasa.text:
})


// .then(response => response.json())
// .then(fact => {
//     document.querySelector("#nasa").textContent = fact.text;
// })