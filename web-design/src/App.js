import React, {useState} from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import logo from "./Assets/logo.png";
import Tabs from './hooks/Tabs';
import Cart from './hooks/Tickets/Cart/Cart';

function App() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const DATE_FEST = new Date('January 26, 2023 00:00:00');
  const DateFest = DATE_FEST.getTime();

  return (
    <div className="App wave">
        {isOn ? <i className='bx bx-cart-alt cart-btn' onClick={toggleSwitch}></i> : <><h1 onClick={toggleSwitch}>O</h1><Cart /></>}
      <div className="hero">
        <h1>Welcome to the <strong>National Potato Festival</strong></h1>
        <h2> January 26th - 27th 2023</h2>
        <h2> Montreal Downtown</h2>
      </div>
    <img src={logo}></img>
     
        <Tabs/>
     
      <footer>
        <CountdownTimer targetDate={DateFest} />
      </footer>
    </div>
  );
}

export default App;
