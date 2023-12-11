"use client"

import {useState ,useEffect} from "react"

const Todo = ()=> {
   const [todo, setTodo] = useState({})

   useEffect(() => {
    // let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let result = await response.json()
    //     setTodo(result)
    fetch('https://jsonplaceholder.typicode.com/todos/1',

    {cache:"no-store"})
      .then(response => response.json())
      .then(json => setTodo(json))
    
   },[])
   
  return (
    <div>
      <h1>{todo.title} "dd"</h1>


    </div>
  )
}

export default Todo