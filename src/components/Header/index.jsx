import React from 'react';
import {useDispatch} from 'react-redux';
import {add, sortNumb} from './../../features/cardSlice';
import './style.css';

export default function Header() {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <button className="buttonHead" type="button" onClick={() => dispatch(add())}>
        Add card
      </button>
      <button className="buttonHead" type="button" onClick={() => dispatch(sortNumb())}>
        Sort cards
      </button>
      <hr className="new1"></hr>
    </header>
  );
}
