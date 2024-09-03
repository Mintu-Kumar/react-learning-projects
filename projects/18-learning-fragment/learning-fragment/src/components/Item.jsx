import style from "./Item.module.css"

const Item =({foodItem ,handleBuyButton})=>{


  const handleBuyButtonClick = (event)=> {
    console.log(event);
    console.log(`${foodItem} being bought`)
  }
return (<>
  <li  className="list-group-item">
    <span >{foodItem}</span>
    <button className={`${style.button} btn btn-info`}
    onClick = {handleBuyButton}
    >
      Buy
      </button>
  </li>
</>)
}

export default Item;