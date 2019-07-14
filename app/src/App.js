import React from 'react';
import Navigation from './components/common/Navigation';
import './App.css';
import Body from './components/Body';

function App() {
  return (
    <div className="App">

      <header>
        <Navigation>
        </Navigation>
      </header>
      <Body></Body>
    </div>
  );
}

export default App;

