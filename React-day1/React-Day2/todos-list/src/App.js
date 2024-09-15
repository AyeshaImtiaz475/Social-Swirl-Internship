import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, {useState, useEffect} from 'react';
import AddTodo from './MyComponents/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  let initTodo;
  if((localStorage.getItem("todos")) === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  // Effect for storing todos in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to delete a todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos");
  }

  // Function to add a todo
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = 0;
    if(todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  return (
    <>
      <Header title="My TodoList" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;

