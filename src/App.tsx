import React, {useState} from 'react';
import './App.css';
import { NewTodo } from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) =>{
    setTodos(prevTodos =>[ ...prevTodos, 
      {id: Math.random().toString(), text: text}
    ])
  }

  const todoDeleteHandler = (todoId:string) => {
    setTodos(prevTodos =>{
      return prevTodos.filter(todo => todo.id !==todoId)
    })
  }
  return (
    <>
    {/* a component that adds todos */}
    <NewTodo onAddTodo={todoAddHandler} />
    <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </>
    );
}

export default App;
