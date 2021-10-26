import { useState } from 'react';
import './App.css';
import Button from './button';
import Container from './container';
import Text from './text';

function App() {
  const btns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '='];
  const [count, setCount] = useState(0);
  const [things, setThings] = useState(['']);
  const [text, setText] = useState('');
  const [wasEnd, setWasEnd] = useState(0);

  function action(sign){
    var isEnd = 0;
    var localThings = things;

    if(parseInt(sign).toString() != 'NaN'){
      if(!wasEnd){
        localThings[count] += sign;
      }else{
        localThings = [sign];
      }
    }
    else if(!(things[count] == '+' || things[count] == '-')){
      switch(sign){
        case '+':
        case '-':
          localThings.push(sign);
          setCount(count+1);
          break;
        case '=':
        case 'Enter':
          var result = 0;
          localThings.filter(e => e != '').forEach((e) => result += parseInt(e));
          localText = result ? result.toString() : '';
          localThings = [localText];
          setCount(0);
          isEnd = 1;
          setWasEnd(1);
      }
    }
    if(!isEnd){
      var localText = '';
      localThings.forEach(e => localText += e);
      setWasEnd(0);
    }
    setText(localText);
    setThings(localThings);
  }

  function handleChange(e){
    var value = e.target.value;
    if(value.length < text.length){
      var localThings = things;
      if(localThings[localThings.length-1] == '+' || localThings[localThings.length-1] == '-'){
        localThings.pop();
        setCount(count-1);
      }else{
        var lastThing = localThings[localThings.length-1];
        lastThing = lastThing.slice(0, lastThing.length-1);
        localThings[localThings.length-1] = lastThing;
      }
      setThings(localThings);
      var localText = '';
      localThings.forEach(e => localText += e);
      setText(localText);
    }
  }

  return (
    <>
      <Container btns={btns}>
        <Text text={text} onKeyPress={e => action(e.key)} onChange={handleChange} />
        {btns.map(e => <Button clicked={() => action(e)} sign={e} key={e} />)}
      </Container>
    </>
  );
}

export default App;
