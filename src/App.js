import './App.css';
import Header from "./MyComponents/Header.js";
import { Todos } from "./MyComponents/Todos.js";
import { Footer } from "./MyComponents/Footer.js";
import { AddTodo } from "./MyComponents/AddTodo.js";
import React, { useState, useEffect } from 'react';
import { About } from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelte", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    console.log("I am adding this", title, desc);
    let s;
    if (todos.length === 0) {
      s = 0;
    }
    else {
      s = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: s,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
      <Header title="My Task Tracker" />
      <Routes>
      <Route path="/" element={ // Use "element" instead of "component" or "render"
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />
      <Route exact path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
