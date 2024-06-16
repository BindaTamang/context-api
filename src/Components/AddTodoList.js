// src/components/TodoForm.js
import React, { useState, useContext, useEffect } from 'react';
import { TodoListContext } from '../Contexts/TodoList';

const TodoForm = () => {
  const { addTodo, updateTodo, currentTodo } = useContext(TodoListContext);
  const [text, setText] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
    } else {
      setText('');
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      if (currentTodo) {
        updateTodo(currentTodo.id, text);
      } else {
        addTodo(text);
      }
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add or update a todo"
      />
      <button type="submit">{currentTodo ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;
