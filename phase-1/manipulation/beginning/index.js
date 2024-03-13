/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
console.log(document.querySelector('h1'));
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// console.log(document.querySelectorAll("p")).forEach(pElement => {
//     console.log(pElement);
// });
console.log(document.querySelectorAll("p"));
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("#today").textContent);

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#today").textContent = "Today!"
document.querySelector("#today").style.color = "green"
// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#tomorrow").remove();
//Don't put anything inside the parameters for remove

// ~ Create + Append a node
// -> createElement(), append()
// const Image = document.createElement("img");
// Image.src= "";
// document.body.append(image);

//document.querySelector("#image-container").append(image);
// h1-6, div, p,...
// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and ["The Shining"],
//    the function should append to #dates something like:
//        Books
//        • The Shining
// const displayList = document.createElement("h1");
//  document.div.append(displayList);

//  const displayList = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
//   }
//   element.append(displayList);

  function displayList(name, array) {
    const datesElement = document.querySelector("#dates");
  
    const heading = document.createElement("h1");
    heading.textContent = name;
    datesElement.appendChild(heading);
  
    const list = document.createElement("ul");
    array.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });
    
    datesElement.appendChild(list);
  }
  
  const books = ["The Shining", "Alice in Wonderland", "The Raven"];
  displayList("Books", books);
  

// 2. Replace the <strong> element with a newly created one.

const element = document.querySelector("strong");
element.remove();

//element.removeChild(element.lastElementChild);

//console.log(document.querySelector("strong"));