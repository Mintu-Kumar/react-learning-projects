
import style from "./FoodInput.module.css"
const FoodInput = ({handleOnKeyDown})=>{
  
   return (
     <input 
     type="text" 
     placeholder="Enter food item here."
     className={style.foodInput}
     onKeyDown ={handleOnKeyDown}
     />
  );

}

export default FoodInput;