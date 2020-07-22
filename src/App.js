import React from 'react';
import './App.css';
import Interval from './components/Interval';
import Sum from './components/Sum';
import Average from './components/Average';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <h1>Simple redux</h1>
      <div className='row'>
        <Interval />
      </div>
      <div className='row'>
        <Sum />
        <Average />
        <Random />
      </div>
    </div>
  );
}

export default App;
