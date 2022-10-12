import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Main from './components/Main/idex';

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
      <Instructions />
    </>
  );
}

export default App;
