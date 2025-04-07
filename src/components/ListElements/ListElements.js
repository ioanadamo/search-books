import React from 'react';
import './ListElements.css';

function ListElements({ items }) {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          <h3>{item.title}</h3>
          {item.subtitle && <p><strong>Subtitle:</strong> {item.subtitle}</p>}
          <p><strong>Authors:</strong> {item.author_name?.join(', ') || 'Unknown'}</p>
          <p><strong>First Published:</strong> {item.first_publish_year || 'N/A'}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListElements;
