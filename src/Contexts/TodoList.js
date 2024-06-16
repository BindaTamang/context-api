// src/context/TodoContext.js
import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setCurrentTodo(null);
  };

  const startEditing = (todo) => {
    setCurrentTodo(todo);
  };

  return (
    <TodoListContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo, updateTodo, currentTodo, startEditing }}>
      {children}
    </TodoListContext.Provider>
  );
};
