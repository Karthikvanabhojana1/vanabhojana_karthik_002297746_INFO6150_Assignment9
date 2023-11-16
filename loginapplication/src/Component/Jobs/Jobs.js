// Home.js

import React, { useState } from 'react';
import Card from '../Card/Card';

const Home = () => {

  const divstyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
  };
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleAddItem = () => {
    let newValue=prompt("Enter the item to be added")
    const newItem = { id: items.length + 1, name: ` ${items.length + 1} ${newValue}` };
    setItems([...items, newItem]);

    alert(`New item added: ${newItem.name}`);
  };

  return (
    <div>
      <div style={divstyle}>
      <Card pageName="Jobs" description="In this page we add Job Details" color="#FF6663" />
      </div>
      
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default Home;
