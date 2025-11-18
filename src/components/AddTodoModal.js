import React, { useState } from "react";

const AddTodoModal = ({ todos, setTodos, setShowAddTodo }) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const addTodo = () => {
    if (!newTodo.title.trim()) {
      alert("할 일 제목을 입력해주세요.");
      return;
    }

    const todo = {
      id: Date.now(),
      title: newTodo.title,
      description: newTodo.description,
      completed: false,
      priority: newTodo.priority,
    };

    setTodos([...todos, todo]);
    setNewTodo({ title: "", description: "", priority: "medium" });
    setShowAddTodo(false);
  };

  const handleClose = () => {
    setShowAddTodo(false);
    setNewTodo({ title: "", description: "", priority: "medium" });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">
          <span>📝</span>새 할 일 추가
        </h3>

        <input
          type="text"
          className="modal-input"
          placeholder="할 일 제목을 입력하세요"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />

        <textarea
          className="modal-textarea"
          placeholder="상세 설명을 입력하세요"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
        />

        <select
          className="modal-select"
          value={newTodo.priority}
          onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
        >
          <option value="low">낮은 우선순위</option>
          <option value="medium">보통 우선순위</option>
          <option value="high">높은 우선순위</option>
        </select>

        <div className="modal-buttons">
          <button className="btn-secondary" onClick={handleClose}>
            취소
          </button>
          <button className="btn" onClick={addTodo}>
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoModal;
