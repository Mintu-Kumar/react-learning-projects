import TodoItem from "./TodoItem";
const TodoItems = ({todoList})=>{

    return (
    <>
    <div className="item-container">
        {todoList.map((item)=>  <TodoItem todoName={item.name} todoDate={item.date}/>)}
     </div>
    </>
    );

}
export default TodoItems;