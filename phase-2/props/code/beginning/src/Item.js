
export default function Item({ item }) {
    return (
      // don't need the key here, only when you are mapping
       <h2>{item.name} | ${item.price}</h2>
    );
  }