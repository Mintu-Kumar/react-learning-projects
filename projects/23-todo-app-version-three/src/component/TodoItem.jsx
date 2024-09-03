function TodoItem({onDeleteClick,todoName,todoDate}){
  
    return <div className="container"> 
    <div className="row mk-row">
      <div key={todoName} className="col-6">
      {todoName}
      </div>
      <div key={todoDate} className="col-4">
      {todoDate}
      </div>
      <div className="col-2">
      <button type="button" onClick={()=>onDeleteClick(todoName)} className="btn btn-danger mk-button">Delete</button>
      </div>
    </div>
   </div> 
}

export default TodoItem;