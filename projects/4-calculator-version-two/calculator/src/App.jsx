import style from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
function App() {

  let [displayCalVal, setDisplayCalVal] = useState("");
  const onButtonClick =(buttonVal)=>{
    
    if(buttonVal === 'C')
    {
       setDisplayCalVal("");
    }else if(buttonVal === '='){
       const result = eval(displayCalVal);
       setDisplayCalVal(result);
    }else{
      const newDisplayValue =  displayCalVal + buttonVal;
      setDisplayCalVal(newDisplayValue);
    }
  }
  return (
    <div id="calculator" className={style.calculator}>
      <Display calval={displayCalVal}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
