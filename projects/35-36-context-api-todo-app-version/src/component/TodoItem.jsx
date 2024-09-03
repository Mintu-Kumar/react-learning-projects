import { useContext } from "react";
import { ToDoItemContext } from "../store/store-todo-item";

function TodoItem({todoName,todoDate}){
  const {deleteItem} = useContext(ToDoItemContext);
    return <div className="container"> 
    <div className="row mk-row">
      <div key={todoName} className="col-6">
      {todoName}
      </div>
      <div key={todoDate} className="col-4">
      {todoDate}
      </div>
      <div className="col-2">
      <button type="button" onClick={()=>deleteItem(todoName)} className="btn btn-danger mk-button">Delete</button>
      </div>
    </div>
   </div> 
}

export default TodoItem;