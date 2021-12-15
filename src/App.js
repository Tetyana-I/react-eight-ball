
import './App.css';
import {choice} from './helpers';
import answers from './answers'
import EightBall from './EightBall';
import React, { useState } from "react";

function App() {
  const getAnswer = () => {
    let answer = choice(answers);
    setMsg(answer.msg);
    setColor(answer.color);
  }
  const [msg, setMsg] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  return (
    <div className = "App" onClick = { getAnswer } >
      <h1>Magic Eight Ball</h1>
        <EightBall msg = { msg } color = { color } />
    </div>
  );
}

export default App;
