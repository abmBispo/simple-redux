import React, { useState } from 'react';
import './App.css';
import Interval from './components/Interval';
import Sum from './components/Sum';
import Average from './components/Average';
import Random from './components/Random';

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5);

  return (
    <div className="App">
      <h1>Simple redux</h1>
      <div className='row'>
        <Interval
          min={min}
          max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}/>
      </div>
      <div className='row'>
        <Sum min={min} max={max} />
        <Average min={min} max={max} />
        <Random min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
