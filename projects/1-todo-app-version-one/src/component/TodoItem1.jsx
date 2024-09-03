function TodoItem1(){

    let todoName="Buy Milk";
    let todoDate= "4/11/2024";
    return <div className="container"> 
    <div className="row mk-row">
      <div className="col-6">
      {todoName}
      </div>
      <div className="col-4">
      {todoDate}
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-danger mk-button">Danger</button>
      </div>
    </div>
   </div> 

}

export default TodoItem1;