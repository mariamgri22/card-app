import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../Card';
import {remove} from './../../features/cardSlice';
import './style.css';

export default function Main() {
  const cards = useSelector((state) => state.card);

  const dispatch = useDispatch();
  return (
    <div className="card-container">
      <div className="cards">
        {cards?.map((cardNumber) => (
          <Card
            number={cardNumber.number}
            key={cardNumber.number}
            onRemove={() => dispatch(remove(cardNumber.number))}
          />
        ))}
      </div>
    </div>
  );
}
