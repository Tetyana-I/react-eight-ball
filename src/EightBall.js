import './EightBall.css';
import {choice} from './helpers';
import { useState } from "react";

const EightBall = ({ answers }) => {
    function getAnswer() {
        let answer = choice(answers);
        setMsg(answer.msg);
        setColor(answer.color);
    }
    
    function resetBall() {
        setMsg('Think of a Question');
        setColor('black');
    }

    const [msg, setMsg] = useState('Think of a Question');
    const [color, setColor] = useState('black');

    return (
        <>
            <h2>Magic Eight Ball</h2>
            <div className = "EightBall" onClick = { getAnswer } style = {{ backgroundColor: color }}>
            <p className = "EightBall-msg">{ msg }</p> 
            </div> 
            <button className = "EightBall-btn" onClick = { resetBall }>Reset</button>       
        </>
    );
}

export default EightBall;

