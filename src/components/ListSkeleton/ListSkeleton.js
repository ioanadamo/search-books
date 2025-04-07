import React from 'react';
import './ListSkeleton.css';

function ListSkeleton() {
  return (
    <ul className="list-skeleton">
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index} className="skeleton-item">
          <div className="skeleton-bar" style={{ width: '60%' }}></div>
          <div className="skeleton-bar" style={{ width: '80%' }}></div>
          <div className="skeleton-bar" style={{ width: '40%' }}></div>
        </li>
      ))}
    </ul>
  );
}

export default ListSkeleton;
