interface TodoList {
    id: number
    name: string
    completed: boolean
}
interface TodoListProps{
    todoList:TodoList[]
    handleCompleted:(id:number) => void
}


const TodoList = ({todoList,handleCompleted}:TodoListProps) => {
    return (
        <div>
            <ul>
            {todoList.map((item,index)=>(
                <li onClick={()=>handleCompleted(item.id)} className={item.completed ? "is-done":""} key={index}>{item.name}</li>
            ))}
            </ul>
            <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
        </div>
    )
}

export default TodoList