import { useContext } from "react";
import { ToDoItemContext } from "../store/store-todo-item";

const WelcomeMessage = ({toDoItms})=>
{
   const constexObj = useContext(ToDoItemContext);
   const toDoItems = constexObj.toDoItems;
   return (toDoItems.length === 0 && <p>Enjoy your day</p>);
}

export default WelcomeMessage;