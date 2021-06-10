import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoTitle: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const titleInpRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTitle = titleInpRef.current!.value;
    props.onAddTodo(enteredTitle);
  };
  return (
    <form className="NewTodo" onSubmit={todoSubmitHandler}>
      <div className="InputWrapper">
        <label className="InputLabel" htmlFor="todo-tite">Todo Title</label>
        <input type="text" className="InputTite" id="todo-tite" ref={titleInpRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodo;
