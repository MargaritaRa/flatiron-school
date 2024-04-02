/*

Phase 2 -> Props
By Sakib Rasul
Updated January 29, 2024
Created July 31, 2023

Core Deliverables
1. Create an array of items to sell in a boba shop.
2. Create a shop layout in <App>.
3. Define a <Item> component that displays one item.
4. Render our array of items as a list of <Item> components.

*/
// <h2 key={item.id}>{item.name} | ${item.price}</h2>
import Item from "./Item";

function App() {
  const items = [
    {
      id: 1,
      name: "Milk Boba",
      price: 5
    },
    {
      id: 2,
      name: "Taro Boba",
      price: 4
    },
    {
      id: 3,
      name: "Thai tea Boba",
      price: 6
    }
  ];
  return (
    <div>
      <h1>Margarita's Boba Shop</h1>
      {items.map(item => 
        // each one will need a key, you don't use it. only react
        <Item key={item.id} item={ item } />
        )};
    </div>
  )
}

export default App;