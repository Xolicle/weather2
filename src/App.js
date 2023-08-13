import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
         Weather App
        </h1>
        <Weather/>
        <p>
        <a href='https://github.com/Xolicle/weather2'>Coded by </a> 
        Xolisile Ndlovu
      </p>
      </header>
      
      <div>
        <p>Testing
        </p>
      </div>
    </div>
    
  );
}

export default App;
