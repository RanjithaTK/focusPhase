import React from "react";
function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}
export default TodoList;
