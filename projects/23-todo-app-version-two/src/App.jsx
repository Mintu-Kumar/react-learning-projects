import AppName from "./component/AppName"
import AddToDo from "./component/AddToDo"
import TodoItems from "./component/TodoItems"
import "./App.css";
function App() {

  let todoItem = [
                    {name:"Buy Milk", date : "4/11/2024",},
                    {name : "Wash Dish",date :"4/11/2024"}];
  return (
  <center >
     <AppName/>
     <AddToDo/>
     <TodoItems todoList={todoItem}/>
  </center>
  )
}

export default App
