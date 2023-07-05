import React from 'react'
import Home from './State_lifting/Home'
//App.js -> Home.js(todps = ["item1", "item2"]) -> Todos -> Todo
//Components -> newTodo
export default function App() {
  return (
    <div>
      <Home />
    </div>
  )
}
