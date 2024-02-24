import React, { useState } from "react";

const initialShoppingList = [
  { name: "Cereal", isHealthy: false, id: 10 },
  { name: "Popcorn", isHealthy: false, id: 23 },
  { name: "Banana", isHealthy: true, id: 49 },
];

function ShoppingList() {
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  const handleChecked = (id) => {
    setShoppingList(
      shoppingList.map((item) =>
        item.id === id ? { ...item, isHealthy: !item.isHealthy } : item
      )
    );
  };

  const itemList = shoppingList.map((item) => (
    <li
      key={item.id}
      style={{
        color: item.isHealthy ? "green" : "red",
        listStyle: "none",
      }}
    >
      {item.name}
      <input
        type="checkbox"
        checked={!item.isHealthy}
        onChange={() => handleChecked(item.id)}
      />
    </li>
  ));

  return <ul>{itemList}</ul>;
}

export default ShoppingList;
