import React from "react";

type buttonProps = {
    //handleClick:()=> void
    //handleClick:(event:React.MouseEvent<HTMLButtonElement>)=> void
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=> void // passing event
}
const Button = (props:buttonProps) => {
    return (
       <button onClick={(event)=>props.handleClick(event,444)}>CLick me</button>
    )
}

export default Button;