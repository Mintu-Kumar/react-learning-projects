import TodoItem from "./TodoItem";
const TodoItems = ({todoList,onToDoClick})=>{

    return (
    <>
    <div className="item-container">
        {todoList.map((item)=>  <TodoItem onDeleteClick={onToDoClick} todoName={item.name} todoDate={item.date}/>)}
     </div>
    </>
    );

}
export default TodoItems;