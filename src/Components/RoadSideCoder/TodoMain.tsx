import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const TodoMain = () => {
    interface TodoList {
        id: number
        name: string
        completed: boolean
    }
    const [todoText, setTodoText] = useState<string>("")
    const [todoList, setTolist] = useState<TodoList[]>([])

    const hanldeTodo = () => {
        if (todoText)
            setTolist([...todoList, { name: todoText, completed: false, id: Date.now() }])
        setTodoText("")
    }

    const handleCompleted = (id:number) =>{
        //setTolist(todoList.filter((todo)=>todo.id!==id))
        let existingData=[...todoList];
        existingData.forEach((item)=>{
            if(item.id===id) return item.completed =!item.completed 
            else return item
        })
        setTolist(existingData)
    }
    return (
        <div>
            <TodoInput todoText={todoText} setTodoText={setTodoText} hanldeTodo={hanldeTodo} />
            <TodoList todoList={todoList}  handleCompleted={(id)=>handleCompleted(id)}/>
        </div>
    )
}

export default TodoMain