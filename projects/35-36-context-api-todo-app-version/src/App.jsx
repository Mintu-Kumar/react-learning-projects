import AppName from "./component/AppName"
import AddToDo from "./component/AddToDo"
import TodoItems from "./component/TodoItems"
import WelcomeMessage from "./component/WelcomeMessage";
import "./App.css";
import { useState, useReducer } from "react";
import ToDoItemContextProvider, { ToDoItemContext } from "./store/store-todo-item";




function App() {

  
  
  return (
   <ToDoItemContextProvider>   {/* if the  key and value name is same then we can pass only one name */}
    <center >
      <AppName/> 
      <AddToDo/>
      <WelcomeMessage />
      <TodoItems/>
    </center>
  </ToDoItemContextProvider> 
  )
}

export default App
