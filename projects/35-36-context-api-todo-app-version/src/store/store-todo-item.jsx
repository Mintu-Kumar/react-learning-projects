import { createContext, useReducer } from "react"
export const ToDoItemContext = createContext({toDoItems:[], addNewItem:()=>{}, deleteItem:() =>{},
 });

 const toDoItemReducer = (currToDoItems,action) =>{
  
    let newToDoItems = currToDoItems;
    if(action.type==='NEW_ITEM'){
      newToDoItems = [...currToDoItems,{name:action.payload.itemName,date:action.payload.itemDueDate}];
         
    }else if(action.type === 'DELETE_ITEM'){
     newToDoItems = currToDoItems.filter(item=>item.name!=action.payload.itemName);
    }
   return newToDoItems
  }
 const ToDoItemContextProvider = ({children}) => {

    let initialTodoItem = [];
 // const [toDoItems,setToDoItems] = useState(initialTodoItem);
  const [toDoItems,dispatchToDoItems] = useReducer( toDoItemReducer,[]);
  const addNewItem = (itemName,itemDueDate)=>{

      //  setToDoItems((currValue) => {
      //   let newToDoItems = [...currValue,{name:itemName,date:itemDueDate}];   // this is also correct
      //   return newToDoItems
      //  });

      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          itemName,itemDueDate
        }
      };
      dispatchToDoItems(newItemAction);
      //  setToDoItems((currValue) => 
      //    [...currValue,{name:itemName,date:itemDueDate}]
      //  );
  }   
  const deleteItem=(toDoItemName)=>{
  //  const newToDoItems = toDoItems.filter(item=>item.name!=toDoItemName);
  //  setToDoItems(newToDoItems);

   const deleteItemAction = {
    type: "DELETE_ITEM",
    payload: {
      itemName:toDoItemName,
    }
  };
  dispatchToDoItems(deleteItemAction);
  }
  return (
    <ToDoItemContext.Provider value={{toDoItems, addNewItem, deleteItem}}>
        {children}
    </ToDoItemContext.Provider>
  );
 }

 export default ToDoItemContextProvider;