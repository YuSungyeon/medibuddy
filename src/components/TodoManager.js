import React from "react";
import { getPriorityColor } from "../utils/helpers";

const TodoManager = ({ todos, setTodos, setShowAddTodo }) => {
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="card">
      <h2>
        <span className="icon">📅</span>할 일 관리
      </h2>
      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTodo(todo.id)}
          >
            <strong
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.completed ? "✅ " : ""}
              {todo.title}
            </strong>
            <br />
            <small
              style={{
                color: todo.completed ? "#666" : "#718096",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.description}
            </small>
            {!todo.completed && (
              <div
                className="priority-badge"
                style={{
                  backgroundColor: getPriorityColor(todo.priority),
                }}
              >
                {todo.priority === "high"
                  ? "높음"
                  : todo.priority === "medium"
                  ? "보통"
                  : "낮음"}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => setShowAddTodo(true)}>
        새 할 일 추가
      </button>
    </div>
  );
};

export default TodoManager;
