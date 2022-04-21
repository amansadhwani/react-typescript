interface TodoInputProps{
    todoText:string
    setTodoText:React.Dispatch<React.SetStateAction<string>>
    hanldeTodo: () => void
}


const TodoInput = ({todoText,setTodoText,hanldeTodo}:TodoInputProps) => {
    return (
        <div>
            <input value={todoText} onChange={(e)=> setTodoText(e.target.value)}/>
            <button onClick = {()=>hanldeTodo()} >Add </button>
        </div>
    )
}

export default TodoInput