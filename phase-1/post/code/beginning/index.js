/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/

// Let's try making a GET request to display existing data on the page.
fetch("http://localhost:3000/pokemon")
.then(response => response.json())
.then(gottaCatchThemAll => {
  gottaCatchThemAll.forEach(pokemon => {
    const li = document.createElement("li");
    li.textContent = pokemon.name;
    document.querySelector('#gottaCatchThemAll').append(li);
  });
})


// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    fetch("http://localhost:3000/pokemon", {
        // Make a post request...
        method: "POST",
        // ...with these headers
        headers: {
            "content-type": "application/json", // the type of conent we're posting
            "Accept": "application/json" // the type of content we hope to recive

        },
        // ... and this body.
        body: JSON.stringify({
            name: document.querySelector("form").name.value,
            types:[
                document.querySelector("form").type1.value,
                //looking up the first tag named form, type1 = look for what has the name type 1. value= means we only want the value added
                document.querySelector("form").type2.value,
            ]
        })
    })   
        .then (response => response.json())
        .then(gottaCatchThemAll => {
            const li = document.createElement("li");
            li.textContent = pokemon.name;
            document.querySelector('#gottaCatchThemAll').append(li);
        });
    })

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 3. Try writing PATCH and DELETE requests!





/* notes for json
start with curly braces 
has to be double quotes
inside the Array, you will have an object
must have an id, that is the minimum

*/



