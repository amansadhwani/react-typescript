import React from "react";

type inputProps = {
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
}
const Button = (props:inputProps) => {
    return (
       <input type='text' value={props.value} onChange={props.handleChange}/>
    )
}

export default Button;