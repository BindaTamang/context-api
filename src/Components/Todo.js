// src/components/TodoItem.js
import React, { useContext } from 'react';
import { TodoListContext } from '../Contexts/TodoList';

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo, startEditing } = useContext(TodoListContext);

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => startEditing(todo)}>Update</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
