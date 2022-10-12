import React from 'react';
import './style.css';

export default function Instructions() {
  return (
    <div className='sidebar'>
      <div className='vl'></div>
      <article>
        Press the "add card" button to add the new Card. Use the "sort cards"
        button to sort the Cards by the Increase. Press an X Icon on the top
        right to delete them{' '}
      </article>
    </div>
  );
}
