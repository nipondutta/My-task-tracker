import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let divStyle={
    minheight:"100vh",
    margin:"25px auto"
  }
  return (
    <div className="container" style={divStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length===0?"No Todos to display":
        props.todos.map((todo)=>{
          return (
            <>
            <hr/>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            
            </>
          )
        })
      }
      
      
    </div>
  )
}
