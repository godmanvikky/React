import React from 'react';
import {data} from '../src/Constants/data';
import MyRides from '../src/Components/MyRides';
import './App.css';
function App() {
  console.log(data);
  return (
    <div className="main">
      
      <div className="topnav">
      <h3 className="triagram">&#9776;</h3>
      <h3 className="title">Your Rides</h3>
        </div>
      <MyRides data={data}/>
    </div>
  );
}

export default App;
