import React from "react";
import Header from "./header";
import Footer from "./footer";
import Form from "./form"
import TodoList from "./todoList"
function App() {
  const todos=[{id:"t1", todoTitle:"Start working"}];

  return (
    <div className="App">
      <Header />
      <Form/>
      <TodoList items={todos}/>
      <Footer />
    </div>
  );
}

export default App;
