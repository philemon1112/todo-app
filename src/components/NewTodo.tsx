import React,{useRef} from 'react'
import './NewTodo.css'

type NewTodoProps ={
    onAddTodo: (todoText: string) => void
}
export const NewTodo:React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (event: React.FormEvent) =>{
        event.preventDefault()
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText)
    }
  return (
    <form onSubmit={todoSubmitHandler} className="form-control">
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">add TODO</button>
    </form>
  )
}
