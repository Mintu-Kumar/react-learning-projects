import { useState ,useRef, useContext} from "react";
import { ToDoItemContext } from "../store/store-todo-item";

function AddToDo(){
   const toDoNameElement = useRef();
   const toDoDateElement = useRef();
   const {addNewItem} = useContext(ToDoItemContext);
   const handleAddButtonClicked =(event)=>{
    //console.log(event);
    event.preventDefault();
    const toDoName = toDoNameElement.current.value;
    const dueDate =  toDoDateElement.current.value;
    addNewItem(toDoName,dueDate)
    toDoNameElement.current.value = "";
    toDoDateElement.current.value = "";
   }
    return(
        <div className="container"> 
            <form className="row mk-row" onSubmit={handleAddButtonClicked}>
                <div className="col-6">
                    <input ref={toDoNameElement} type='text' placeholder="Enter todo here"></input>
                </div>
                <div className="col-4">
                    <input ref={toDoDateElement} type="date" ></input>
                </div>
                <div className="col-2">
                <button  className="btn btn-success mk-button">Add</button>
                </div>
            </form>
       </div> 
    )

}

export default AddToDo;