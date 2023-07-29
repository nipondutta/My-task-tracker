import React from 'react';
import Switchexamples from "./Switchexample.js";

export const TodoItem = ({ todo, onDelete }) => {
  const todoContainer = {
    display: "flex",
    alignItems: "center",
    marginBottom: "13px",
  };

  const todoInfo = {
    flexGrow: 1,
  };

  const removeButton = {
    marginLeft: "20px",
  };

  return (
    <div style={todoContainer}>
      <div style={todoInfo}>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
      </div>
      <Switchexamples />
      <button className="btn btn-sm btn-danger" style={removeButton} onClick={() => { onDelete(todo) }}>Remove</button>
    </div>
  );
};
