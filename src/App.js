import { useState } from 'react';
import './App.css';
import Button from './button';

function App() {
  const [count, setCount] = useState(0);
  const [things, setThings] = useState(['', '', '']);
  const [btns, setBtns] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '=']);
  const [text, setText] = useState('');

  function action(sign){
    if((sign == '+' || sign == '-') && count == 0 && things[0] != ''){ 
      var thing = things[1]+sign;
      setThings([things[0], thing, things[2]]);
      setText(things[0]+thing+things[2]);
      setCount(1); 
    }else if(sign == '=' && count == 1 && things[2] != ''){
      if(things[1] == '+'){
        setText(parseInt(things[0])+parseInt(things[2]));
        setThings(['', '', '']);
        setCount(0); 
      }
      if(things[1] == '-'){
        setText(parseInt(things[0])-parseInt(things[2]));
        setThings(['', '', '']);
        setCount(0); 
      }
    }else if(parseInt(sign) >= 1 && parseInt(sign) <= 9){
      switch(count){
        case 0:
          var thing = things[0]+sign;
          setThings([thing, things[1], things[2]]);
          setText(thing+things[1]+things[2]);
          break;
        case 1:
          var thing = things[2]+sign;
          setThings([things[0], things[1], thing]);
          setText(things[0]+things[1]+thing);
          break;
      }
    }
  }

  return (
    <>
      <div className="d-flex m-3 p-4 border border-dark rounded" style={{width:150+54*btns.length}}>
        <div className="align-self-center border border-dark rounded d-flex justify-content-end" 
          style={{width:100, paddingRight:5, height:30}}>{text}</div>
        {btns.map(e => <Button clicked={() => action(e)} sign={e} key={e} />)}
      </div>

    </>
  );
}

export default App;
