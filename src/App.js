import './App.css';
import React from 'react';
import Solution from './Solution';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fisher and Paykel Coding Challenge</h1>
        <h5>Enter a, b and c coefficients to display a quadratic equation</h5>
        <Solution></Solution>
      </header>
    </div>
  );
}

export default App;
