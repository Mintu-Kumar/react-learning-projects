import { useDispatch } from "react-redux";
import {useRef} from 'react'
import { counterActions } from "../store";

const Controls = () => {

 const dispatch =  useDispatch();
 const inputElement =  useRef();

 const handleIncreament = () => {
  dispatch(counterActions.increment());
 }

 const handleDecrement = () => {
   dispatch(counterActions.decrement());
 }
 const handleAdd = () => {
  dispatch(counterActions.add({num:inputElement.current.value,}));
  inputElement.current.value="";
}
const handleSubstract = () => {
  dispatch(counterActions.substract({num:inputElement.current.value,}));
  inputElement.current.value="";
}
 
    return (
    <>
    
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" onClick={handleIncreament} className="btn btn-primary">+1</button>

    <button type="button" onClick={handleDecrement} className="btn btn-success">-1</button>

  </div>
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center contol-marging">
    <input type="text" ref={inputElement} placeholder="Enter number" className="input-width"/>
    <button type="button" onClick={handleAdd} className="btn btn-primary">Add</button>

    <button type="button" onClick={handleSubstract} className="btn btn-success">Substract</button>

  </div>
  </>
    )
}

export default Controls;