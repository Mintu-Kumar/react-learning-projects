import { useContext } from "react";
import { ToDoItemContext } from "../store/store-todo-item";
import TodoItem from "./TodoItem";
const TodoItems = ({onToDoClick})=>{
     const constexObj = useContext(ToDoItemContext);
     const todoList = constexObj.toDoItems;
    return (
    <>
    <div className="item-container">
        {todoList.map((item)=>  <TodoItem key={item.name} todoName={item.name} todoDate={item.date}/>)}
     </div>
    </>
    );

}
export default TodoItems;