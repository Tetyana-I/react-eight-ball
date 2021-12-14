
import './App.css';
import {choice} from './helpers';
import answers from './answers'
import EightBall from './EightBall';


function App() {
  let answer = choice(answers);
  return (
    <div className="App">
      <h1>Magic Eight Ball</h1>
        <EightBall msg = 'Think of a Question' color = 'black' />
        <EightBall msg = {answer.msg} color = {answer.color} />
    </div>
  );
}

export default App;
