import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image'

function App() {
  return (
    <div className="App">
      <h1>How I feel about coding right now</h1>
      <Image url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-6-30-funny-horror-1593555819.png?crop=0.426xw:0.853xh;0.0288xw,0.0224xh&resize=640:*"}/>
    </div>
  );
}

export default App;
