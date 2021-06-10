import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import TodoList from "./todoList";
import NewTodo from "./NewTodo";
import "./css/App.css";

const App: React.FC = () => {
  interface Todo {
    id: string;
    todoTitle: string;
  }

  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (title: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), todoTitle: title },
    ]);
  };

  const deleteTodoHandler=(todoId:string)=>{
    setTodos(prevTodos=>{
      return prevTodos.filter(todo=>todo.id !==todoId)
    })
  }
  return (
    <div className="App">
      <Header />
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
      <Footer />
    </div>
  );
};

export default App;
