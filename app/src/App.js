import React from 'react';
import Navigation from './components/Navigation';
import './App.css';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation>
        </Navigation>
      </header>
      <body>
        <Body></Body>
      </body>
    </div>
  );
}

export default App;

