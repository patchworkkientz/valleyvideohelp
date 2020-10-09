import React from 'react';
import logo from './logo.svg';
import pro1 from './smartphone_production_1.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className={"Hero-text"}>
            <h1>Quick, Polished, Video Content, all On a Smartphone</h1>
            <h2>$5 an hour Anywhere in California Central Valley </h2>
        </div>
        <div className="Overlay"></div>
      </header>
        <p className={"Pro-offer"}>We come equipped with a professional video production kit to make smartphones videos look amazing!</p>
        <ul className={"Pro-kit"}>
            <li>Gimbel, to keep the footage from looking jittery</li>
            <li>Lighting, for even lighting</li>
            <li>Shotgun and wireless lav mic, for clean audio</li>
        </ul>
    </div>
  );
}

export default App;
