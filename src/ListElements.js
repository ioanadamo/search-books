import React from 'react';
import './List.css';

function ListElements({ items }) {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListElements;
