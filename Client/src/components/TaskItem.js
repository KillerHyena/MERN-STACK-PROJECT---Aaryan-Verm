import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim()) {
      updateTodo(todo._id, { text: editText });
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateTodo(todo._id, { completed: !todo.completed })}
        className="todo-checkbox"
      />
      
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleUpdate} className="save-button">Save</button>
        </>
      ) : (
        <span 
          className={`todo-text ${todo.completed ? 'completed' : ''}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      
      <div className="todo-actions">
        <button onClick={() => setIsEditing(!isEditing)} className="edit-button">
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button onClick={() => deleteTodo(todo._id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;