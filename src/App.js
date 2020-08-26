import React from 'react';
import logo from './tesla-black-logo-circle.png';
import './App.css';
import Tesla from './Tesla'
import Audi from './Audi'
import Benz from './Benz'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="http://www.tesla.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Tesla
        </a>
      </header>
      <Tesla />
      <Audi />
      <Benz />
    </div>
  );
}

export default App;
