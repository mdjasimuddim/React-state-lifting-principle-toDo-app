import React, { useState } from 'react'
import Todos from './Todos';
import NewToDo from './NewToDo';


const dummyTodos = ["todo1", "todo2"]

export default function Home() {
    const [todos, setTodos] = useState(dummyTodos);
    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }
  return (
    <div>
        <NewToDo  onTodo = {handleNewTodo} />
        <Todos todos = {todos}/>
    </div>
  )
}
