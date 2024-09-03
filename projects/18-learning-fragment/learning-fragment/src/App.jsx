import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';
function App() {
    const[foodItems,setFoodItems] = useState([]);
    const onKeyDown = (event)=>{
      if(event.key==='Enter'){
        let newFoodItem = event.target.value;
        event.target.value='';
        let newItems = [...foodItems,newFoodItem];
        setFoodItems(newItems);
      }
    }
  return (
    <>
    <Container>
      <h1>Healthy Food</h1>
      <FoodInput handleOnKeyDown={onKeyDown}/>
      <ErrorMessage items={foodItems}/>
      <FoodItems items={foodItems}/>
    </Container>
      {/* <Container>
        <p>
          Above is the list of healthy food that are good for healt and well being
        </p>
      </Container> */}
    </>
  )
}

export default App
