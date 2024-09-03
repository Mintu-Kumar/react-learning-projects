import style from "./ButtonsContainer.module.css"
const ButtonsContainer =({onButtonClick})=>{
    const buttonsName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return (
        <div className={style.buttonsContainer}>
            {
               buttonsName.map((buttons)=> 
                  <button onClick={()=>onButtonClick(buttons)} key={buttons} className={style.button}>{buttons}</button>
                  )
            }
            
       </div>
    );

}
export default ButtonsContainer;