import React from "react";

interface TodoListProps {
  items: { id: string; todoTitle: string }[];
  onDeleteTodo:(id:string)=>void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul className="TodoList">
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span> {todo.todoTitle}</span>
          <button onClick={props.onDeleteTodo.bind(null,todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
