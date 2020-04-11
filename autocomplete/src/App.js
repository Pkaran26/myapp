import React from 'react';
import './App.css';
import AutoComplete from './Components/AutoComplete/AutoComplete'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <AutoComplete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
