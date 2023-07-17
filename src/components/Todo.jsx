import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content" style={{ opacity: todo.isCompleted ? 0.8 : 1 }}>
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          ✔️
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Todo;
