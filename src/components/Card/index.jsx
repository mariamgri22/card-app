import React from 'react';
import './style.css';

export default function Card({number, onRemove}) {
  return (
    <div className="card">
      <div className="number">{number}</div>
      <button onClick={onRemove} className="removeButton">
        <i
          className="red x icon"
          style={{
            position: 'relative',
            top: '0',
            right: '0',
          }}
        >
          x
        </i>
      </button>
    </div>
  );
}
