import AppName from "./component/AppName"
import AddToDo from "./component/AddToDo"
import TodoItems from "./component/TodoItems"
import WelcomeMessage from "./component/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {

  let initialTodoItem = [];
  const [toDoItems,setToDoItems] = useState(initialTodoItem);
  const handleNewItem = (itemName,itemDueDate)=>{

      //  setToDoItems((currValue) => {
      //   let newToDoItems = [...currValue,{name:itemName,date:itemDueDate}];
      //   return newToDoItems
      //  });
       setToDoItems((currValue) => 
         [...currValue,{name:itemName,date:itemDueDate}]
       );
  }   
  const handleDeleteItem=(toDoItemName)=>{
   const newToDoItems = toDoItems.filter(item=>item.name!=toDoItemName);
   setToDoItems(newToDoItems);
  }
  return (
  <center >
     <AppName/>
     <AddToDo onNewItem= {handleNewItem}/>
      {toDoItems.length === 0 && <WelcomeMessage/>}
     <TodoItems onToDoClick={handleDeleteItem} todoList={toDoItems}/>
  </center>
  )
}

export default App
