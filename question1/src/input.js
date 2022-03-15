import React, { useState } from "react";
import TodoList from "./TodoList";
function Input() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = (e) => {
    const newTodo = [...todo, value];
    setTodo(newTodo);
    setValue("");
  };
  return (
    <div>
      <input onChange={handleOnChange} value={value}/>
      <button onClick={handleAdd}>todo</button>
      <TodoList todos={todo} />
    </div>
  );
}
export default Input;
