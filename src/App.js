import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Simple redux</h1>
      <div className='row'>
        <Card title="Card 1" red>
          <p>Card 1</p>
        </Card>
        <Card title="Card 2" green>
          <p>Card 2</p>
        </Card>
      </div>
      <div className='row'>
        <Card title="Card 3" blue>
          <p>Card 3</p>
        </Card>
        <Card title="Card 4" purple>
          <p>Card 4</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
